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

const coveredGroups = [
  {
    title: 'Your online home',
    items: [
      'Personalised Merevo template website',
      'Services, menus, prices and agreed business information added',
      'Online booking or enquiry setup on your own site',
    ],
  },
  {
    title: 'Kept running',
    items: [
      'Hosting, SSL, security and maintenance updates',
      'Reasonable updates to existing pages',
      'Technical support, plus setup and launch help',
    ],
  },
  {
    title: 'Launch & growth',
    items: [
      'One standard domain for year one (up to £25 allowance)—registered in your business name',
      'Customer and email marketing, managed for you',
      'Stripe connection when you’re ready (fees separate)',
    ],
  },
] as const

const extras = [
  {
    title: 'Domains',
    points: [
      'Registered in your business name; Merevo manages registrar, DNS and renewals while you’re subscribed',
      'Already own one? You keep ownership—we only handle the technical bits',
      'One standard domain allowance included; premium, extras and renewals outside that need approval',
      'Leave after the minimum term and we hand over access or transfer within five working days',
    ],
  },
  {
    title: 'Additional pages',
    points: [
      'Extra standard template pages are £20 each, one-off',
      'Needs the existing template, your final copy and images, and no new functionality',
      'One normal revision included',
      'Custom layouts, integrations or advanced booking work need a separate quote',
    ],
  },
  {
    title: 'External services',
    points: [
      'Fresha, Treatwell, OpenTable, Calendly and similar charge their own fees',
      'Stripe and other payment providers charge their own transaction fees',
      'Those sit outside your Merevo subscription',
    ],
  },
  {
    title: 'Normal usage',
    points: [
      'Normal website, booking, customer-record and image use is included',
      'Large video, unusual storage or heavy traffic may need a separate arrangement',
      'We’ll explain first and only charge with your approval',
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
              <Button href="#breakdown" variant="soft">
                See breakdown
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

      <section
        id="breakdown"
        className="w-full scroll-mt-24 bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[72rem]">
          <Reveal className="mx-auto max-w-[36rem] text-center">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              What’s covered
            </h2>
            <p className="mt-3 text-base leading-relaxed text-meridian-muted">
              In the founding offer. Stripe fees and other third-party charges sit separately.
            </p>
          </Reveal>

          <ul className="mx-auto mt-12 grid max-w-[64rem] gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
            {coveredGroups.map((group, index) => (
              <Reveal key={group.title} delayMs={index * 70} as="li">
                <article className="flex h-full flex-col rounded-[1.25rem] bg-meridian-surface p-6 shadow-[0_10px_28px_rgb(22_105_122_/_0.1)] md:p-8">
                  <p className="font-display text-4xl font-bold tracking-tight text-meridian-soft/90 md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-1 flex-col gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-meridian-muted md:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-meridian-surface px-4 py-24 sm:px-6 md:px-8 md:py-32 lg:px-10 lg:py-36">
        <div className="mx-auto w-full max-w-[90rem]">
          <Reveal className="mx-auto max-w-[40rem] text-center">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              Clear extras, agreed before anything starts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-meridian-muted">
              Simple rules for domains, extra pages and third-party fees—so nothing feels hidden.
            </p>
          </Reveal>

          <div className="mt-16 grid w-full grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10 lg:gap-y-0">
            <div className="flex flex-col gap-8 lg:gap-10">
              {extras.slice(0, 2).map((block, index) => (
                <Reveal key={block.title} delayMs={index * 50}>
                  <article className="rounded-[1.25rem] bg-white p-7 shadow-[0_10px_28px_rgb(22_105_122_/_0.1)] md:p-8 lg:p-9">
                    <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                      {block.title}
                    </h3>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {block.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-meridian-muted md:text-base"
                        >
                          <span aria-hidden className="shrink-0 text-meridian-mid">
                            *
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              {extras.slice(2).map((block, index) => (
                <Reveal key={block.title} delayMs={(index + 2) * 50}>
                  <article className="rounded-[1.25rem] bg-white p-7 shadow-[0_10px_28px_rgb(22_105_122_/_0.1)] md:p-8 lg:p-9">
                    <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                      {block.title}
                    </h3>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {block.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-meridian-muted md:text-base"
                        >
                          <span aria-hidden className="shrink-0 text-meridian-mid">
                            *
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}

              <Reveal delayMs={200}>
                <aside className="rounded-[1.25rem] bg-meridian-deep px-7 py-7 text-white shadow-[0_10px_28px_rgb(22_105_122_/_0.18)] md:px-8 md:py-8 lg:px-9 lg:py-9">
                  <p className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    No surprise extras.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                    If something falls outside the agreed offer, we explain it and ask first.
                  </p>
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
