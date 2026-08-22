import { Resend } from 'resend'

export type LeadEmailPayload = {
  name: string
  email: string
  businessName: string
  businessType: string
  message: string
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }
  return new Resend(apiKey)
}

export async function sendLeadEmails(lead: LeadEmailPayload) {
  const founderEmail = process.env.FOUNDER_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL

  if (!founderEmail || !fromEmail) {
    throw new Error('Missing FOUNDER_EMAIL or RESEND_FROM_EMAIL')
  }

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
      `Business: ${lead.businessName || '—'}`,
      `Type: ${lead.businessType || '—'}`,
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
}
