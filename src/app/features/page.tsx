import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'What’s included',
  description:
    'What Merevo manages for service businesses: website, bookings, Stripe payments, customer marketing, hosting and support.',
}

const points = [
  { title: 'Website', caption: 'TEMPLATE PERSONALISED FOR YOUR BRAND' },
  { title: 'Bookings', caption: 'ON YOUR SITE — NOT A MARKETPLACE' },
  { title: 'Payments', caption: 'STRIPE. FEES APPLY SEPARATELY.' },
  { title: 'Marketing', caption: 'STAY IN TOUCH WITHOUT THE FAFF' },
  { title: 'Hosting & support', caption: 'MAINTENANCE AND MEREVO HELP INCLUDED' },
  { title: 'Domain', caption: 'ONE STANDARD DOMAIN FOR YEAR ONE' },
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

      <section className="w-full px-4 pb-20 md:px-5 md:pb-28 lg:px-6 lg:pb-32">
        <ul className="mx-auto grid max-w-[96rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delayMs={index * 60} as="li">
              <article className="flex h-full min-h-[14rem] flex-col justify-end rounded-meridian bg-meridian-surface p-8 md:min-h-[16rem] md:p-10">
                <h2 className="font-display text-2xl font-bold tracking-tight text-meridian-ink">
                  {point.title}
                </h2>
                <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                  {point.caption}
                </p>
              </article>
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
