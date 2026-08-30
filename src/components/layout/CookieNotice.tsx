'use client'

/**
 * Cookie / analytics consent banner.
 *
 * What it does:
 * - Stores one local preference: `meridian_analytics_consent` = `granted` | `denied`
 * - "Essential only" → denied — no Plausible, no /api/analytics beacons
 * - "Accept analytics" → granted — optional Plausible + first-party event beacons fire
 * - This is NOT a third-party ad cookie; it is a consent gate for privacy-conscious analytics
 *
 * What it does NOT do:
 * - No tracking before a choice is made
 * - No cross-site cookies of our own (only the preference above in localStorage)
 */
import Link from 'next/link'
import { useEffect, useId, useRef } from 'react'
import { useSyncExternalStore } from 'react'
import { ANALYTICS_CONSENT_KEY, setAnalyticsConsent } from '@/lib/analytics'
import { cn, focusRing } from '@/lib/uiClasses'

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
  const descriptionId = useId()
  const rejectRef = useRef<HTMLButtonElement>(null)
  const stored = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerConsentSnapshot,
  )

  const visible = stored !== 'pending' && stored === null

  useEffect(() => {
    if (!visible) return
    rejectRef.current?.focus()
  }, [visible])

  if (!visible) return null

  function accept() {
    setAnalyticsConsent(true)
  }

  function reject() {
    setAnalyticsConsent(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby={descriptionId}
      className="fixed inset-x-0 bottom-0 z-[60] px-2.5 pb-2.5 sm:px-3 md:px-4"
    >
      <div
        className={cn(
          'cookie-banner-panel mx-auto flex w-full max-w-[96rem] flex-col gap-3 rounded-meridian border border-meridian-surface-strong bg-white p-4 shadow-[0_18px_40px_rgb(15_23_32_/_0.12)] sm:gap-4 sm:p-5',
          'md:flex-row md:items-center md:justify-between',
        )}
      >
        <div className="min-w-0">
          <p
            id="cookie-banner-title"
            className="text-sm font-semibold tracking-tight text-meridian-ink"
          >
            Cookie preferences
          </p>
          <p
            id={descriptionId}
            className="mt-1.5 max-w-[42rem] text-sm leading-relaxed text-meridian-muted"
          >
            We save your choice locally. Optional analytics (CTA clicks and successful form sends)
            only run if you accept. See our{' '}
            <Link
              href="/privacy"
              className="font-medium text-meridian-deep underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            ref={rejectRef}
            type="button"
            onClick={reject}
            className={cn(
              'w-full rounded-meridian bg-meridian-surface px-4 py-2.5 text-sm font-medium text-meridian-ink transition-colors hover:bg-meridian-surface-strong sm:w-auto',
              focusRing,
            )}
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={accept}
            className={cn(
              'w-full rounded-meridian bg-meridian-accent px-4 py-2.5 text-sm font-medium text-meridian-ink transition-colors hover:brightness-105 sm:w-auto',
              focusRing,
            )}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
