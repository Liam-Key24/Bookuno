export const ANALYTICS_CONSENT_KEY = 'meridian_analytics_consent'

export type AnalyticsEvent =
  | 'cta_click'
  | 'lead_submit_success'
  | 'external_booking_click'

export type AnalyticsProps = Record<string, string | number | boolean | undefined>

export function getAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted'
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, granted ? 'granted' : 'denied')
  window.dispatchEvent(new Event('meridian-analytics-consent'))
}

export function trackEvent(event: AnalyticsEvent, props: AnalyticsProps = {}) {
  if (typeof window === 'undefined') return
  if (!getAnalyticsConsent()) return

  const detail = { event, props }

  // Optional Plausible (privacy-friendly, only if configured)
  const plausible = (
    window as Window & {
      plausible?: (eventName: string, options?: { props?: AnalyticsProps }) => void
    }
  ).plausible
  if (typeof plausible === 'function') {
    plausible(event, { props })
  }

  // First-party beacon — no cookies of our own beyond consent preference
  void fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(detail),
    keepalive: true,
  }).catch(() => {
    // Ignore analytics network errors — never block UX
  })
}
