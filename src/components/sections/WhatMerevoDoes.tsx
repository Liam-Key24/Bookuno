import {
  CalendarCheck,
  CreditCard,
  EnvelopeSimple,
  Headset,
  Monitor,
} from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'

const capabilities = [
  {
    icon: Monitor,
    title: 'Your website',
    caption: 'TEMPLATE. YOUR BRAND. YOUR LOOK.',
  },
  {
    icon: CalendarCheck,
    title: 'Your bookings',
    caption: 'ON YOUR SITE — NOT A MARKETPLACE',
  },
  {
    icon: CreditCard,
    title: 'Your payments',
    caption: 'STRIPE. FEES APPLY SEPARATELY.',
  },
  {
    icon: EnvelopeSimple,
    title: 'Your marketing',
    caption: 'STAY IN TOUCH WITHOUT THE FAFF',
  },
  {
    icon: Headset,
    title: 'The tech bits',
    caption: 'HOSTING, UPDATES AND SUPPORT INCLUDED',
  },
] as const

export function WhatMerevoDoes() {
  return (
    <Section id="features" className="bg-meridian-surface">
      <Reveal className="max-w-[44rem]">
        <SectionCaption>What’s under the roof</SectionCaption>
        <h2 className="mt-4 font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Website, bookings, payments and marketing. One friendly roof.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Your website. Your bookings. Your customers.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 60} as="li">
            <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="white" />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
