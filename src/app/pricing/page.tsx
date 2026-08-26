import type { Metadata } from 'next'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { Faq } from '@/components/sections/Faq'
import { pricingFaqs } from '@/components/sections/pricingFaqs'
import { PageCta } from '@/components/sections/PageCta'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Merevo founding pricing: £50 a month, with your first three months for £150 upfront including setup. Clear extras for domains, pages and third-party fees.',
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <FoundingOffer />
      <Faq
        id="pricing-faq"
        items={pricingFaqs}
        title="Pricing questions, answered plainly"
        lede="Domains, extras, Stripe fees and what happens if you leave."
      />
      <PageCta
        title="Ready when you are"
        body="Share a little about your business and we’ll follow up personally."
      />
    </main>
  )
}
