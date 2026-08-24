import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
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
    <Section className="bg-white">
      <Reveal>
        <SectionCaption>Who it’s for</SectionCaption>
        <h2 className="mt-5 max-w-[36rem] font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          Made for people with actual businesses to run.
        </h2>
        <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-meridian-muted">
          Independent service businesses that want a proper online presence—without assembling it
          themselves.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((item, index) => (
          <Reveal key={item} delayMs={index * 40} as="li">
            <div className="rounded-meridian bg-meridian-surface px-6 py-5 font-display text-lg font-semibold tracking-tight text-meridian-ink">
              {item}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
