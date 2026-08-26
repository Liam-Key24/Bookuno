import type { ComponentType, ReactNode, SVGProps } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; weight?: string }
>

export type FeaturePoint = {
  icon: PhosphorIcon
  title: string
  body: string
  /** Tailwind text colour for the icon */
  iconClass: string
}

export type FeatureShowcaseProps = {
  title: string
  lede: string
  points: readonly FeaturePoint[]
  illustrationLabel: string
  illustrationBrief: string
  /** Soft wash behind the snapshot */
  snapshotClass: string
  /** When true, snapshot sits on the right */
  reverse?: boolean
  children?: ReactNode
}

/**
 * Tall scroll moment: tool snapshot + title + three distinctive points.
 * Alternating layout, Reveal motion, Merevo colour accents.
 */
export function FeatureShowcase({
  title,
  lede,
  points,
  illustrationLabel,
  illustrationBrief,
  snapshotClass,
  reverse = false,
}: FeatureShowcaseProps) {
  const copy = (
    <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
      <Reveal>
        <h2 className="max-w-[22rem] font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.35rem]">
          {title}
        </h2>
        <p className="mt-3 max-w-[28rem] text-base leading-relaxed text-meridian-muted">
          {lede}
        </p>
      </Reveal>

      <ul className="mt-10 flex max-w-[30rem] flex-col gap-8 sm:mt-12 sm:gap-9">
        {points.map((point, index) => {
          const Icon = point.icon
          return (
            <Reveal key={point.title} delayMs={80 + index * 90} as="li">
              <div className="flex items-start gap-3.5">
                <span
                  className={[
                    'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-meridian',
                    'bg-white shadow-[0_8px_22px_rgb(22_105_122_/_0.1)]',
                  ].join(' ')}
                >
                  <Icon
                    size={22}
                    weight="duotone"
                    className={point.iconClass}
                    aria-hidden
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-meridian-muted md:text-base">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )

  const snapshot = (
    <Reveal
      delayMs={60}
      className={[
        'flex justify-center',
        reverse ? 'lg:order-2 lg:justify-end' : 'lg:order-1 lg:justify-start',
      ].join(' ')}
    >
      <IllustrationSlot
        label={illustrationLabel}
        brief={illustrationBrief}
        className={[
          'aspect-[5/4] w-full max-w-[26rem] text-meridian-ink',
          '[&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65',
          'shadow-[0_16px_40px_rgb(22_105_122_/_0.12)]',
          snapshotClass,
        ].join(' ')}
      />
    </Reveal>
  )

  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto grid w-full max-w-[72rem] items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {reverse ? (
          <>
            {copy}
            {snapshot}
          </>
        ) : (
          <>
            {snapshot}
            {copy}
          </>
        )}
      </div>
    </section>
  )
}
