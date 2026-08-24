import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const capabilities = [
  {
    title: 'Your website',
    caption: 'TEMPLATE. YOUR BRAND. YOUR LOOK.',
  },
  {
    title: 'Your bookings',
    caption: 'ON YOUR SITE — NOT A MARKETPLACE',
  },
  {
    title: 'Your payments',
    caption: 'STRIPE. FEES APPLY SEPARATELY.',
  },
  {
    title: 'Your marketing',
    caption: 'STAY IN TOUCH WITHOUT THE FAFF',
  },
  {
    title: 'The tech bits',
    caption: 'HOSTING, UPDATES AND SUPPORT INCLUDED',
  },
] as const

export function WhatMerevoDoes() {
  return (
    <Section id="features" className="bg-meridian-surface">
      <Reveal className="max-w-[44rem]">
        <SectionCaption>What’s under the roof</SectionCaption>
        <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          Website, bookings, payments and marketing. One friendly roof.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-meridian-muted">
          Your website. Your bookings. Your customers.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70} as="li">
            <article className="flex h-full min-h-[13rem] flex-col justify-end rounded-meridian bg-white p-8 md:min-h-[16rem] md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight text-meridian-ink md:text-[1.85rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                {item.caption}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
