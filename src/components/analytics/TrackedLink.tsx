'use client'

import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics'

type TrackedLinkProps = {
  href: string
  children: ReactNode
  event: AnalyticsEvent
  eventProps?: Record<string, string>
  className?: string
  external?: boolean
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children' | 'className'>

export function TrackedLink({
  href,
  children,
  event,
  eventProps,
  className = '',
  external = false,
  ...props
}: TrackedLinkProps) {
  function onClick() {
    trackEvent(event, { href, ...eventProps })
  }

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  )
}
