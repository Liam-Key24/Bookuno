import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'What’s included',
  description:
    'What Merevo manages for service businesses: website, bookings, Stripe payments, customer marketing, hosting and support.',
}

const points = [
  {
    title: 'Website',
    body: 'A Merevo template, personalised with your brand, services and look.',
  },
  {
    title: 'Bookings',
    body: 'Customers book on your site and domain—not a marketplace profile.',
  },
  {
    title: 'Payments',
    body: 'Stripe connected for deposits or full payments. Processing fees sit separately.',
  },
  {
    title: 'Marketing',
    body: 'Friendly follow-ups to stay in touch, without learning email software.',
  },
  {
    title: 'Hosting & support',
    body: 'Hosting, updates and Merevo help included. We look after the fiddly bits.',
  },
  {
    title: 'Domain',
    body: 'One standard domain for year one, preferably a .co.uk.',
  },
] as const

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Everything useful. Nothing to babysit."
        lede="Website, bookings, payments and marketing—looked after for you."
        illustrationLabel="What’s included"
        illustrationBrief="Friendly diagram of website, bookings, payments, marketing and support under one roof."
      />

      <Section className="bg-meridian-surface">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <IllustrationSlot
              label="Managed for you"
              brief="Soft toolkit and calm checklist resting beside a glowing Open sign."
              className="aspect-auto h-[min(44vh,24rem)] w-full max-w-[22rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
            />
          </div>

          <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point.title}>
                <h2 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                  {point.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <PageCta
        title="Want this for your business?"
        body="Tell us a little about what you do and we’ll walk you through the founding offer."
      />
    </main>
  )
}
