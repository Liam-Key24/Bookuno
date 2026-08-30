import { randomBytes } from 'node:crypto'
import type { SupabaseClient } from '@supabase/supabase-js'
import { assertProductionSender } from '@/lib/sendLeadEmails'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'
import { Resend } from 'resend'

export type NewsletterStatus = 'pending' | 'subscribed' | 'unsubscribed'

export type NewsletterSubscriber = {
  id: string
  email: string
  first_name: string | null
  status: NewsletterStatus
  confirmation_token: string | null
  unsubscribe_token: string
  consent_timestamp: string
  source: string
  created_at: string
  confirmed_at: string | null
  unsubscribed_at: string | null
}

export function createNewsletterToken() {
  return randomBytes(32).toString('hex')
}

export function getSiteOrigin() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return raw.replace(/\/$/, '')
}

export function buildConfirmUrl(token: string) {
  return `${getSiteOrigin()}/api/newsletter/confirm?token=${encodeURIComponent(token)}`
}

export function buildUnsubscribeUrl(token: string) {
  return `${getSiteOrigin()}/api/newsletter/unsubscribe?token=${encodeURIComponent(token)}`
}

export function getNewsletterPostalAddress() {
  const configured = process.env.NEWSLETTER_POSTAL_ADDRESS?.trim()
  if (configured) return configured
  return `Contact ${CONTACT_EMAIL} for our postal address.`
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }
  return new Resend(apiKey)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function normaliseNewsletterEmail(value: string) {
  return value.trim().toLowerCase()
}

export function validateNewsletterSignupInput(input: {
  email: string
  firstName: string
  consent: boolean
}) {
  const email = normaliseNewsletterEmail(input.email)
  const firstName = input.firstName.trim().slice(0, 80)

  if (!isValidEmail(email) || email.length > 254) {
    return { ok: false as const, error: 'Please enter a valid email address.' }
  }

  if (!input.consent) {
    return {
      ok: false as const,
      error: `Please confirm you want to receive ${SITE_NAME} promotional emails.`,
    }
  }

  return { ok: true as const, email, firstName: firstName || null }
}

/**
 * Idempotent subscribe: always returns a generic success outcome to callers.
 * Never reveals whether the address was already on the list.
 */
export async function upsertNewsletterPending(
  supabase: SupabaseClient,
  input: {
    email: string
    firstName: string | null
    source: string
  },
): Promise<{ subscriber: NewsletterSubscriber; shouldSendConfirmation: boolean }> {
  const existing = await supabase
    .from('newsletter_subscribers')
    .select(
      'id, email, first_name, status, confirmation_token, unsubscribe_token, consent_timestamp, source, created_at, confirmed_at, unsubscribed_at',
    )
    .eq('email', input.email)
    .maybeSingle()

  if (existing.error) {
    throw new Error(existing.error.message)
  }

  const consentTimestamp = new Date().toISOString()
  const confirmationToken = createNewsletterToken()
  const unsubscribeToken = createNewsletterToken()

  if (!existing.data) {
    const inserted = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: input.email,
        first_name: input.firstName,
        status: 'pending',
        confirmation_token: confirmationToken,
        unsubscribe_token: unsubscribeToken,
        consent_timestamp: consentTimestamp,
        source: input.source,
      })
      .select(
        'id, email, first_name, status, confirmation_token, unsubscribe_token, consent_timestamp, source, created_at, confirmed_at, unsubscribed_at',
      )
      .single()

    if (inserted.error || !inserted.data) {
      throw new Error(inserted.error?.message || 'Could not save newsletter signup.')
    }

    return {
      subscriber: inserted.data as NewsletterSubscriber,
      shouldSendConfirmation: true,
    }
  }

  const row = existing.data as NewsletterSubscriber

  // Already subscribed — do not reveal; do not resend confirmation.
  if (row.status === 'subscribed') {
    return { subscriber: row, shouldSendConfirmation: false }
  }

  // Pending or unsubscribed → refresh consent + confirmation token and (re)send confirm.
  const updated = await supabase
    .from('newsletter_subscribers')
    .update({
      first_name: input.firstName ?? row.first_name,
      status: 'pending',
      confirmation_token: confirmationToken,
      unsubscribe_token: row.unsubscribe_token || unsubscribeToken,
      consent_timestamp: consentTimestamp,
      source: input.source,
      confirmed_at: null,
      unsubscribed_at: null,
    })
    .eq('id', row.id)
    .select(
      'id, email, first_name, status, confirmation_token, unsubscribe_token, consent_timestamp, source, created_at, confirmed_at, unsubscribed_at',
    )
    .single()

  if (updated.error || !updated.data) {
    throw new Error(updated.error?.message || 'Could not update newsletter signup.')
  }

  return {
    subscriber: updated.data as NewsletterSubscriber,
    shouldSendConfirmation: true,
  }
}

export async function sendNewsletterConfirmationEmail(subscriber: NewsletterSubscriber) {
  if (!subscriber.confirmation_token) {
    throw new Error('Missing confirmation token')
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL
  if (!fromEmail) {
    throw new Error('Missing RESEND_FROM_EMAIL')
  }

  assertProductionSender(fromEmail)
  const resend = getResend()
  const confirmUrl = buildConfirmUrl(subscriber.confirmation_token)
  const name = subscriber.first_name?.trim() || 'there'

  const text = [
    `Hi ${name},`,
    '',
    `Thanks for signing up to the ${SITE_NAME} newsletter.`,
    'Please confirm your email so we can send occasional promotional updates about managed websites for salons, barbers, and restaurants.',
    '',
    `Confirm here: ${confirmUrl}`,
    '',
    'If you did not request this, you can ignore this email.',
    '',
    `— ${SITE_NAME}`,
    CONTACT_EMAIL,
  ].join('\n')

  const html = `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f4fafb;font-family:Arial,Helvetica,sans-serif;color:#163a44;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4fafb;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;">
          <tr>
            <td style="background:#16697A;padding:20px 24px;color:#ffffff;font-size:20px;font-weight:700;">${SITE_NAME}</td>
          </tr>
          <tr>
            <td style="padding:28px 24px;">
              <p style="margin:0 0 12px;font-size:16px;">Hi ${escapeHtml(name)},</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.5;">
                Thanks for signing up to the ${SITE_NAME} newsletter. Confirm your email to receive occasional
                <strong>promotional updates</strong> about managed websites for independent salons, barbers, and restaurants.
              </p>
              <p style="margin:0 0 24px;">
                <a href="${confirmUrl}" style="display:inline-block;background:#FFA62B;color:#163a44;text-decoration:none;font-weight:700;border-radius:20px;padding:12px 20px;">
                  Confirm subscription
                </a>
              </p>
              <p style="margin:0;font-size:13px;line-height:1.5;color:#4a6b73;">
                If you did not request this, ignore this email. You can unsubscribe any time after confirming.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#e8f4f6;font-size:12px;color:#4a6b73;line-height:1.5;">
              ${SITE_NAME} · ${CONTACT_EMAIL}<br/>
              ${escapeHtml(getNewsletterPostalAddress())}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()

  const result = await resend.emails.send({
    from: fromEmail,
    to: subscriber.email,
    subject: `Confirm your ${SITE_NAME} newsletter`,
    text,
    html,
  })

  if (result.error) {
    throw new Error(result.error.message)
  }

  return result.data?.id ?? null
}

export async function confirmNewsletterSubscriber(
  supabase: SupabaseClient,
  token: string,
): Promise<'confirmed' | 'already' | 'invalid'> {
  if (!token || token.length < 16) return 'invalid'

  const byToken = await supabase
    .from('newsletter_subscribers')
    .select(
      'id, email, first_name, status, confirmation_token, unsubscribe_token, consent_timestamp, source, created_at, confirmed_at, unsubscribed_at',
    )
    .eq('confirmation_token', token)
    .maybeSingle()

  if (byToken.error) {
    throw new Error(byToken.error.message)
  }

  if (!byToken.data) {
    return 'invalid'
  }

  const row = byToken.data as NewsletterSubscriber

  if (row.status === 'subscribed') {
    // Token still present somehow — clear it; treat as already confirmed.
    await supabase
      .from('newsletter_subscribers')
      .update({ confirmation_token: null })
      .eq('id', row.id)
    return 'already'
  }

  if (row.status !== 'pending') {
    return 'invalid'
  }

  const updated = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'subscribed',
      confirmation_token: null,
      confirmed_at: new Date().toISOString(),
      unsubscribed_at: null,
    })
    .eq('id', row.id)
    .eq('confirmation_token', token)
    .select('id')
    .maybeSingle()

  if (updated.error) {
    throw new Error(updated.error.message)
  }

  if (!updated.data) {
    // Race: already confirmed by parallel request
    return 'already'
  }

  return 'confirmed'
}

export async function unsubscribeNewsletterSubscriber(
  supabase: SupabaseClient,
  token: string,
): Promise<'unsubscribed' | 'already' | 'invalid'> {
  if (!token || token.length < 16) return 'invalid'

  const found = await supabase
    .from('newsletter_subscribers')
    .select(
      'id, email, first_name, status, confirmation_token, unsubscribe_token, consent_timestamp, source, created_at, confirmed_at, unsubscribed_at',
    )
    .eq('unsubscribe_token', token)
    .maybeSingle()

  if (found.error) {
    throw new Error(found.error.message)
  }

  if (!found.data) {
    return 'invalid'
  }

  const row = found.data as NewsletterSubscriber

  if (row.status === 'unsubscribed') {
    return 'already'
  }

  const updated = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'unsubscribed',
      confirmation_token: null,
      unsubscribed_at: new Date().toISOString(),
    })
    .eq('id', row.id)
    .eq('unsubscribe_token', token)
    .select('id')
    .maybeSingle()

  if (updated.error) {
    throw new Error(updated.error.message)
  }

  return updated.data ? 'unsubscribed' : 'already'
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
