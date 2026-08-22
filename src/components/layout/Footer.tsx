import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { navLinks } from '@/components/layout/navLinks'

const offerLinks = [
  { label: 'Founding offer', href: '/pricing' },
  { label: 'What we manage', href: '/features' },
  { label: 'Demo templates', href: '/templates' },
] as const

const startLinks = [
  { label: 'Get in touch', href: '/#contact', highlight: true },
  { label: 'Contact details', href: '/contact', highlight: false },
  { label: 'About Meridian', href: '/about', highlight: false },
  { label: 'Email us', href: 'mailto:hello@meridian.studio', highlight: false },
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
    <footer className="w-full bg-meridian-accent px-[1.5rem] py-[1.5rem] md:px-[2.5rem] md:py-[2rem] lg:px-[3rem]">
      <div className="w-full rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.5rem] md:px-[2.5rem] md:py-[3rem] lg:px-[3rem] lg:py-[3.5rem]">
        <div className="grid gap-[2.5rem] lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.7fr))] lg:gap-[2rem]">
          <div className="max-w-[24rem]">
            <p className="text-sm font-semibold tracking-tight text-meridian-ink">
              Join our newsletter to stay up to date on the latest news and updates.
            </p>

            <form
              action="mailto:hello@meridian.studio"
              method="get"
              className="relative mt-[1.25rem]"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="body"
                type="email"
                required
                placeholder="Enter your email."
                className="w-full rounded-full border-0 bg-white py-[0.85rem] pl-[1.15rem] pr-[7.5rem] text-sm text-meridian-ink outline-none ring-1 ring-meridian-surface-strong placeholder:text-meridian-muted focus-visible:ring-2 focus-visible:ring-meridian-mid/40"
              />
              <input type="hidden" name="subject" value="Meridian newsletter" />
              <button
                type="submit"
                className="absolute top-1/2 right-[0.35rem] -translate-y-1/2 rounded-full bg-meridian-ink px-[1.1rem] py-[0.55rem] text-sm font-medium text-white transition-colors hover:bg-meridian-deep"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-[0.75rem] text-xs leading-relaxed text-meridian-muted">
              By subscribing, you agree to hear from Meridian and our{' '}
              <Link href="/privacy" className="underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              . No spam — just useful updates.
            </p>

            <ul className="mt-[1.5rem] flex items-center gap-[0.75rem]">
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

        <div className="mt-[2.5rem] flex flex-col gap-[1rem] border-t border-meridian-surface-strong pt-[1.5rem] md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-meridian-muted">
            © {new Date().getFullYear()} Meridian. Managed websites for independent salons,
            barbers & restaurants.
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

        <div className="mt-[3.5rem] md:mt-[4.5rem]">
          <p className="select-none text-[clamp(3.5rem,18vw,12rem)] leading-none font-semibold tracking-tight text-meridian-accent lowercase">
            meridian
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
      <ul className="mt-[1rem] space-y-[0.75rem]">{children}</ul>
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
