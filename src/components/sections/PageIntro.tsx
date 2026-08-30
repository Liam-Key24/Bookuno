import type { ReactNode } from 'react'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { contentShell, pageTitle, sectionBandPad } from '@/lib/uiClasses'

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
    <section
      className={`flex min-h-[min(72vh,40rem)] w-full flex-col justify-center bg-white ${sectionBandPad}`}
    >
      <div className={contentShell}>
        <div className="mx-auto max-w-[36rem] text-center">
          <h1 className={pageTitle}>{title}</h1>
          <p className="mt-3 text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            {lede}
          </p>
          {children ? <div className="mt-6 flex justify-center">{children}</div> : null}
        </div>

        <div className="mx-auto mt-10 flex max-w-[22rem] justify-center sm:mt-12 md:max-w-[26rem]">
          <IllustrationSlot
            label={illustrationLabel}
            brief={illustrationBrief}
            tone="ink"
            className="aspect-[5/4] w-full max-w-none bg-meridian-soft/40"
          />
        </div>
      </div>
    </section>
  )
}
