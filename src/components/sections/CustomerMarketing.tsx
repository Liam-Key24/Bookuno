import { ChatCircleDots, Heart, Sparkle } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'

const points = [
  {
    icon: Heart,
    title: 'Keep in touch',
    caption: 'WITHOUT LEARNING EMAIL SOFTWARE',
  },
  {
    icon: Sparkle,
    title: 'Encourage them back',
    caption: 'FRIENDLY NUDGES. LESS TYPING.',
  },
  {
    icon: ChatCircleDots,
    title: 'Less inbox admin',
    caption: 'COMMUNICATION STAYS WITH YOUR BUSINESS',
  },
] as const

export function CustomerMarketing() {
  return (
    <Section className="bg-meridian-soft">
      <Reveal className="max-w-[40rem]">
        <SectionCaption className="text-meridian-ink/70">
          Friendly follow-ups, without the faff
        </SectionCaption>
        <h2 className="mt-4 font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Bring customers back—without becoming an email expert.
        </h2>
      </Reveal>

      <ul className="mt-8 grid gap-3 md:grid-cols-3">
        {points.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 60} as="li">
            <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="white" />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
