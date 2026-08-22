import type { Metadata } from 'next'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'Features | Meridian',
  description: 'What Meridian manages for independent salons, barbers, and restaurants.',
}

const points = [
  'Managed website that stays current',
  'Booking & enquiry handling',
  'Hosting and quiet updates',
  'Human support when you need it',
] as const

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Everything your site should handle — without you babysitting it."
        lede="Meridian runs the digital front door for independent salons, barbers, and restaurants."
        illustrationLabel="Features overview"
        illustrationBrief="Friendly diagram of website, requests, hosting, and support as four calm tiles around a shop front."
      />

      <section className="w-full px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
        <div className="grid items-center gap-[1.5rem] md:grid-cols-2 md:gap-[2rem]">
          <ul className="space-y-[1rem] rounded-[20px] bg-meridian-surface p-[1.5rem] md:p-[2rem]">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-[0.75rem]">
                <Check
                  size={18}
                  weight="bold"
                  className="mt-[0.2rem] shrink-0 text-meridian-mid"
                  aria-hidden
                />
                <span className="text-base font-medium tracking-tight text-meridian-ink">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-end">
            <IllustrationSlot
              label="Day-to-day calm"
              brief="Owner on the floor while Meridian quietly keeps the site and enquiries tidy in the background."
              className="w-full max-w-[22rem] bg-meridian-soft"
            />
          </div>
        </div>
      </section>

      <PageCta
        title="Want this running for your space?"
        body="Tell us what you need and we’ll map the founding offer to your salon, barbershop, or restaurant."
      />
    </main>
  )
}
