import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { BentoWatermark } from './BentoWatermark'
import { FaqItem } from './FaqItem'

const FAQS = [
  {
    q: 'Do I build it myself?',
    a: 'No — we design and build. Plans include hosting and maintenance. Full ownership handover is a separate one-time quote if you want it later.',
  },
  {
    q: 'Enterprise booking or PMS software?',
    a: 'No — it’s a lean booking management layer plus your site (salons, dining, spas). If you need hospital-grade scheduling or deep POS integration, we’ll say if we’re not the fit.',
  },
  {
    q: 'Subscription vs handover?',
    a: 'Launch (£65/mo) and Suite (£149/mo) cover hosting, maintenance, and in-scope changes. Full transfer/migration/handover is quoted separately.',
  },
  {
    q: 'Changes after launch?',
    a: 'Yes — request edits and we queue them per your plan.',
  },
  {
    q: 'Already have a site?',
    a: 'We can migrate or rebuild — we’ll scope it on a call.',
  },
] as const

export function HomeFaqSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden border-t border-champagne-200/70 bg-champagne-50/50 py-18 md:py-22 lg:py-24"
    >
      <BentoWatermark
        ids={[1, 3, 4, 0]}
        className="-right-16 top-12 rotate-[11deg] opacity-[0.08]"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div className="text-center" {...fadeUp}>
          <h2 className="font-display text-3xl font-bold leading-[1.25] tracking-[-0.02em] md:text-[2.35rem]">
            <span className="text-ink">Questions, </span>
            <span className="inline-block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text pb-[0.2em] italic text-transparent">
              answered plainly.
            </span>
          </h2>
          <p className="mt-2 font-sans text-sm text-ink-muted">Tap to open.</p>
        </motion.div>
        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f) => (
            <FaqItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
