import { createHash } from 'node:crypto'

export function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get('x-real-ip')?.trim()
  if (realIp) return realIp

  return 'unknown'
}

/** One-way hash for rate-limit keys — never store raw IPs. */
export function hashIp(ip: string) {
  const salt = process.env.LEAD_IP_HASH_SALT
  if (!salt) {
    throw new Error('Missing LEAD_IP_HASH_SALT')
  }

  return createHash('sha256').update(`${salt}:${ip}`).digest('hex')
}
