export async function verifyTurnstileToken(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    throw new Error('Missing TURNSTILE_SECRET_KEY')
  }

  if (!token) {
    return false
  }

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip === 'unknown' ? '' : ip,
  })

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) {
    throw new Error('Turnstile verification request failed')
  }

  const payload = (await response.json()) as { success?: boolean }
  return payload.success === true
}
