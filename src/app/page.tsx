import { ContactCta } from '@/components/sections/ContactCta'
import { FoundingOffer } from '@/components/sections/FoundingOffer'
import { Hero } from '@/components/sections/Hero'
import { ProblemBenefit } from '@/components/sections/ProblemBenefit'
import { WhatMeridianDoes } from '@/components/sections/WhatMeridianDoes'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemBenefit />
      <WhatMeridianDoes />
      <FoundingOffer />
      <ContactCta />
    </main>
  )
}
