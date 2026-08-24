'use client'

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Render as a specific element; defaults to div */
  as?: 'div' | 'li' | 'section' | 'article'
  delayMs?: number
  rootMargin?: string
}

export function Reveal({
  children,
  className = '',
  as = 'div',
  delayMs = 0,
  rootMargin = '0px 0px -8% 0px',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        node.classList.toggle('is-visible', entry.isIntersecting)
      },
      { threshold: 0.12, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin])

  const style =
    delayMs > 0
      ? ({ transitionDelay: `${delayMs}ms` } satisfies CSSProperties)
      : undefined

  const classes = ['reveal', className].filter(Boolean).join(' ')

  if (as === 'li') {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={classes} style={style}>
        {children}
      </li>
    )
  }

  if (as === 'section') {
    return (
      <section ref={ref as React.RefObject<HTMLElement>} className={classes} style={style}>
        {children}
      </section>
    )
  }

  if (as === 'article') {
    return (
      <article ref={ref as React.RefObject<HTMLElement>} className={classes} style={style}>
        {children}
      </article>
    )
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  )
}
