const DEV_TEST_SENDERS = new Set([
  'onboarding@resend.dev',
  'delivered@resend.dev',
])

function parseFromAddress(fromEmail: string) {
  const match = fromEmail.match(/<([^>]+)>/)
  return (match?.[1] || fromEmail).trim().toLowerCase()
}

/** Production must use a verified Meridian domain sender (not @resend.dev). */
export function assertProductionSender(fromEmail: string) {
  const address = parseFromAddress(fromEmail)

  if (process.env.NODE_ENV === 'production') {
    if (DEV_TEST_SENDERS.has(address) || address.endsWith('@resend.dev')) {
      throw new Error(
        'Production requires a verified Meridian domain sender in RESEND_FROM_EMAIL (not @resend.dev).',
      )
    }
  }
}
