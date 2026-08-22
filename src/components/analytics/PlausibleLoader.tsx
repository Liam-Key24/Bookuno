'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getAnalyticsConsent } from '@/lib/analytics'

export function PlausibleLoader() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    function sync() {
      setEnabled(Boolean(domain) && getAnalyticsConsent())
    }
    sync()
    window.addEventListener('meridian-analytics-consent', sync)
    return () => window.removeEventListener('meridian-analytics-consent', sync)
  }, [domain])

  if (!domain || !enabled) return null

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.tagged-events.js"
      strategy="afterInteractive"
    />
  )
}
