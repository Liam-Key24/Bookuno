import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}

/** Shared metadata for public marketing pages. */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  }
}

export const defaultSiteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Your website, bookings, payments and customer marketing`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Merevo is a managed website, booking, payments and customer-growth platform for service businesses. Set up and looked after for you — £50 a month.',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
}
