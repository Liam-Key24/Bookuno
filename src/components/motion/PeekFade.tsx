'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type PeekFadeProps = {
  children: ReactNode
  className?: string
}

/**
 * Keeps the section softly faded while it only peeks under the hero,
 * then solidifies as you scroll it into view.
 */
export function PeekFade({ children, className = '' }: PeekFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      node.style.opacity = '1'
      return
    }

    const update = () => {
      const rect = node.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      // 0 when only a sliver peeks; 1 when the section fills most of the view
      const visible = Math.min(Math.max((viewport - rect.top) / (viewport * 0.65), 0), 1)
      const opacity = 0.28 + visible * 0.72
      node.style.opacity = String(opacity)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={['transition-[opacity] duration-300 ease-out', className]
        .filter(Boolean)
        .join(' ')}
      style={{ opacity: 0.35 }}
    >
      {children}
    </div>
  )
}
