'use client'

import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/components/layout/navLinks'
import { trackEvent } from '@/lib/analytics'
import { cn, focusRing } from '@/lib/uiClasses'

const NAV_IDLE_MS = 1200
const SCROLL_TOP_THRESHOLD = 12
const MOBILE_MQ = '(max-width: 767px)'

function subscribeMobileMq(onStoreChange: () => void) {
  const media = window.matchMedia(MOBILE_MQ)
  media.addEventListener('change', onStoreChange)
  return () => media.removeEventListener('change', onStoreChange)
}

function getMobileMqSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches
}

function getMobileMqServerSnapshot() {
  return false
}

function useMobileNavChrome(open: boolean) {
  const isMobile = useSyncExternalStore(
    subscribeMobileMq,
    getMobileMqSnapshot,
    getMobileMqServerSnapshot,
  )
  const [showBar, setShowBar] = useState(true)
  const [detached, setDetached] = useState(false)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!isMobile) return

    const clearIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }

    const scheduleHide = () => {
      clearIdle()
      if (open || window.scrollY < SCROLL_TOP_THRESHOLD) return
      idleTimer.current = setTimeout(() => setShowBar(false), NAV_IDLE_MS)
    }

    const onScroll = () => {
      const atTop = window.scrollY < SCROLL_TOP_THRESHOLD
      setDetached(!atTop)
      setShowBar(true)
      scheduleHide()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearIdle()
      window.removeEventListener('scroll', onScroll)
    }
  }, [isMobile, open])

  const visible = !isMobile || open || showBar

  return { isMobile, visible, detached: isMobile && (detached || open) }
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const { isMobile, visible, detached } = useMobileNavChrome(open)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const closeOnScroll = () => setOpen(false)
    window.addEventListener('scroll', closeOnScroll, { passive: true })
    return () => window.removeEventListener('scroll', closeOnScroll)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const menuTop = detached
    ? 'top-[calc(var(--nav-height)+0.85rem)]'
    : 'top-[var(--nav-height)]'

  return (
    <>
      <header
        className={cn(
          'left-0 right-0 z-50 transition-[transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          isMobile ? 'fixed top-0 px-2.5 pt-2' : 'relative w-full bg-white',
          isMobile && !visible && !open && '-translate-y-[120%] scale-[0.97]',
          isMobile && visible && 'translate-y-0 scale-100',
        )}
      >
        <div
          className={cn(
            'transition-[background-color,box-shadow,border-radius] duration-300 ease-out',
            isMobile && detached
              ? 'overflow-hidden rounded-meridian border border-meridian-surface-strong/80 bg-white/90 shadow-[0_10px_28px_rgb(15_23_32_/_0.1)] backdrop-blur-md'
              : isMobile
                ? 'bg-transparent'
                : '',
          )}
        >
          <nav
            aria-label="Primary"
            className="relative flex h-[var(--nav-height)] w-full items-center justify-between gap-3 px-2 md:px-3 lg:px-4"
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
              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-meridian text-meridian-ink transition-colors md:hidden',
                  open || detached
                    ? 'bg-meridian-surface hover:bg-meridian-surface-strong'
                    : 'bg-meridian-surface/90 hover:bg-meridian-surface',
                  focusRing,
                )}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu — full width, below header */}
      <div
        className={cn(
          'fixed inset-x-0 z-40 md:hidden',
          menuTop,
          'transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0',
        )}
        aria-hidden={!open}
      >
        <div
          id={menuId}
          className="w-full border-b border-meridian-surface-strong bg-white/95 shadow-[0_20px_40px_rgb(15_23_32_/_0.1)] backdrop-blur-md"
        >
          <ul className="flex flex-col px-2 py-2">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={cn(
                  'transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                )}
                style={open ? { transitionDelay: `${index * 35}ms` } : undefined}
              >
                <Link
                  href={link.href}
                  className="block rounded-meridian px-4 py-3.5 text-base font-medium tracking-tight text-meridian-ink transition-colors hover:bg-meridian-surface hover:text-meridian-deep"
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-meridian-surface-strong px-2 py-3">
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

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={cn(
          'fixed inset-x-0 bottom-0 z-30 bg-meridian-ink/15 transition-opacity duration-300 md:hidden',
          menuTop,
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
      />
    </>
  )
}
