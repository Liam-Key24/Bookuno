import type { Metadata } from 'next'
import {
  CalendarCheck,
  CreditCard,
  EnvelopeSimple,
  Globe,
  Headset,
  Monitor,
} from '@phosphor-icons/react/dist/ssr'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'What’s included',
  description:
    'What Merevo manages for service businesses: website, bookings, Stripe payments, customer marketing, hosting and support.',
}

const points = [
  { icon: Monitor, title: 'Website', caption: 'TEMPLATE PERSONALISED FOR YOUR BRAND' },
  { icon: CalendarCheck, title: 'Bookings', caption: 'ON YOUR SITE — NOT A MARKETPLACE' },
  { icon: CreditCard, title: 'Payments', caption: 'STRIPE. FEES APPLY SEPARATELY.' },
  { icon: EnvelopeSimple, title: 'Marketing', caption: 'STAY IN TOUCH WITHOUT THE FAFF' },
  { icon: Headset, title: 'Hosting & support', caption: 'MAINTENANCE AND MEREVO HELP INCLUDED' },
  { icon: Globe, title: 'Domain', caption: 'ONE STANDARD DOMAIN FOR YEAR ONE' },
] as const

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        caption="What’s included"
        title="Everything useful. Nothing to babysit."
        lede="Website, bookings, payments and customer marketing—looked after for you."
        illustrationLabel="What’s included"
        illustrationBrief="Friendly diagram of website, bookings, payments, marketing and support tiles."
      />

      <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
        <ul className="mx-auto grid max-w-[72rem] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delayMs={index * 50} as="li">
              <InfoCard
                icon={point.icon}
                title={point.title}
                caption={point.caption}
                tone="surface"
              />
            </Reveal>
          ))}
        </ul>
      </section>

      <PageCta
        title="Want this for your business?"
        body="Tell us a little about what you do and we’ll walk you through the founding offer."
      />
    </main>
  )
}
