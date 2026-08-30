import { createPageMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Faq, includedFaqs } from '@/components/sections/Faq'
import { pricingFaqs } from '@/components/sections/pricingFaqs'
import { LeadForm } from '@/components/forms/LeadForm'
import {
  contentShell,
  sectionBandPadLoose,
  splitGrid,
  splitGridReverse,
  tabletActionsCenter,
} from '@/lib/uiClasses'

export const metadata = createPageMetadata({
  title: 'FAQ',
  description:
    'Plain answers about Merevo: what’s included, pricing, domains, extras and what happens if you leave.',
  path: '/faq',
})

export default function FaqPage() {
  return (
    <main className="bg-white">
      <section className={`flex min-h-[100svh] w-full flex-col justify-center bg-white ${sectionBandPadLoose}`}>
        <div className={`${contentShell} ${splitGridReverse} ${tabletActionsCenter}`}>
          <Reveal className="max-lg:mx-auto max-lg:max-w-[34rem]">
            <h1 className="max-w-[20rem] font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:max-w-[24rem] sm:text-[3rem] lg:max-w-none lg:text-[3.35rem]">
              Questions, answered plainly
            </h1>
            <p className="mt-5 max-w-[28rem] text-base leading-relaxed text-meridian-muted sm:text-lg">
              Product, pricing and the fine print—without the jargon. Still unsure? Ask us.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button href="#contact" variant="accent">
                Contact us if you’re unsure
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="flex justify-center lg:justify-end">
            <IllustrationSlot
              label="FAQ"
              brief="Friendly stack of soft question marks and a calm tick, ready for straight answers."
              tone="ink"
              className="aspect-[5/4] w-full max-w-[26rem] bg-meridian-soft/40 lg:max-w-none"
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

      <section id="contact" className={`w-full scroll-mt-24 bg-white ${sectionBandPadLoose}`}>
        <div className={`${contentShell} ${splitGrid} ${tabletActionsCenter} lg:items-start`}>
          <Reveal>
            <SectionHeading
              title="Still unsure? Ask us"
              lede="Share a little about your business and we’ll follow up personally."
              align="left"
              centerOnTablet
              className="max-w-none"
              titleClassName="max-w-[18rem] sm:max-w-[22rem] lg:max-w-[22rem]"
            />
          </Reveal>

          <Reveal delayMs={80} className="min-w-0 w-full max-lg:mx-auto max-lg:max-w-[28rem]">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
