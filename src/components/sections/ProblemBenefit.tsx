import {
  Buildings,
  CursorClick,
  Headset,
  SquaresFour,
  MoonStars,
  Gauge,
} from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'

const cards = [
  {
    icon: SquaresFour,
    title: 'Too many tools',
    caption: 'WEBSITES, BOOKINGS, PAYMENTS, EMAIL — ALL SEPARATE',
  },
  {
    icon: Gauge,
    title: 'Another dashboard?',
    caption: 'NO THANKS. YOU HAVE A BUSINESS TO RUN',
  },
  {
    icon: MoonStars,
    title: 'Tech after hours',
    caption: 'PLUGINS AND PATCHES STEAL YOUR EVENINGS',
  },
] as const

const wins = [
  {
    icon: Buildings,
    title: 'One friendly home',
    caption: 'YOUR SITE, BOOKINGS, PAYMENTS AND MARKETING TOGETHER',
  },
  {
    icon: CursorClick,
    title: 'We do the clicking',
    caption: 'YOU SEND THE DETAILS. MEREVO SETS IT UP',
  },
  {
    icon: Headset,
    title: 'Someone in your corner',
    caption: 'HOSTING, MAINTENANCE AND SUPPORT STAY WITH US',
  },
] as const

export function ProblemBenefit() {
  return (
    <Section id="about" className="bg-white">
      <Reveal className="max-w-[42rem]">
        <SectionCaption>Another dashboard? No thanks.</SectionCaption>
        <h2 className="mt-4 font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          You didn’t start a business to manage five bits of software.
        </h2>
        <p className="mt-3 max-w-[34rem] text-base leading-relaxed text-meridian-muted">
          Merevo puts the useful parts together and helps manage them for you.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {cards.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70}>
            <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="surface" />
          </Reveal>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {wins.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70}>
            <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="deep" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
