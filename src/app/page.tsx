import { ContactCta } from '@/components/sections/ContactCta'
import { CustomerMarketing } from '@/components/sections/CustomerMarketing'
import { DemoTemplates } from '@/components/sections/DemoTemplates'
import { Faq } from '@/components/sections/Faq'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMerevoDoes } from '@/components/sections/WhatMerevoDoes'
import { WhoItsFor } from '@/components/sections/WhoItsFor'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemBenefit />
      <HowItWorks />
      <WhatMerevoDoes />
      <CustomerMarketing />
      <DemoTemplates />
      <WhoItsFor />
      <FoundingOffer />
      <Faq />
      <ContactCta />
    </main>
  )
}
