import type { Metadata } from 'next'
import { Faq } from '@/components/sections/Faq'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { PageCta } from '@/components/sections/PageCta'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Merevo founding pricing: £50 a month, with your first three months for £150 upfront including setup.',
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <FoundingOffer />
      <Faq />
      <PageCta
        title="Ready when you are"
        body="Share a little about your business and we’ll follow up personally."
      />
    </main>
  )
}
