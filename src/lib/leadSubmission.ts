import type { SupabaseClient } from '@supabase/supabase-js'
import { assertProductionSender } from '@/lib/sendLeadEmails'
import { Resend } from 'resend'

export type LeadEmailKind = 'founder_notification' | 'prospect_confirmation'

export type LeadRecord = {
  id: string
  name: string
  email: string
  business_name: string | null
  business_type: string | null
  message: string
  idempotency_key: string
}

export type LeadInput = {
  name: string
  email: string
  businessName: string
  businessType: string
  message: string
  idempotencyKey: string
  source?: string
}

const IDEMPOTENCY_KEY_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function isValidIdempotencyKey(value: string) {
  return IDEMPOTENCY_KEY_RE.test(value)
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }
  return new Resend(apiKey)
}

export async function createOrGetLeadByIdempotencyKey(
  supabase: SupabaseClient,
  input: LeadInput,
): Promise<{ lead: LeadRecord; created: boolean }> {
  const insert = await supabase
    .from('leads')
    .insert({
      name: input.name,
      email: input.email,
      business_name: input.businessName || null,
      business_type: input.businessType || null,
      message: input.message,
      source: input.source || 'website',
      idempotency_key: input.idempotencyKey,
    })
    .select('id, name, email, business_name, business_type, message, idempotency_key')
    .single()

  if (!insert.error && insert.data) {
    return { lead: insert.data as LeadRecord, created: true }
  }

  // Unique violation on idempotency_key
  if (insert.error?.code === '23505') {
    const existing = await supabase
      .from('leads')
      .select('id, name, email, business_name, business_type, message, idempotency_key')
      .eq('idempotency_key', input.idempotencyKey)
      .single()

    if (existing.error || !existing.data) {
      throw new Error('Duplicate submission detected but existing lead could not be loaded.')
    }

    return { lead: existing.data as LeadRecord, created: false }
  }

  throw new Error(insert.error?.message || 'Could not save lead.')
}

async function claimEmailDelivery(
  supabase: SupabaseClient,
  leadId: string,
  kind: LeadEmailKind,
): Promise<'claimed' | 'already_sent' | 'already_claimed_or_failed'> {
  const insert = await supabase
    .from('lead_email_deliveries')
    .insert({
      lead_id: leadId,
      kind,
      status: 'pending',
    })
    .select('id, status')
    .single()

  if (!insert.error && insert.data) {
    return 'claimed'
  }

  if (insert.error?.code === '23505') {
    const existing = await supabase
      .from('lead_email_deliveries')
      .select('status')
      .eq('lead_id', leadId)
      .eq('kind', kind)
      .single()

    if (existing.data?.status === 'sent') {
      return 'already_sent'
    }

    // pending or failed — do not auto-retry (manual review for failures)
    return 'already_claimed_or_failed'
  }

  throw new Error(insert.error?.message || 'Could not claim email delivery slot.')
}

async function markEmailDelivery(
  supabase: SupabaseClient,
  leadId: string,
  kind: LeadEmailKind,
  update: {
    status: 'sent' | 'failed'
    errorMessage?: string
    providerMessageId?: string
  },
) {
  const { error } = await supabase
    .from('lead_email_deliveries')
    .update({
      status: update.status,
      error_message: update.errorMessage ?? null,
      provider_message_id: update.providerMessageId ?? null,
      updated_at: new Date().toISOString(),
    })
    .eq('lead_id', leadId)
    .eq('kind', kind)

  if (error) {
    console.error('Failed to update lead_email_deliveries:', error)
  }
}

/**
 * Sends founder + prospect emails at most once per lead.
 * Failures are recorded on lead_email_deliveries for manual review.
 * No automatic retry loops. Resend is only used when a send slot is newly claimed.
 */
export async function ensureLeadEmailsOnce(
  supabase: SupabaseClient,
  lead: LeadRecord,
): Promise<{ founder: 'sent' | 'skipped' | 'failed'; prospect: 'sent' | 'skipped' | 'failed' }> {
  const result: {
    founder: 'sent' | 'skipped' | 'failed'
    prospect: 'sent' | 'skipped' | 'failed'
  } = { founder: 'skipped', prospect: 'skipped' }

  const founderClaim = await claimEmailDelivery(supabase, lead.id, 'founder_notification')
  if (founderClaim === 'claimed') {
    try {
      const founderEmail = process.env.FOUNDER_EMAIL
      const fromEmail = process.env.RESEND_FROM_EMAIL
      if (!founderEmail || !fromEmail) {
        throw new Error('Missing FOUNDER_EMAIL or RESEND_FROM_EMAIL')
      }
      assertProductionSender(fromEmail)
      const resend = getResend()

      const founderResult = await resend.emails.send({
        from: fromEmail,
        to: founderEmail,
        subject: `New Meridian lead: ${lead.name}`,
        text: [
          'New founding-offer lead from the Meridian site.',
          '',
          `Name: ${lead.name}`,
          `Email: ${lead.email}`,
          `Business: ${lead.business_name || '—'}`,
          `Type: ${lead.business_type || '—'}`,
          '',
          'Message:',
          lead.message || '—',
          '',
          'View and manage leads in the Supabase Table Editor (leads).',
        ].join('\n'),
      })

      if (founderResult.error) {
        throw new Error(founderResult.error.message)
      }

      await markEmailDelivery(supabase, lead.id, 'founder_notification', {
        status: 'sent',
        providerMessageId: founderResult.data?.id,
      })
      result.founder = 'sent'
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown founder email error'
      await markEmailDelivery(supabase, lead.id, 'founder_notification', {
        status: 'failed',
        errorMessage: message,
      })
      result.founder = 'failed'
    }
  }

  const prospectClaim = await claimEmailDelivery(supabase, lead.id, 'prospect_confirmation')
  if (prospectClaim === 'claimed') {
    try {
      const fromEmail = process.env.RESEND_FROM_EMAIL
      if (!fromEmail) {
        throw new Error('Missing RESEND_FROM_EMAIL')
      }
      assertProductionSender(fromEmail)
      const resend = getResend()

      const prospectResult = await resend.emails.send({
        from: fromEmail,
        to: lead.email,
        subject: 'We got your message — Meridian',
        text: [
          `Hi ${lead.name},`,
          '',
          'Thanks for getting in touch with Meridian. We received your note and will reply personally with next steps for the founding offer.',
          '',
          'If you need to add anything, just reply to this email.',
          '',
          '— Meridian',
        ].join('\n'),
      })

      if (prospectResult.error) {
        throw new Error(prospectResult.error.message)
      }

      await markEmailDelivery(supabase, lead.id, 'prospect_confirmation', {
        status: 'sent',
        providerMessageId: prospectResult.data?.id,
      })
      result.prospect = 'sent'
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown prospect email error'
      await markEmailDelivery(supabase, lead.id, 'prospect_confirmation', {
        status: 'failed',
        errorMessage: message,
      })
      result.prospect = 'failed'
    }
  }

  return result
}

/** Safe client-facing copy — never include provider/internal error details. */
export const LEAD_DELIVERY_ISSUE_MESSAGE =
  'We received your enquiry, but there was a problem sending the confirmation email. We still have your details and will follow up personally — no need to submit again.'

export type LeadEmailDeliveryState = 'complete' | 'delivery_issue'

/**
 * Reads recorded delivery rows. Does not send or retry.
 * Complete only when both founder + prospect are marked sent.
 */
export async function getLeadEmailDeliveryState(
  supabase: SupabaseClient,
  leadId: string,
): Promise<LeadEmailDeliveryState> {
  const { data, error } = await supabase
    .from('lead_email_deliveries')
    .select('kind, status')
    .eq('lead_id', leadId)

  if (error) {
    console.error('Could not load lead_email_deliveries:', error)
    return 'delivery_issue'
  }

  const byKind = new Map((data ?? []).map((row) => [row.kind as LeadEmailKind, row.status as string]))
  const founder = byKind.get('founder_notification')
  const prospect = byKind.get('prospect_confirmation')

  if (founder === 'sent' && prospect === 'sent') {
    return 'complete'
  }

  return 'delivery_issue'
}
