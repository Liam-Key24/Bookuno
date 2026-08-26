import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const included = [
  'Personalised Merevo website template',
  'Services, menus, prices and PDFs added for you',
  'Online booking on your own website',
  'Stripe payments (processing fees separate)',
  'Customer and email marketing, without the faff',
  'Hosting, storage, maintenance and support',
  'Setup, launch help, and one standard domain for year one',
  'Founding rate of £50/month while subscribed',
] as const

export function FoundingOffer() {
  return (
    <Section
      id="pricing"
      className="flex min-h-[100svh] flex-col justify-center bg-white !py-12 md:!py-16 lg:!py-20"
    >
      <div className="mx-auto max-w-[36rem] text-center">
        <h1 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          A whole lot of useful. One simple price.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          £150 upfront covers your first three months, including setup. Then £50 a month.
        </p>
        <p className="mt-6 font-display text-[4rem] font-bold leading-none tracking-tight text-meridian-accent sm:text-[5rem]">
          £50
        </p>
        <p className="mt-2 text-sm text-meridian-muted">a month after that</p>
      </div>

      <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="flex justify-center lg:justify-start">
          <IllustrationSlot
            label="Founding pricing"
            brief="One clean stamp marked £50 — simple, no stacked pricing columns."
            className="aspect-auto h-[min(44vh,24rem)] w-full max-w-[22rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
          />
        </div>

        <div>
          <h2 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
            What’s covered
          </h2>
          <p className="mt-2 max-w-[34rem] text-sm leading-relaxed text-meridian-muted md:text-base">
            The £150 is not an extra setup fee. Founding customers keep £50/month while subscribed.
            Stripe fees apply separately.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-meridian-muted">
                <Check
                  size={18}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-meridian-mid"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/#contact" variant="accent" className="mt-8">
            Get started with Merevo
          </Button>
        </div>
      </div>
    </Section>
  )
}
