import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let ratelimit: Ratelimit | null = null

function getRatelimit() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    throw new Error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN')
  }

  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(5, '10 m'),
      prefix: 'meridian:newsletter',
      analytics: false,
    })
  }

  return ratelimit
}

export async function assertNewsletterRateLimit(ipHash: string) {
  const result = await getRatelimit().limit(ipHash)
  return {
    success: result.success,
    remaining: result.remaining,
    reset: result.reset,
  }
}
