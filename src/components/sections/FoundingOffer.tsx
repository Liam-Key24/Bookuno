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
] as const

const included = [
  'Personalised Merevo template website',
  'Services, menus, prices and agreed business information added for you',
  'Online booking or enquiry setup on your own site',
  'Hosting, SSL, security and maintenance updates',
  'Reasonable updates to existing pages',
  'Technical support, plus setup and launch help',
  'One standard domain for the first year (up to £25 allowance)',
  'Customer and email marketing, managed for you',
  'Stripe connection when you’re ready to take card payments (Stripe fees separate)',
] as const

const extras = [
  {
    title: 'Domains',
    points: [
      'One standard domain is included for the first year, up to £25.',
      'If the chosen domain costs more, you pay the difference before purchase.',
      'Premium domains, additional domains, transfers, privacy add-ons and renewals after year one are separate.',
      'You own the domain. Where possible, we register it in your name or account.',
    ],
  },
  {
    title: 'Additional pages',
    points: [
      'Additional standard template pages cost £20 per page as a one-off fee.',
      'That rate applies when the existing template is used, you supply final copy and images, no new functionality is required, and one normal revision is included.',
      'Custom layouts, new components, integrations, copywriting and advanced booking work need a separate quote.',
    ],
  },
  {
    title: 'External services',
    points: [
      'Fresha, Treatwell, OpenTable, Calendly and other third-party booking tools charge their own fees.',
      'Stripe and other payment providers charge their own transaction fees.',
      'Those charges sit outside your Merevo subscription.',
    ],
  },
  {
    title: 'Normal usage',
    points: [
      'Normal website, booking, customer-record and image usage is included.',
      'Large video files, unusually high storage, excessive traffic or exceptional third-party usage may need a separate arrangement.',
      'If that happens, we explain the issue and obtain your approval before charging anything extra.',
    ],
  },
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
              Built for busy service businesses who want a proper online home—without stacking
              tools, plugins or another Sunday night of DIY.
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
            <div className="relative flex min-h-0 flex-col overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-meridian-accent via-[#ffb84d] to-[#ffd27a] p-7 shadow-[0_20px_50px_rgb(255_166_43_/_0.28)] sm:p-8 md:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-white/25 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-meridian-deep/15 blur-3xl"
              />

              <div className="relative flex flex-col">
                <p className="font-display text-[5.5rem] font-bold leading-none tracking-tight text-white sm:text-[6.5rem] md:text-[7rem]">
                  £50
                </p>
                <p className="mt-2 text-base font-medium tracking-tight text-white/90 sm:text-lg">
                  / month after your first three
                </p>

                <ul className="mt-8 space-y-0 border-t border-white/35 sm:mt-10">
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
              Everything below is in the founding offer. Stripe processing fees and other
              third-party charges sit separately.
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

      <section className="w-full bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[72rem]">
          <Reveal className="mx-auto max-w-[40rem] text-center">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              Clear extras, agreed before anything starts
            </h2>
            <p className="mt-3 text-base leading-relaxed text-meridian-muted">
              Simple rules for domains, extra pages and third-party fees—so nothing feels hidden.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[56rem] gap-4 sm:mt-14 sm:grid-cols-2">
            {extras.map((block, index) => (
              <Reveal key={block.title} delayMs={index * 50}>
                <article className="h-full rounded-[20px] bg-meridian-surface px-5 py-6 sm:px-6 sm:py-7">
                  <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                    {block.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-meridian-muted md:text-[0.95rem]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={120} className="mx-auto mt-10 max-w-[36rem] sm:mt-12">
            <aside className="rounded-[20px] border border-meridian-mid/25 bg-meridian-soft/40 px-5 py-5 text-center sm:px-8 sm:py-6">
              <p className="font-display text-lg font-bold tracking-tight text-meridian-ink">
                No surprise extras.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                If something falls outside the agreed offer, we explain it and ask first.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
