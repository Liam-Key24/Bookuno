import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { Faq, includedFaqs } from '@/components/sections/Faq'
import { pricingFaqs } from '@/components/sections/pricingFaqs'
import { LeadForm } from '@/components/forms/LeadForm'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Plain answers about Merevo: what’s included, pricing, domains, extras and what happens if you leave.',
}

export default function FaqPage() {
  return (
    <main className="bg-white">
      <section className="flex min-h-[100svh] w-full flex-col justify-center bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid w-full max-w-[72rem] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <Reveal>
            <h1 className="max-w-[20rem] font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:max-w-[24rem] sm:text-[3rem] lg:text-[3.35rem]">
              Questions, answered plainly
            </h1>
            <p className="mt-5 max-w-[28rem] text-base leading-relaxed text-meridian-muted sm:text-lg">
              Product, pricing and the fine print—without the jargon. Still unsure? Ask us.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="accent">
                Contact us if you’re unsure
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="flex justify-center lg:justify-end">
            <IllustrationSlot
              label="FAQ"
              brief="Friendly stack of soft question marks and a calm tick, ready for straight answers."
              className="aspect-[5/4] w-full max-w-[26rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
            />
          </Reveal>
        </div>
      </section>

      <Faq
        id="product-faq"
        items={includedFaqs}
        title="About Merevo"
        lede="How the product works—website, bookings, payments, marketing and support."
        className="bg-white"
      />

      <Faq
        id="pricing-faq"
        items={pricingFaqs}
        title="Pricing & extras"
        lede="What you pay, what’s included, domains, Stripe fees and leaving."
        className="bg-meridian-surface"
      />

      <section
        id="contact"
        className="w-full scroll-mt-24 bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[72rem] items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <Reveal>
            <h2 className="max-w-[18rem] font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:max-w-[22rem] sm:text-[2.4rem]">
              Still unsure? Ask us
            </h2>
            <p className="mt-3 max-w-[28rem] text-base leading-relaxed text-meridian-muted">
              Share a little about your business and we’ll follow up personally.
            </p>
          </Reveal>

          <Reveal delayMs={80} className="min-w-0 w-full">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
