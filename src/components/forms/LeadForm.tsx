'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

const fieldClassName =
  'w-full rounded-[20px] border-0 bg-white px-[1rem] py-[0.85rem] text-sm text-meridian-ink outline-none ring-1 ring-white/20 placeholder:text-meridian-ink/40 focus-visible:ring-2 focus-visible:ring-meridian-accent/70'

const labelClassName = 'mb-[0.4rem] block text-sm font-medium tracking-tight text-white/85'

const businessTypes = [
  { value: '', label: 'Business type (optional)' },
  { value: 'salon', label: 'Salon' },
  { value: 'barbershop', label: 'Barbershop' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'other', label: 'Other' },
] as const

export function LeadForm() {
  const router = useRouter()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [turnstileToken, setTurnstileToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!siteKey) {
      setError('Security check is not configured. Please try again later.')
      return
    }

    if (!turnstileToken) {
      setError('Please complete the security check.')
      return
    }

    setPending(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          businessName,
          businessType,
          message,
          turnstileToken,
          website,
        }),
      })

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; ok?: boolean }
        | null

      if (!response.ok || !payload?.ok) {
        setError(payload?.error || 'Something went wrong. Please try again.')
        setPending(false)
        setTurnstileToken('')
        return
      }

      trackEvent('lead_submit_success', { source: 'contact_form' })
      router.push('/thank-you')
    } catch {
      setError('Network error. Please check your connection and try again.')
      setPending(false)
      setTurnstileToken('')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto w-full max-w-[36rem] text-left"
      noValidate
    >
      <div className="grid gap-[1rem] sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="lead-name" className={labelClassName}>
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClassName}
            placeholder="Your name"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="lead-email" className={labelClassName}>
            Email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClassName}
            placeholder="you@studio.com"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="lead-business" className={labelClassName}>
            Business name
          </label>
          <input
            id="lead-business"
            name="businessName"
            autoComplete="organization"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            className={fieldClassName}
            placeholder="Optional"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="lead-type" className={labelClassName}>
            Type
          </label>
          <select
            id="lead-type"
            name="businessType"
            value={businessType}
            onChange={(event) => setBusinessType(event.target.value)}
            className={fieldClassName}
          >
            {businessTypes.map((option) => (
              <option key={option.value || 'none'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="lead-message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldClassName} min-h-[7rem] resize-y`}
            placeholder="Tell us about your salon, barbershop, or restaurant."
          />
        </div>

        {/* Honeypot — hidden from humans */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        >
          <label htmlFor="lead-website">Website</label>
          <input
            id="lead-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>
      </div>

      {siteKey ? (
        <div className="mt-[1.25rem]">
          <Turnstile
            siteKey={siteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken('')}
            onError={() => setTurnstileToken('')}
            options={{ theme: 'light' }}
          />
        </div>
      ) : (
        <p className="mt-[1.25rem] text-sm text-white/70" role="status">
          Security check unavailable until Turnstile keys are configured.
        </p>
      )}

      {error ? (
        <p
          role="alert"
          className="mt-[1rem] rounded-[20px] bg-white/10 px-[1rem] py-[0.75rem] text-sm text-white"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-[1.25rem] flex flex-col gap-[0.75rem] sm:flex-row sm:items-center">
        <Button type="submit" variant="accent" disabled={pending} className="disabled:opacity-60">
          {pending ? 'Sending…' : 'Send message'}
        </Button>
        <p className="text-xs text-white/55">
          We only show success after your message is saved and confirmation is sent.
        </p>
      </div>
    </form>
  )
}
