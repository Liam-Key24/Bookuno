import type { Metadata } from 'next'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'

export const metadata: Metadata = {
  title: 'Pricing | Meridian',
  description: 'One Meridian founding offer for independent salons, barbers, and restaurants.',
}

const included = [
  'Managed website',
  'Booking or enquiry handling',
  'Hosting & updates',
  'Human support',
] as const

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="One founding offer. No tier maze."
        lede="A single partnership covering your site, requests, hosting, updates, and support."
        illustrationLabel="Founding offer"
        illustrationBrief="One clean card stamped “Founding” — no stacked pricing columns, just a simple partnership seal."
      >
        <Button href="/#contact" variant="accent" size="sm">
          Talk about founding access
        </Button>
      </PageIntro>

      <section className="w-full px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
        <div className="rounded-[20px] bg-meridian-surface p-[1.5rem] md:p-[2.25rem]">
          <h2 className="text-lg font-semibold tracking-tight text-meridian-ink">
            What’s included
          </h2>
          <ul className="mt-[1.25rem] grid gap-[0.85rem] sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-[0.75rem] text-sm text-meridian-muted sm:text-base">
                <Check size={18} weight="bold" className="shrink-0 text-meridian-mid" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-[1.5rem] max-w-[36rem] text-sm leading-relaxed text-meridian-muted">
            Exact investment depends on your starting point. We’ll quote clearly after a short
            conversation — no package ladder.
          </p>
        </div>
      </section>

      <PageCta
        title="Get a clear quote"
        body="Share a little about your salon, barbershop, or restaurant and we’ll follow up personally."
      />
    </main>
  )
}
