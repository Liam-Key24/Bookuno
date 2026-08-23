import { NextResponse } from 'next/server'
import { confirmNewsletterSubscriber } from '@/lib/newsletter'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

function redirectTo(path: string, request: Request) {
  const origin = new URL(request.url).origin
  return NextResponse.redirect(new URL(path, origin), 303)
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')?.trim() || ''

  try {
    const supabase = getSupabaseAdmin()
    const result = await confirmNewsletterSubscriber(supabase, token)

    if (result === 'confirmed') {
      return redirectTo('/newsletter/confirmed?status=confirmed', request)
    }

    if (result === 'already') {
      return redirectTo('/newsletter/confirmed?status=already', request)
    }

    return redirectTo('/newsletter/confirmed?status=invalid', request)
  } catch (error) {
    console.error('Newsletter confirm failed:', error)
    return redirectTo('/newsletter/confirmed?status=error', request)
  }
}
