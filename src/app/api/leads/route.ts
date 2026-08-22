import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'
import { sendLeadEmails } from '@/lib/sendLeadEmails'

const BUSINESS_TYPES = new Set(['salon', 'barbershop', 'restaurant', 'other'])

type LeadBody = {
  name?: unknown
  email?: unknown
  businessName?: unknown
  businessType?: unknown
  message?: unknown
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: LeadBody

  try {
    body = (await request.json()) as LeadBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = asTrimmedString(body.name)
  const email = asTrimmedString(body.email).toLowerCase()
  const businessName = asTrimmedString(body.businessName)
  const businessType = asTrimmedString(body.businessType).toLowerCase()
  const message = asTrimmedString(body.message)

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  }

  if (businessType && !BUSINESS_TYPES.has(businessType)) {
    return NextResponse.json({ error: 'Please choose a valid business type.' }, { status: 400 })
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Please add a short message (at least 10 characters).' },
      { status: 400 },
    )
  }

  try {
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
      return NextResponse.json(
        { error: 'Could not save your message. Please try again.' },
        { status: 500 },
      )
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
      return NextResponse.json(
        {
          error:
            'Your details were received, but confirmation email failed. Please email us directly or try again.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, id: data.id })
  } catch (error) {
    console.error('Lead submission failed:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 },
    )
  }
}
