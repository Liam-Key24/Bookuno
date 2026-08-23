import { NextResponse } from 'next/server'
import { unsubscribeNewsletterSubscriber } from '@/lib/newsletter'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

function redirectTo(path: string, request: Request) {
  const origin = new URL(request.url).origin
  return NextResponse.redirect(new URL(path, origin), 303)
}

async function handleUnsubscribe(request: Request) {
  const url = new URL(request.url)
  let token = url.searchParams.get('token')?.trim() || ''

  if (!token && request.method === 'POST') {
    const contentType = request.headers.get('content-type') || ''
    try {
      if (contentType.includes('application/json')) {
        const body = (await request.json()) as { token?: unknown }
        token = typeof body.token === 'string' ? body.token.trim() : ''
      } else {
        const form = await request.formData()
        const value = form.get('token')
        token = typeof value === 'string' ? value.trim() : ''
      }
    } catch {
      token = ''
    }
  }

  // List-Unsubscribe=One-Click may POST with empty body; token must be in the URL.
  if (!token) {
    token = url.searchParams.get('token')?.trim() || ''
  }

  try {
    const supabase = getSupabaseAdmin()
    const result = await unsubscribeNewsletterSubscriber(supabase, token)

    if (result === 'unsubscribed') {
      return redirectTo('/newsletter/unsubscribed?status=unsubscribed', request)
    }

    if (result === 'already') {
      return redirectTo('/newsletter/unsubscribed?status=already', request)
    }

    return redirectTo('/newsletter/unsubscribed?status=invalid', request)
  } catch (error) {
    console.error('Newsletter unsubscribe failed:', error)
    return redirectTo('/newsletter/unsubscribed?status=error', request)
  }
}

export async function GET(request: Request) {
  return handleUnsubscribe(request)
}

export async function POST(request: Request) {
  return handleUnsubscribe(request)
}
