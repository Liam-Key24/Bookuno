import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Templates', href: '#templates' },
] as const

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-8"
      >
        <Link
          href="/"
          className="shrink-0 text-[1.05rem] font-semibold tracking-tight text-meridian-ink"
        >
          Meridian
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-tight text-meridian-ink/80 transition-colors hover:text-meridian-deep"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href="#contact" size="sm" className="shrink-0">
          Get in touch
          <ArrowUpRight size={16} weight="bold" className="text-meridian-accent" />
        </Button>
      </nav>
    </header>
  )
}
