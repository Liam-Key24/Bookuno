import { ArrowSquareOut } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { DarkPageHero } from '../components/DarkPageHero'
import { REVIEWS } from '../data/reviews'
import { springSnappy } from '../motion'

const BEFORE_AFTER = [
  {
    before: 'Scattered enquiries across DMs, forms, and calls.',
    after: 'One clear booking flow with tracked follow-up.',
  },
  {
    before: 'Template site that looks fine but converts softly.',
    after: 'Brand-led pages designed to drive real bookings.',
  },
  {
    before: 'Slow updates and constant plugin/tool overhead.',
    after: 'Fast edits, managed stack, and ongoing care included.',
  },
] as const

export function WorkPage() {
  return (
    <>
      <DarkPageHero
        number="02"
        titleTop="Sites that earn,"
        titleBottom="not just sit there."
        description="The difference is what happens after someone lands on your site — whether revenue stays fuzzy or locks in as real bookings you can track."
        caption="Same story · every card below"
        titleMaxCh="20ch"
      />

      <section className="py-20 md:py-24 lg:py-28" aria-labelledby="work-grid-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-xl px-2 py-6 text-center md:py-10">
            <h2
              id="work-grid-heading"
              className="font-display text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.35rem]"
            >
              Before and after Bookluno
            </h2>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base">
              Clean snapshots from the same businesses featured in our reviews.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2">
            {REVIEWS.map((item, index) => {
              const ba = BEFORE_AFTER[index % BEFORE_AFTER.length]
              return (
                <motion.article
                  key={item.business}
                  className="overflow-hidden rounded-3xl border border-champagne-200/80 bg-white/95 text-left shadow-md shadow-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.07] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...springSnappy, delay: index * 0.04 }}
                >
                  <div className="border-b border-champagne-200/70 bg-linear-to-r from-petal/25 via-champagne-50 to-petal/20 px-5 py-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-xl font-semibold text-ink">
                          {item.business}
                        </p>
                        <p className="mt-1 font-sans text-xs text-ink-muted">
                          {item.sector} · {item.location}
                        </p>
                      </div>
                      {item.website ? (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-champagne-200/90 bg-white px-3 py-1.5 font-sans text-xs font-medium text-ink transition hover:border-mango/40 hover:text-tangerine"
                        >
                          Visit
                          <ArrowSquareOut className="size-3.5" weight="bold" aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-px bg-champagne-200/60 md:grid-cols-2">
                    <div className="bg-champagne-50/45 px-5 py-5">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        Before
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                        {ba.before}
                      </p>
                    </div>
                    <div className="bg-white px-5 py-5">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-tangerine">
                        After
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink">{ba.after}</p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
