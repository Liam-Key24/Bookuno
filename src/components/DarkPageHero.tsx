import type { ReactNode } from 'react'

type DarkPageHeroProps = {
  /** Two-digit watermark number rendered behind the card. */
  number: string
  /** Top line (white) of the heading. */
  titleTop: ReactNode
  /** Bottom line (gradient italic) of the heading. */
  titleBottom: ReactNode
  /** Lead paragraph under the divider. */
  description: ReactNode
  /** Small caps tagline below the paragraph. */
  caption: ReactNode
  /** Constrain top line width on narrow screens. Defaults to 17ch. */
  titleMaxCh?: '17ch' | '20ch'
}

/**
 * Shared dark wine-gradient hero used across /packages, /work, /compare, /enquiries.
 *
 * Previously duplicated ~80 lines per page (5 decorative gradient/grid layers,
 * 4 corner markers, sweep gradient, hairline, big watermark numeral, framer
 * motion fade chains). Consolidating cuts JS/CSS bytes, isolates paint cost in
 * one place, and prevents drift between pages.
 *
 * Animations are CSS-only and respect `prefers-reduced-motion`.
 */
export function DarkPageHero({
  number,
  titleTop,
  titleBottom,
  description,
  caption,
  titleMaxCh = '17ch',
}: DarkPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-champagne-200/70 bg-gradient-to-b from-wine-deep/95 via-wine to-[#4a1520] py-14 text-white md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgb(251_146_60/0.32),transparent),radial-gradient(circle_at_-12%_100%,rgb(244_63_94/0.16),transparent_62%),radial-gradient(circle_at_108%_0%,rgb(251_191_36/0.14),transparent_55%),linear-gradient(125deg,transparent_38%,rgb(251_146_60/0.07)_50%,transparent_62%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.055)_1px,transparent_1px)] bg-[length:44px_44px] opacity-90 [mask-image:radial-gradient(ellipse_88%_72%_at_50%_28%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(10rem,42vw,22rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.035]"
        aria-hidden
      >
        {number}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
        <div className="hero-enter relative overflow-visible border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-12 shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset] sm:px-10 sm:py-14 md:px-12 md:py-16">
          {/* corner marks */}
          <div
            className="pointer-events-none absolute left-3 top-3 size-4 border-l-2 border-t-2 border-sun/50 sm:left-4 sm:top-4"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-3 top-3 size-4 border-r-2 border-t-2 border-sun/50 sm:right-4 sm:top-4"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 left-3 size-4 border-b-2 border-l-2 border-white/25 sm:bottom-4 sm:left-4"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 right-3 size-4 border-b-2 border-r-2 border-white/25 sm:bottom-4 sm:right-4"
            aria-hidden
          />

          <h1
            className="mx-auto mt-2 text-center font-display text-[clamp(2rem,5.2vw+1.1rem,3.75rem)] font-bold leading-[1.2] tracking-[-0.038em] sm:max-w-[22ch] md:max-w-none"
            style={{ maxWidth: titleMaxCh }}
          >
            <span className="block text-white">{titleTop}</span>
            <span className="mt-1 block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text px-[0.2em] pb-[0.2em] italic tracking-tight text-transparent md:mt-1.5">
              {titleBottom}
            </span>
          </h1>

          <div
            className="mx-auto mt-5 h-px max-w-xs bg-gradient-to-r from-transparent via-white/35 to-transparent md:mt-6"
            aria-hidden
          />

          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-[15px] leading-relaxed text-white/76 sm:text-base md:text-[1.05rem] md:leading-relaxed">
            {description}
          </p>

          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-[11px] sm:tracking-[0.26em]">
            {caption}
          </p>
        </div>
      </div>
    </section>
  )
}
