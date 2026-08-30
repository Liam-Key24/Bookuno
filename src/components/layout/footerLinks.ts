import { navLinks } from '@/components/layout/navLinks'
import { CONTACT_EMAIL } from '@/lib/site'

/** Primary pages — mirrors main nav. */
export const exploreLinks = navLinks

/** Contact and conversion paths. */
export const contactLinks = [
  { label: 'Get started with Merevo', href: '/#contact', highlight: true, mobileHidden: true },
  { label: 'Contact', href: '/contact' },
  { label: 'Email us', href: `mailto:${CONTACT_EMAIL}` },
] as const

/** Legal pages — shown in the footer bar. */
export const legalLinks = [
  { label: 'Privacy Notice', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
] as const
