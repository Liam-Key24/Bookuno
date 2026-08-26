import type { ReactNode } from 'react'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

type PageIntroProps = {
  title: string
  lede: string
  illustrationLabel: string
  illustrationBrief: string
  children?: ReactNode
}

/**
 * Shared page opener: centred title + short lede, then illustration + optional actions.
 * Matches the landing direction — no eyebrows, simple type, illustration placeholders.
 */
export function PageIntro({
  title,
  lede,
  illustrationLabel,
  illustrationBrief,
  children,
}: PageIntroProps) {
  return (
    <section className="flex min-h-[min(72vh,40rem)] w-full flex-col justify-center bg-white px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-[72rem]">
        <div className="mx-auto max-w-[36rem] text-center">
          <h1 className="font-display text-[2.15rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:text-[2.6rem] lg:text-[3.1rem]">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            {lede}
          </p>
          {children ? <div className="mt-6 flex justify-center">{children}</div> : null}
        </div>

        <div className="mx-auto mt-10 flex max-w-[22rem] justify-center sm:mt-12 md:max-w-[26rem]">
          <IllustrationSlot
            label={illustrationLabel}
            brief={illustrationBrief}
            className="aspect-[5/4] w-full max-w-none bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
          />
        </div>
      </div>
    </section>
  )
}
