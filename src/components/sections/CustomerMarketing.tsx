import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const points = [
  {
    title: 'Keep in touch',
    caption: 'WITHOUT LEARNING EMAIL SOFTWARE',
  },
  {
    title: 'Encourage them back',
    caption: 'FRIENDLY NUDGES. LESS TYPING.',
  },
  {
    title: 'Less inbox admin',
    caption: 'COMMUNICATION STAYS WITH YOUR BUSINESS',
  },
] as const

export function CustomerMarketing() {
  return (
    <Section className="bg-white">
      <Reveal className="max-w-[40rem]">
        <SectionCaption>Friendly follow-ups, without the faff</SectionCaption>
        <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          Bring customers back—without becoming an email expert.
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {points.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70} as="li">
            <article className="flex h-full min-h-[14rem] flex-col justify-end rounded-meridian bg-meridian-surface p-8 md:min-h-[17rem] md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight text-meridian-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                {item.caption}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
