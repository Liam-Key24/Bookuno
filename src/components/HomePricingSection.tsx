import { SealCheck } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from './Button'
import { BentoWatermark } from './BentoWatermark'
import { SUBSCRIPTION_TIERS } from '../data/pricingTiers'
import { fadeUp, springSnappy, springSoft } from '../motion'

export function HomePricingSection() {
  const navigate = useNavigate()

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden border-t border-champagne-200/70 bg-white/70 py-20 md:py-24 lg:py-28"
      aria-labelledby="pricing-heading"
    >
      <BentoWatermark
        ids={[4, 1, 3, 2]}
        className="-left-10 top-20 rotate-[-8deg] opacity-[0.07]"
      />
      <BentoWatermark
        ids={[0, 2, 4, 1]}
        className="-right-12 bottom-20 rotate-[9deg] opacity-[0.08]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="pricing-heading"
            className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.35rem]"
          >
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-muted md:text-[17px]">
            No hidden fees, no surprises — just clear, straightforward plans for your business.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {SUBSCRIPTION_TIERS.map((tier, ti) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springSnappy, delay: ti * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-8 text-center transition-transform duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10 ${
                tier.highlight
                  ? 'border-mango/40 bg-gradient-to-b from-white to-petal/25 shadow-xl shadow-cherry/15 ring-1 ring-rose/30'
                  : 'border-champagne-200/80 bg-white/95 shadow-card'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-gradient-to-r from-cherry via-tangerine to-rose px-4 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                  Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 font-sans text-sm font-medium text-tangerine">{tier.blurb}</p>
              <p className="mt-8 font-display text-4xl font-semibold tracking-[-0.03em] text-ink">
                {tier.price}
                <span className="font-sans text-lg font-medium text-ink-muted">/mo</span>
              </p>
              <p className="mt-2 font-sans text-xs font-medium text-ink-muted">
                We run hosting &amp; in-scope fixes — you run the day.
              </p>
              <ul className="mt-4 flex-1 space-y-2.5 text-left font-sans text-sm text-ink-muted">
                {tier.items.map((li) => (
                  <li key={li} className="flex gap-2">
                    <span className="text-mango">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-champagne-200/80 bg-champagne-50/80 px-4 py-3">
                <p className="font-sans text-sm font-medium leading-snug text-ink">
                  {tier.outcome}
                </p>
              </div>
              <PrimaryButton
                className="mt-10 w-full"
                onClick={() => navigate(`/contact/${tier.id}`)}
              >
                Talk {tier.name}
              </PrimaryButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-champagne-200/90 bg-white p-6 text-center shadow-md ring-1 ring-champagne-100 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springSoft}
        >
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-petal/80 to-champagne-100/90 ring-1 ring-mango/20">
            <SealCheck className="size-7 text-tangerine" weight="duotone" aria-hidden />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-ink md:text-xl">
            Want the keys?
            <span className="mt-1 block font-sans text-xs font-normal text-ink-muted">
              One-time quote · not part of £65 / £149
            </span>
          </h3>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm text-ink-muted">
            Subs keep us in your corner. Full export or migration? We quote it clean — no surprise
            line items.{' '}
            <Link
              to="/packages#ownership"
              className="font-semibold text-tangerine underline decoration-tangerine/35 underline-offset-2"
            >
              Ownership details
            </Link>
          </p>
          <ul className="mx-auto mt-4 max-w-md space-y-2 text-left font-sans text-sm text-ink-muted">
            <li className="flex gap-2">
              <span className="text-mango">✓</span>
              Monthly = we host &amp; ship agreed work.
            </li>
            <li className="flex gap-2">
              <span className="text-mango">✓</span>
              Handover = one-time, when you&apos;re ready.
            </li>
          </ul>
          <PrimaryButton
            type="button"
            className="mt-8 w-full max-w-sm"
            onClick={() => navigate('/contact/custom')}
          >
            Want the keys — enquire
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  )
}
