import { ContactCta } from '@/components/sections/ContactCta'
import { CustomerMarketing } from '@/components/sections/CustomerMarketing'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMerevoDoes } from '@/components/sections/WhatMerevoDoes'

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
