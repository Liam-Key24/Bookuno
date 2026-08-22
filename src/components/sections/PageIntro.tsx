import type { ReactNode } from 'react'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

type PageIntroProps = {
  title: string
  lede: string
  illustrationLabel: string
  illustrationBrief: string
  children?: ReactNode
}

export function PageIntro({
  title,
  lede,
  illustrationLabel,
  illustrationBrief,
  children,
}: PageIntroProps) {
  return (
    <section className="w-full bg-white px-[1.5rem] pb-[2rem] pt-[0.5rem] md:px-[2.5rem] md:pb-[2.5rem] lg:px-[3rem]">
      <div className="grid w-full items-center gap-[2rem] rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.25rem] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-[2.5rem] md:px-[2.5rem] md:py-[3rem] lg:px-[3rem]">
        <div className="max-w-[34rem]">
          <h1 className="text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-meridian-ink sm:text-[2.6rem] lg:text-[3rem]">
            {title}
          </h1>
          <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            {lede}
          </p>
          {children ? <div className="mt-[1.5rem]">{children}</div> : null}
        </div>

        <div className="flex justify-center md:justify-end">
          <IllustrationSlot
            label={illustrationLabel}
            brief={illustrationBrief}
            className="w-full max-w-[20rem] bg-[#9aa7b0] md:max-w-[24rem]"
          />
        </div>
      </div>
    </section>
  )
}
