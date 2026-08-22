'use client'

import Link from 'next/link'
import { useSyncExternalStore } from 'react'
import { ANALYTICS_CONSENT_KEY, setAnalyticsConsent } from '@/lib/analytics'

function subscribe(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange)
  window.addEventListener('meridian-analytics-consent', onStoreChange)
  return () => {
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener('meridian-analytics-consent', onStoreChange)
  }
}

function getConsentSnapshot() {
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
}

function getServerConsentSnapshot() {
  return 'pending'
}

export function CookieNotice() {
  const stored = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerConsentSnapshot,
  )

  if (stored === 'pending' || stored !== null) return null

  function accept() {
    setAnalyticsConsent(true)
  }

  function reject() {
    setAnalyticsConsent(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] px-[1.5rem] pb-[1.5rem] md:px-[2.5rem] lg:px-[3rem]"
    >
      <div className="mx-auto flex w-full max-w-[70rem] flex-col gap-[1rem] rounded-[20px] border border-meridian-surface-strong bg-white p-[1.25rem] shadow-[0_18px_40px_rgb(15_23_32_/_0.12)] md:flex-row md:items-center md:justify-between md:p-[1.5rem]">
        <p className="max-w-[42rem] text-sm leading-relaxed text-meridian-muted">
          We use a necessary preference cookie for this choice, plus optional privacy-conscious
          analytics (CTA clicks, successful form sends, and external booking-link clicks) if you
          allow it. See our{' '}
          <Link
            href="/privacy"
            className="font-medium text-meridian-deep underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-[0.65rem]">
          <button
            type="button"
            onClick={reject}
            className="rounded-[20px] bg-meridian-surface px-[1rem] py-[0.55rem] text-sm font-medium text-meridian-ink transition-colors hover:bg-meridian-surface-strong"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-[20px] bg-meridian-accent px-[1rem] py-[0.55rem] text-sm font-medium text-meridian-ink transition-colors hover:brightness-105"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
