import { ContactCta } from '@/components/sections/ContactCta'
import { CustomerMarketing } from '@/components/sections/CustomerMarketing'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMerevoDoes } from '@/components/sections/WhatMerevoDoes'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Managed website, bookings and customer marketing',
  description:
    'Merevo is a managed website, booking, payments and customer-growth platform for service businesses. Set up and looked after for you — £50 a month.',
  path: '/',
})

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemBenefit />
      <HowItWorks />
      <CustomerMarketing />
      <WhatMerevoDoes />
      <ContactCta />
    </main>
  )
}
