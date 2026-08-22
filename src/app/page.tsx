import { BookingChoice } from '@/components/sections/BookingChoice'
import { ContactCta } from '@/components/sections/ContactCta'
import { DemoTemplates } from '@/components/sections/DemoTemplates'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMeridianDoes } from '@/components/sections/WhatMeridianDoes'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemBenefit />
      <WhatMeridianDoes />
      <BookingChoice />
      <HowItWorks />
      <DemoTemplates />
      <FoundingOffer />
      <ContactCta />
    </main>
  )
}
