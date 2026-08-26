'use client'

import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/components/layout/navLinks'
import { trackEvent } from '@/lib/analytics'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="relative z-50 w-full bg-white">
      <nav
        aria-label="Primary"
        className="relative flex w-full items-center justify-between gap-3 px-2.5 py-3 md:px-3 lg:px-4"
      >
        <Link
          href="/"
          className="relative z-10 shrink-0 font-display text-[1.35rem] font-bold tracking-tight text-meridian-ink md:text-[1.5rem]"
          onClick={() => setOpen(false)}
          aria-label="Merevo home"
        >
          Merevo
        </Link>

        <ul className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
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

        <div className="relative z-10 flex items-center gap-2">
          <Button
            href="/#contact"
            size="sm"
            className="hidden shrink-0 sm:inline-flex"
            onClick={() =>
              trackEvent('cta_click', { location: 'navbar', label: 'Get started with Merevo' })
            }
          >
            Get started with Merevo
            <ArrowUpRight size={16} weight="bold" className="text-meridian-accent" />
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-meridian bg-meridian-surface text-meridian-ink transition-colors hover:bg-meridian-surface-strong md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full px-2.5 pb-3 md:hidden"
      >
        <div className="overflow-hidden rounded-meridian border border-meridian-surface-strong bg-white shadow-[0_18px_40px_rgb(15_23_32_/_0.08)]">
          <ul className="flex flex-col p-[0.75rem]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-meridian px-[1rem] py-[0.85rem] text-sm font-medium tracking-tight text-meridian-ink transition-colors hover:bg-meridian-surface hover:text-meridian-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-meridian-surface-strong p-[0.75rem] sm:hidden">
            <Button
              href="/#contact"
              size="sm"
              className="w-full"
              onClick={() => {
                trackEvent('cta_click', {
                  location: 'navbar_mobile',
                  label: 'Get started with Merevo',
                })
                setOpen(false)
              }}
            >
              Get started with Merevo
              <ArrowUpRight size={16} weight="bold" className="text-meridian-accent" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
