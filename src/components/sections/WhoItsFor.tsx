import { Section } from '@/components/sections/Section'
import { Reveal } from '@/components/motion/Reveal'

const audiences = [
  'Barbers & hairdressers',
  'Beauty professionals',
  'Nail technicians',
  'Therapists',
  'Personal trainers',
  'Dog groomers',
  'Tattoo artists',
  'Cleaners',
  'Other service businesses',
] as const

export function WhoItsFor() {
  return (
    <Section className="bg-meridian-mid">
      <Reveal>
        <h2 className="max-w-[36rem] font-display text-[1.85rem] font-bold tracking-tight text-white sm:text-[2.4rem]">
          Made for people with actual businesses to run.
        </h2>
        <p className="mt-3 max-w-[34rem] text-base leading-relaxed text-white/80">
          Independent service businesses that want a proper online presence—without assembling it
          themselves.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((item, index) => (
          <Reveal key={item} delayMs={index * 35} as="li">
            <div className="rounded-meridian bg-white px-4 py-4 font-display text-base font-semibold tracking-tight text-meridian-ink md:text-lg">
              {item}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
