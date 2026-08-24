import { BookingChoice } from '@/components/sections/BookingChoice'
import { ContactCta } from '@/components/sections/ContactCta'
import { CustomerMarketing } from '@/components/sections/CustomerMarketing'
import { DemoTemplates } from '@/components/sections/DemoTemplates'
import { Faq } from '@/components/sections/Faq'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ManagedFoundation } from '@/components/sections/ManagedFoundation'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMerevoDoes } from '@/components/sections/WhatMerevoDoes'
import { WhoItsFor } from '@/components/sections/WhoItsFor'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemBenefit />
      <WhatMerevoDoes />
      <BookingChoice />
      <HowItWorks />
      <CustomerMarketing />
      <ManagedFoundation />
      <DemoTemplates />
      <WhoItsFor />
      <FoundingOffer />
      <Faq />
      <ContactCta />
    </main>
  )
}
