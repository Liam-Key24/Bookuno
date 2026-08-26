import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  /** Outer band background / utilities (e.g. bg-white, bg-meridian-deep). */
  className?: string
  /**
   * When true, wraps children in an m-2 rounded panel.
   * Use sparingly (hero-adjacent moments: how-it-works, pricing, contact).
   */
  withPanel?: boolean
  /** Extra classes for the optional m-2 panel. */
  panelClassName?: string
}

const bandPad = 'px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 lg:py-28'
const panelBase =
  'm-2 w-auto rounded-meridian bg-meridian-surface px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16'
const contentShell = 'mx-auto w-full max-w-[72rem]'

/**
 * Shared marketing section shell.
 * Default: open colour band (no inset card).
 * Optional `withPanel`: near-full-bleed m-2 rounded container.
 */
export function Section({
  id,
  children,
  className = '',
  withPanel = false,
  panelClassName = '',
}: SectionProps) {
  if (withPanel) {
    return (
      <section id={id} className={['w-full', className].filter(Boolean).join(' ')}>
        <div className={[panelBase, panelClassName].filter(Boolean).join(' ')}>
          <div className={contentShell}>{children}</div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className={['w-full', bandPad, className].filter(Boolean).join(' ')}
    >
      <div className={contentShell}>{children}</div>
    </section>
  )
}
