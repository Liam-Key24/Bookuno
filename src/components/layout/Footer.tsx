import Link from 'next/link'
import type { ReactNode } from 'react'
import { NewsletterSignupForm } from '@/components/forms/NewsletterSignupForm'
import { contactLinks, exploreLinks, legalLinks } from '@/components/layout/footerLinks'

export function Footer() {
  return (
    <footer className="w-full bg-meridian-accent px-2.5 py-2.5 md:px-3 md:py-3 lg:px-4">
      <div className="w-full rounded-meridian bg-meridian-surface px-4 py-6 md:px-6 md:py-7 lg:px-8 lg:py-8">
        <div className="grid gap-[1.75rem] lg:grid-cols-[minmax(0,1.35fr)_repeat(2,minmax(0,0.75fr))] lg:gap-[1.5rem]">
          <div className="max-w-[24rem]">
            <NewsletterSignupForm />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-[1.75rem] lg:contents">
            <FooterColumn title="Explore">
              {exploreLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              {contactLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  highlight={'highlight' in link && link.highlight}
                  className={'mobileHidden' in link && link.mobileHidden ? 'max-md:hidden' : undefined}
                >
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
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

        <div className="mt-[2.25rem] overflow-x-clip md:mt-[3rem]">
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
    <div className="min-w-0">
      <h2 className="text-sm font-semibold tracking-tight text-meridian-ink">{title}</h2>
      <ul className="mt-[0.75rem] space-y-[0.55rem]">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
  highlight = false,
  className: itemClassName,
}: {
  href: string
  children: ReactNode
  highlight?: boolean
  className?: string
}) {
  const className = highlight
    ? 'text-sm tracking-tight text-meridian-accent transition-colors hover:text-meridian-deep'
    : 'text-sm tracking-tight text-meridian-ink transition-colors hover:text-meridian-deep'

  if (href.startsWith('mailto:')) {
    return (
      <li className={itemClassName}>
        <a href={href} className={className}>
          {children}
        </a>
      </li>
    )
  }

  return (
    <li className={itemClassName}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  )
}
