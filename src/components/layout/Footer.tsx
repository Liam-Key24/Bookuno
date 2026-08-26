import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { NewsletterSignupForm } from '@/components/forms/NewsletterSignupForm'
import { navLinks } from '@/components/layout/navLinks'
import { CONTACT_EMAIL } from '@/lib/site'

const offerLinks = [
  { label: 'Founding pricing', href: '/pricing' },
  { label: 'What’s included', href: '/features' },
  { label: 'Demo templates', href: '/templates' },
  { label: 'FAQ', href: '/features#faq' },
] as const

const startLinks = [
  { label: 'Get started with Merevo', href: '/#contact', highlight: true },
  { label: 'Contact details', href: '/contact', highlight: false },
  { label: 'About Merevo', href: '/about', highlight: false },
  { label: 'Email us', href: `mailto:${CONTACT_EMAIL}`, highlight: false },
] as const

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
] as const

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramLogo },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookLogo },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinLogo },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeLogo },
] as const

export function Footer() {
  return (
    <footer className="w-full bg-meridian-accent px-2.5 py-2.5 md:px-3 md:py-3 lg:px-4">
      <div className="w-full rounded-meridian bg-meridian-surface px-4 py-6 md:px-6 md:py-7 lg:px-8 lg:py-8">
        <div className="grid gap-[1.75rem] lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.7fr))] lg:gap-[1.5rem]">
          <div className="max-w-[24rem]">
            <NewsletterSignupForm />

            <ul className="mt-[1rem] flex items-center gap-[0.75rem]">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-meridian-ink/15 text-meridian-ink transition-colors hover:border-meridian-deep hover:text-meridian-deep"
                  >
                    <Icon size={16} weight="regular" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Sitemap">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Offer">
            {offerLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Start">
            {startLinks.map((link) => (
              <FooterLink key={link.href} href={link.href} highlight={link.highlight}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-[1.75rem] flex flex-col gap-[0.75rem] border-t border-meridian-surface-strong pt-[1rem] md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-meridian-muted">
            © {new Date().getFullYear()} Merevo. Your website, bookings, payments and customer
            marketing—managed for service businesses.
          </p>
          <ul className="flex flex-wrap gap-x-[1rem] gap-y-[0.5rem]">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-tight text-meridian-muted transition-colors hover:text-meridian-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[2.25rem] md:mt-[3rem]">
          <p className="font-display select-none text-[clamp(3.5rem,18vw,12rem)] leading-none font-bold tracking-tight text-meridian-accent lowercase">
            merevo
            <sup className="ml-[0.15em] align-super text-[0.18em] font-medium">®</sup>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-tight text-meridian-ink">{title}</h2>
      <ul className="mt-[0.75rem] space-y-[0.55rem]">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
  highlight = false,
}: {
  href: string
  children: ReactNode
  highlight?: boolean
}) {
  const className = highlight
    ? 'text-sm tracking-tight text-meridian-accent transition-colors hover:text-meridian-deep'
    : 'text-sm tracking-tight text-meridian-ink transition-colors hover:text-meridian-deep'

  if (href.startsWith('mailto:')) {
    return (
      <li>
        <a href={href} className={className}>
          {children}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  )
}
