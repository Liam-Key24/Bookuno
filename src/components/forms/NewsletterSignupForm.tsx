'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { FormAlert } from '@/components/ui/FormAlert'
import { FormField } from '@/components/ui/FormField'
import { focusRing } from '@/lib/uiClasses'

export function NewsletterSignupForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // honeypot
  const [turnstileToken, setTurnstileToken] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    if (!siteKey) {
      setError('Security check is not configured. Please try again later.')
      return
    }

    if (!consent) {
      setError('Please confirm you want to receive Merevo promotional emails.')
      return
    }

    if (!turnstileToken) {
      setError('Please complete the security check.')
      return
    }

    setPending(true)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          consent,
          turnstileToken,
          website,
          source: 'website_footer',
        }),
      })

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; ok?: boolean; message?: string }
        | null

      if (!response.ok || !payload?.ok) {
        setError(payload?.error || 'Something went wrong. Please try again.')
        setPending(false)
        setTurnstileToken('')
        return
      }

      setSuccess(
        payload.message ||
          'Thanks — if this email can be subscribed, we have sent a confirmation link. Please check your inbox.',
      )
      setEmail('')
      setConsent(false)
      setTurnstileToken('')
      setPending(false)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setPending(false)
      setTurnstileToken('')
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      <p className="text-sm font-semibold tracking-tight text-meridian-ink">
        Join our newsletter for occasional promotional updates.
      </p>

      <FormField id="newsletter-email" label="Email address" hideLabel className="mt-[0.85rem]">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          disabled={pending || Boolean(success)}
          className="w-full rounded-meridian border-0 bg-white px-[1.15rem] py-[0.85rem] text-sm text-meridian-ink outline-none ring-1 ring-meridian-surface-strong placeholder:text-meridian-muted focus-visible:ring-2 focus-visible:ring-meridian-mid/40 disabled:opacity-60"
        />
      </FormField>

      <label className="mt-[0.75rem] flex cursor-pointer items-start gap-[0.6rem] text-xs leading-relaxed text-meridian-muted">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          disabled={pending || Boolean(success)}
          className="mt-[0.15rem] size-4 shrink-0 rounded border-meridian-ink/30 text-meridian-deep focus-visible:ring-meridian-mid"
        />
        <span>
          I agree to receive promotional emails from Merevo. I understand I can unsubscribe at any
          time. See our{' '}
          <Link href="/privacy" className="underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
      >
        <label htmlFor="newsletter-website">Website</label>
        <input
          id="newsletter-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {siteKey ? (
        <div className="mt-[0.75rem]">
          <Turnstile
            siteKey={siteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken('')}
            onError={() => setTurnstileToken('')}
            options={{ theme: 'light', size: 'flexible' }}
          />
        </div>
      ) : (
        <p className="mt-[0.75rem] text-xs text-meridian-muted" role="status">
          Security check unavailable until Turnstile keys are configured.
        </p>
      )}

      {error ? (
        <FormAlert variant="error" className="mt-[0.65rem] bg-meridian-ink/5 px-[0.85rem] py-[0.65rem] text-xs">
          {error}
        </FormAlert>
      ) : null}

      {success ? (
        <FormAlert variant="success" className="mt-[0.65rem]">
          {success}
        </FormAlert>
      ) : null}

      <button
        type="submit"
        disabled={pending || Boolean(success)}
        className={`mt-[0.75rem] w-full rounded-meridian bg-meridian-ink px-[1.1rem] py-[0.7rem] text-sm font-medium text-white transition-colors hover:bg-meridian-deep disabled:opacity-60 sm:w-auto ${focusRing}`}
      >
        {pending ? 'Subscribing…' : success ? 'Check your inbox' : 'Subscribe'}
      </button>
    </form>
  )
}
