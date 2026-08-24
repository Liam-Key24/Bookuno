import type { Metadata } from 'next'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Merevo founding pricing: £50 a month, with your first three months for £150 upfront including setup.',
}

const included = [
  'Personalised Merevo website',
  'Online booking on your site',
  'Stripe payments (fees separate)',
  'Customer and email marketing',
  'Hosting, storage, maintenance and support',
  'Setup, launch and one standard domain for year one',
] as const

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageIntro
        caption="£50. That’s it."
        title="A whole lot of useful. One simple price."
        lede="£150 upfront covers your first three months, including setup. Then £50 a month."
        illustrationLabel="Founding pricing"
        illustrationBrief="One clean card stamped £50 — no stacked pricing columns."
      >
        <Button href="/#contact" variant="accent" size="sm">
          Get started with Merevo
        </Button>
      </PageIntro>

      <section className="w-full bg-white">
        <Reveal className="m-2 w-auto rounded-meridian bg-meridian-surface px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-[72rem]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                What’s covered
              </h2>
              <p className="font-display text-4xl font-bold tracking-tight text-meridian-ink md:text-5xl">
                £50<span className="text-lg font-medium text-meridian-muted"> / month</span>
              </p>
            </div>
            <p className="mt-4 max-w-[40rem] text-sm leading-relaxed text-meridian-muted md:text-base">
              The £150 is not an extra setup fee. Founding customers keep £50/month while subscribed.
              Stripe processing fees apply separately.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-meridian-muted sm:text-base"
                >
                  <Check size={18} weight="bold" className="shrink-0 text-meridian-mid" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <PageCta
        title="Ready when you are"
        body="Share a little about your business and we’ll follow up personally."
      />
    </main>
  )
}
