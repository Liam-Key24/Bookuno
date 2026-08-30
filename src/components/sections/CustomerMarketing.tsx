import { EnvelopeSimple, ArrowUUpLeft, Tray } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'
import { Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { featureCard, featureSectionLayout, stackedFeatureList } from '@/lib/uiClasses'

const points: readonly {
  icon: Icon
  iconClass: string
  title: string
  body: string
  tilt: string
}[] = [
  {
    icon: EnvelopeSimple,
    iconClass: 'text-meridian-accent',
    title: 'Keep in touch',
    body: 'Stay on your customers’ radar without learning email software.',
    tilt: 'md:-rotate-2',
  },
  {
    icon: ArrowUUpLeft,
    iconClass: 'text-meridian-mid',
    title: 'Encourage them back',
    body: 'Friendly nudges when it helps. Less typing for you.',
    tilt: 'md:rotate-2',
  },
  {
    icon: Tray,
    iconClass: 'text-meridian-deep',
    title: 'Less inbox admin',
    body: 'Communication stays with your business, not scattered across apps.',
    tilt: 'md:-rotate-1',
  },
]

export function CustomerMarketing() {
  return (
    <Section className="relative flex min-h-[100svh] flex-col justify-center overflow-x-clip !py-20 md:!py-28 lg:!py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] bottom-[18%] bg-gradient-to-b from-transparent via-meridian-soft/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[min(36rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meridian-soft/25 blur-3xl"
      />

      <div className="relative z-10 w-full min-w-0">
        <Reveal className="mx-auto max-w-[36rem]">
          <SectionHeading
            title="Bring customers back without the faff."
            lede="Friendly follow-ups, looked after for you—so you don’t become an email expert."
          />
        </Reveal>

        <div className={featureSectionLayout}>
          <Reveal className="flex w-full min-w-0 justify-center lg:justify-end">
            <IllustrationSlot
              label="Friendly follow-ups"
              brief="Soft envelope and a warm reminder note waiting by a calm desk lamp."
              tone="ink"
              className="aspect-auto h-[min(48vh,26rem)] w-full max-w-[22rem] bg-white/55 lg:max-w-none"
            />
          </Reveal>

          <ul className={stackedFeatureList}>
            {points.map((point, index) => {
              const Icon = point.icon
              return (
                <Reveal key={point.title} delayMs={index * 70} as="li" className="w-full min-w-0">
                  <article
                    className={[
                      featureCard,
                      'origin-center transition-transform duration-500',
                      point.tilt,
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        size={26}
                        weight="duotone"
                        className={['mt-0.5 shrink-0', point.iconClass].join(' ')}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
