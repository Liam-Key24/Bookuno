import type { ReactNode } from 'react'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

type PageIntroProps = {
  title: string
  lede: string
  caption?: string
  illustrationLabel: string
  illustrationBrief: string
  children?: ReactNode
}

export function PageIntro({
  title,
  lede,
  caption,
  illustrationLabel,
  illustrationBrief,
  children,
}: PageIntroProps) {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-2 md:px-5 md:pb-20 lg:px-6">
      <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 rounded-meridian bg-meridian-surface px-5 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <Reveal className="max-w-[40rem]">
          {caption ? (
            <p className="caption-quirk mb-4">{caption.startsWith('//') ? caption : `// ${caption} //`}</p>
          ) : null}
          <h1 className="font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:text-[2.85rem] lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-[32rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            {lede}
          </p>
          {children ? <div className="mt-6">{children}</div> : null}
        </Reveal>

        <Reveal delayMs={120} className="flex justify-center md:justify-end">
          <IllustrationSlot
            label={illustrationLabel}
            brief={illustrationBrief}
            className="w-full max-w-[20rem] bg-[#9aa7b0] md:max-w-[24rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
