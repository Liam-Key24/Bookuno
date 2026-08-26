import { Devices, Storefront, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { PeekFade } from '@/components/motion/PeekFade'

const problems = [
  {
    icon: Devices,
    title: 'Too many tools and costs',
    body: 'Another login, another bill, another evening spent clicking instead of cutting, coaching or cleaning.',
    tilt: '-rotate-2',
  },
  {
    icon: Storefront,
    title: 'A website that gets visits but not bookings',
    body: 'People find you online, admire the photos, then wander off without booking a thing.',
    tilt: 'rotate-2',
  },
  {
    icon: EnvelopeSimple,
    title: 'Bookings scattered like confetti',
    body: 'DMs, texts, missed calls and inbox chaos. The diary never quite knows what is going on.',
    tilt: '-rotate-2',
  },
] as const

export function ProblemBenefit() {
  return (
    <PeekFade>
      <Section
        id="about"
        className="relative z-0 -mt-10 bg-gradient-to-b from-white via-meridian-accent/15 to-white pt-24 pb-16 md:-mt-14 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28"
      >
        <Reveal className="mx-auto w-full max-w-[34rem] text-center">
          <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.35rem]">
            Sound familiar?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-meridian-muted">
            Three headaches Merevo is built to take off your plate.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex justify-center">
            <IllustrationSlot
              label="Struggling person holding lots of shapes"
              brief="Busy owner juggling mismatched tools, tabs and shapes. The everyday tangle Merevo tidies up."
              className="aspect-[4/5] w-full max-w-[24rem] bg-meridian-accent/35 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/70 md:max-w-[28rem]"
            />
          </Reveal>

          <ul className="mx-auto flex w-full max-w-[30rem] flex-col gap-9 lg:mx-0 lg:max-w-none">
            {problems.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delayMs={index * 90} as="li">
                  <article
                    className={[
                      'rounded-meridian bg-white p-6 shadow-[0_10px_28px_rgb(22_105_122_/_0.12)] md:p-7',
                      'origin-center transition-transform duration-500',
                      item.tilt,
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        size={26}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-meridian-accent"
                        aria-hidden
                      />
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </Section>
    </PeekFade>
  )
}
