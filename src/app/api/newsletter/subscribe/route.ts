import { NextResponse } from 'next/server'
import { getClientIp, hashIp } from '@/lib/clientIp'
import {
  sendNewsletterConfirmationEmail,
  upsertNewsletterPending,
  validateNewsletterSignupInput,
} from '@/lib/newsletter'
import { assertNewsletterRateLimit } from '@/lib/newsletterRateLimit'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'
import { verifyTurnstileToken } from '@/lib/verifyTurnstile'

type Body = {
  email?: unknown
  firstName?: unknown
  consent?: unknown
  turnstileToken?: unknown
  website?: unknown // honeypot
  source?: unknown
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function safeError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

/** Always the same success shape — never reveal list membership. */
function genericSuccess() {
  return NextResponse.json({
    ok: true,
    message:
      'Thanks — if this email can be subscribed, we have sent a confirmation link. Please check your inbox.',
  })
}

export async function POST(request: Request) {
  let body: Body

  try {
    body = (await request.json()) as Body
  } catch {
    return safeError('Invalid request body.', 400)
  }

  // Honeypot — bots fill hidden fields; humans leave empty
  if (asTrimmedString(body.website).length > 0) {
    return genericSuccess()
  }

  const emailRaw = asTrimmedString(body.email)
  const firstName = asTrimmedString(body.firstName)
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on'
  const turnstileToken = asTrimmedString(body.turnstileToken)
  const source = asTrimmedString(body.source) || 'website_footer'

  const validated = validateNewsletterSignupInput({
    email: emailRaw,
    firstName,
    consent,
  })

  if (!validated.ok) {
    return safeError(validated.error, 400)
  }

  if (!turnstileToken) {
    return safeError('Please complete the security check.', 400)
  }

  const ip = getClientIp(request)

  try {
    let ipHash: string
    try {
      ipHash = hashIp(ip)
    } catch {
      console.error('LEAD_IP_HASH_SALT is not configured')
      return safeError('Something went wrong. Please try again in a moment.', 500)
    }

    try {
      const limit = await assertNewsletterRateLimit(ipHash)
      if (!limit.success) {
        return safeError('Too many attempts. Please wait a few minutes and try again.', 429)
      }
    } catch (rateError) {
      console.error('Newsletter rate limit failed:', rateError)
      return safeError('Something went wrong. Please try again in a moment.', 500)
    }

    let turnstileOk = false
    try {
      turnstileOk = await verifyTurnstileToken(turnstileToken, ip)
    } catch (turnstileError) {
      console.error('Newsletter Turnstile verification failed:', turnstileError)
      return safeError('Something went wrong. Please try again in a moment.', 500)
    }

    if (!turnstileOk) {
      return safeError('Security check failed. Please try again.', 400)
    }

    const supabase = getSupabaseAdmin()
    const { subscriber, shouldSendConfirmation } = await upsertNewsletterPending(supabase, {
      email: validated.email,
      firstName: validated.firstName,
      source,
    })

    if (shouldSendConfirmation) {
      try {
        await sendNewsletterConfirmationEmail(subscriber)
      } catch (emailError) {
        console.error('Newsletter confirmation email failed:', emailError)
        // Still return generic success to avoid enumeration / leaking provider errors
        return genericSuccess()
      }
    }

    return genericSuccess()
  } catch (error) {
    console.error('Newsletter subscribe failed:', error)
    return safeError('Something went wrong. Please try again in a moment.', 500)
  }
}
