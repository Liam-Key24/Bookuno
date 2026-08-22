'use client'

import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/components/layout/navLinks'

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
        className="flex w-full items-center justify-between gap-4 px-[1.5rem] py-[1.25rem] md:px-[2.5rem] lg:px-[3rem]"
      >
        <Link
          href="/"
          className="shrink-0 text-[1.05rem] font-semibold tracking-tight text-meridian-ink"
          onClick={() => setOpen(false)}
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

        <div className="flex items-center gap-2">
          <Button href="#contact" size="sm" className="hidden shrink-0 sm:inline-flex">
            Get in touch
            <ArrowUpRight size={16} weight="bold" className="text-meridian-accent" />
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[20px] bg-meridian-surface text-meridian-ink transition-colors hover:bg-meridian-surface-strong md:hidden"
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
        className="absolute inset-x-0 top-full px-[1.5rem] pb-[1.25rem] md:hidden"
      >
        <div className="overflow-hidden rounded-[20px] border border-meridian-surface-strong bg-white shadow-[0_18px_40px_rgb(15_23_32_/_0.08)]">
          <ul className="flex flex-col p-[0.75rem]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-[16px] px-[1rem] py-[0.85rem] text-sm font-medium tracking-tight text-meridian-ink transition-colors hover:bg-meridian-surface hover:text-meridian-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-meridian-surface-strong p-[0.75rem] sm:hidden">
            <Button href="#contact" size="sm" className="w-full" onClick={() => setOpen(false)}>
              Get in touch
              <ArrowUpRight size={16} weight="bold" className="text-meridian-accent" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
