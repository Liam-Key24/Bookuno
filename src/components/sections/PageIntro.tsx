import type { ReactNode } from 'react'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { SectionCaption } from '@/components/sections/SectionCaption'

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
    <section className="w-full bg-white">
      <div className="m-2 grid w-auto items-center justify-center gap-8 rounded-meridian bg-meridian-soft px-5 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
        <Reveal className="w-full max-w-[40rem] justify-self-center md:justify-self-start">
          {caption ? (
            <SectionCaption className="mb-3 text-meridian-ink/70">{caption}</SectionCaption>
          ) : null}
          <h1 className="font-display text-[2.15rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:text-[2.6rem] lg:text-[3.1rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-[32rem] text-base leading-relaxed text-meridian-ink/75 sm:text-[1.05rem]">
            {lede}
          </p>
          {children ? <div className="mt-5">{children}</div> : null}
        </Reveal>

        <Reveal
          delayMs={100}
          className="flex w-full justify-center justify-self-center md:justify-end md:justify-self-end"
        >
          <IllustrationSlot
            label={illustrationLabel}
            brief={illustrationBrief}
            className="w-full max-w-[18rem] bg-white/35 md:max-w-[22rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
