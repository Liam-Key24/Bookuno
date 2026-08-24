'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useRef, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

const fieldClassName =
  'w-full border-0 border-b border-meridian-ink/15 bg-transparent px-0 py-2.5 text-sm text-meridian-ink outline-none transition-colors placeholder:text-meridian-ink/35 focus-visible:border-meridian-deep'

const labelClassName = 'mb-1 block text-sm font-medium tracking-tight text-meridian-ink'

const businessTypes = [
  { value: '', label: 'Business type (optional)' },
  { value: 'barber_hairdresser', label: 'Barber / hairdresser' },
  { value: 'beauty', label: 'Beauty professional' },
  { value: 'nails', label: 'Nail technician' },
  { value: 'therapist', label: 'Therapist' },
  { value: 'personal_trainer', label: 'Personal trainer' },
  { value: 'dog_groomer', label: 'Dog groomer' },
  { value: 'tattoo', label: 'Tattoo artist' },
  { value: 'cleaner', label: 'Cleaner' },
  { value: 'other', label: 'Other service business' },
] as const

function createIdempotencyKey() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0
    const value = char === 'x' ? random : (random & 0x3) | 0x8
    return value.toString(16)
  })
}

export function LeadForm() {
  const router = useRouter()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  // One key per form attempt — reused on manual retry; no automatic retry loops.
  const idempotencyKeyRef = useRef<string>(createIdempotencyKey())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [turnstileToken, setTurnstileToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [deliveryNotice, setDeliveryNotice] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setDeliveryNotice(null)

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
          idempotencyKey: idempotencyKeyRef.current,
          website,
        }),
      })

      const payload = (await response.json().catch(() => null)) as
        | {
            error?: string
            ok?: boolean
            received?: boolean
            confirmationDelivery?: 'sent' | 'failed'
            message?: string
          }
        | null

      // Enquiry saved but confirmation email failed — stay on form, no thank-you, no auto-retry.
      if (payload?.received && payload.confirmationDelivery === 'failed') {
        setDeliveryNotice(
          payload.message ||
            'We received your enquiry, but there was a problem sending the confirmation email. We still have your details and will follow up personally — no need to submit again.',
        )
        setPending(false)
        setTurnstileToken('')
        return
      }

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
    <form onSubmit={onSubmit} className="relative w-full text-left" noValidate>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
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
            className={`${fieldClassName} min-h-[6.5rem] resize-y`}
            placeholder="Tell us a little about your business and what you need."
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

      {deliveryNotice ? (
        <p
          role="status"
          className="mt-4 rounded-meridian bg-meridian-surface px-4 py-3 text-sm leading-relaxed text-meridian-ink"
        >
          {deliveryNotice}
        </p>
      ) : null}

      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-meridian bg-meridian-accent/15 px-4 py-3 text-sm text-meridian-ink"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
        {siteKey ? (
          <div className="lead-form-turnstile min-w-0 overflow-visible [&_iframe]:max-w-full">
            <Turnstile
              siteKey={siteKey}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken('')}
              onError={() => setTurnstileToken('')}
              options={{ theme: 'light', size: 'normal' }}
              className="lead-form-turnstile__widget"
            />
          </div>
        ) : (
          <p className="text-sm text-meridian-muted" role="status">
            Security check unavailable until Turnstile keys are configured.
          </p>
        )}

        <Button
          type="submit"
          variant="accent"
          disabled={pending || Boolean(deliveryNotice)}
          className="w-fit shrink-0 whitespace-nowrap disabled:opacity-60 min-[400px]:ml-auto"
        >
          {pending ? (
            'Sending…'
          ) : (
            <>
              Send
              <PaperPlaneTilt size={16} weight="bold" aria-hidden />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
