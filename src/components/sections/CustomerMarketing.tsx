import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

const points = [
  {
    title: 'Keep in touch',
    body: 'Stay on your customers’ radar without learning email software.',
  },
  {
    title: 'Encourage them back',
    body: 'Friendly nudges when it helps. Less typing for you.',
  },
  {
    title: 'Less inbox admin',
    body: 'Communication stays with your business, not scattered across apps.',
  },
] as const

export function CustomerMarketing() {
  return (
    <Section className="flex min-h-[100svh] flex-col justify-center bg-meridian-surface !py-12 md:!py-16 lg:!py-20">
      <Reveal className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Bring customers back without the faff.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Friendly follow-ups, looked after for you—so you don’t become an email expert.
        </p>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14">
        <Reveal className="flex justify-center lg:justify-start">
          <IllustrationSlot
            label="Friendly follow-ups"
            brief="Soft envelope and a warm reminder note waiting by a calm desk lamp."
            className="aspect-auto h-[min(48vh,26rem)] w-full max-w-[22rem] bg-meridian-soft/35 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-y-7 sm:gap-y-8 lg:gap-y-10">
          {points.map((point, index) => (
            <Reveal key={point.title} delayMs={index * 60} as="li">
              <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-2 max-w-[28rem] text-sm leading-relaxed text-meridian-muted md:text-base">
                {point.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
