'use client'

import { useEffect, useState } from 'react'

const roles = [
  'barber',
  'therapist',
  'nail tech',
  'trainer',
  'groomer',
  'tattoo artist',
  'beauty pro',
  'cleaner',
] as const

const INTERVAL_MS = 2200

export function HeroRoleLine() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const role = roles[index] ?? roles[0]

  return (
    <h1 className="font-display text-[2.85rem] font-bold leading-[1.05] tracking-tight text-white sm:text-[3.6rem] lg:text-[4.5rem]">
      <span className="sr-only">
        You’re a service business owner with a business to book.
      </span>
      <span aria-hidden className="block">
        You’re a{' '}
        <span className="relative inline-block min-w-[7.5ch] text-meridian-accent sm:min-w-[8.5ch]">
          <span
            key={role}
            className={
              reduceMotion
                ? undefined
                : 'inline-block animate-[hero-role-in_420ms_var(--reveal-ease)_both]'
            }
          >
            {role}
          </span>
        </span>
      </span>
      <span aria-hidden className="mt-1 block sm:mt-2">
        with a business to book.
      </span>
    </h1>
  )
}
