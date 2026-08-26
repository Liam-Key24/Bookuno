import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

const cardRows = [
  {
    label: 'Start',
    detail: '£150 upfront — first three months, including setup and launch',
  },
  {
    label: 'Then',
    detail: '£50 a month at the founding rate while you’re subscribed',
  },
  {
    label: 'Always',
    detail: 'Website, bookings, payments and marketing — looked after for you',
  },
] as const

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
    <>
      <section
        id="pricing"
        className="flex min-h-[100svh] w-full flex-col justify-center bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[72rem] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <Reveal>
            <h1 className="max-w-[18rem] font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:max-w-[22rem] sm:text-[3rem] lg:text-[3.35rem]">
              A whole lot of useful. One simple price.
            </h1>
            <p className="mt-5 max-w-[28rem] text-base leading-relaxed text-meridian-muted sm:text-lg">
              £150 covers your first three months, including setup. Then £50 a month. Not an extra
              setup fee — founding customers keep £50/month while subscribed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#contact" variant="accent">
                Get started with Merevo
              </Button>
              <Button href="/whats-included" variant="soft">
                What’s included
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-meridian-accent via-[#ffb84d] to-[#ffd27a] p-7 shadow-[0_20px_50px_rgb(255_166_43_/_0.28)] sm:p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-white/25 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-meridian-deep/15 blur-3xl"
              />

              <div className="relative">
                <p className="font-display text-[4.5rem] font-bold leading-none tracking-tight text-white sm:text-[5.5rem]">
                  £50
                </p>
                <p className="mt-2 text-sm font-medium tracking-tight text-white/90 sm:text-base">
                  / month after your first three
                </p>

                <ul className="mt-10 space-y-0 border-t border-white/35">
                  {cardRows.map((row) => (
                    <li
                      key={row.label}
                      className="border-b border-white/35 py-4 last:border-b-0"
                    >
                      <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-white/80 uppercase">
                        {row.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                        {row.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-meridian-surface px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[72rem]">
          <Reveal className="mx-auto max-w-[36rem] text-center">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              What’s covered
            </h2>
            <p className="mt-3 text-base leading-relaxed text-meridian-muted">
              Stripe processing fees apply separately. Everything else below is in the founding
              offer.
            </p>
          </Reveal>

          <ul className="mx-auto mt-12 grid max-w-[52rem] gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
            {included.map((item, index) => (
              <Reveal key={item} delayMs={index * 40} as="li">
                <div className="flex gap-3 text-sm leading-relaxed text-meridian-muted md:text-base">
                  <Check
                    size={18}
                    weight="bold"
                    className="mt-1 shrink-0 text-meridian-mid"
                    aria-hidden
                  />
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
