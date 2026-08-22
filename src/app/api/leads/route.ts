import { NextResponse } from 'next/server'
import { getClientIp, hashIp } from '@/lib/clientIp'
import { assertLeadRateLimit } from '@/lib/leadRateLimit'
import { sendLeadEmails } from '@/lib/sendLeadEmails'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'
import { verifyTurnstileToken } from '@/lib/verifyTurnstile'

const BUSINESS_TYPES = new Set(['salon', 'barbershop', 'restaurant', 'other'])
const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_BUSINESS_NAME = 160
const MAX_MESSAGE = 4000

type LeadBody = {
  name?: unknown
  email?: unknown
  businessName?: unknown
  businessType?: unknown
  message?: unknown
  turnstileToken?: unknown
  website?: unknown // honeypot
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function safeError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: Request) {
  let body: LeadBody

  try {
    body = (await request.json()) as LeadBody
  } catch {
    return safeError('Invalid request body.', 400)
  }

  // Honeypot — bots fill hidden fields; humans leave empty
  if (asTrimmedString(body.website).length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = asTrimmedString(body.name)
  const email = asTrimmedString(body.email).toLowerCase()
  const businessName = asTrimmedString(body.businessName)
  const businessType = asTrimmedString(body.businessType).toLowerCase()
  const message = asTrimmedString(body.message)
  const turnstileToken = asTrimmedString(body.turnstileToken)

  if (name.length < 2 || name.length > MAX_NAME) {
    return safeError('Please enter your name.', 400)
  }

  if (!isValidEmail(email) || email.length > MAX_EMAIL) {
    return safeError('Please enter a valid email.', 400)
  }

  if (businessName.length > MAX_BUSINESS_NAME) {
    return safeError('Business name is too long.', 400)
  }

  if (businessType && !BUSINESS_TYPES.has(businessType)) {
    return safeError('Please choose a valid business type.', 400)
  }

  if (message.length < 10 || message.length > MAX_MESSAGE) {
    return safeError('Please add a short message (10–4000 characters).', 400)
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
      const limit = await assertLeadRateLimit(ipHash)
      if (!limit.success) {
        return safeError('Too many messages. Please wait a few minutes and try again.', 429)
      }
    } catch (rateError) {
      console.error('Lead rate limit failed:', rateError)
      return safeError('Something went wrong. Please try again in a moment.', 500)
    }

    let turnstileOk = false
    try {
      turnstileOk = await verifyTurnstileToken(turnstileToken, ip)
    } catch (turnstileError) {
      console.error('Turnstile verification failed:', turnstileError)
      return safeError('Something went wrong. Please try again in a moment.', 500)
    }

    if (!turnstileOk) {
      return safeError('Security check failed. Please try again.', 400)
    }

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('leads')
      .insert({
        name,
        email,
        business_name: businessName || null,
        business_type: businessType || null,
        message,
        source: 'website',
      })
      .select('id')
      .single()

    if (error || !data) {
      console.error('Supabase lead insert failed:', error)
      return safeError('Could not save your message. Please try again.', 500)
    }

    try {
      await sendLeadEmails({
        name,
        email,
        businessName,
        businessType,
        message,
      })
    } catch (emailError) {
      console.error('Lead email failed after insert:', emailError)
      return safeError(
        'Your details were received, but email confirmation failed. Please email us directly or try again.',
        502,
      )
    }

    return NextResponse.json({ ok: true, id: data.id })
  } catch (error) {
    console.error('Lead submission failed:', error)
    return safeError('Something went wrong. Please try again in a moment.', 500)
  }
}
