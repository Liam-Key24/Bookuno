import { ChatsCircle, Check, X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { GhostButton, PrimaryButton } from '../components/Button'
import { DarkPageHero } from '../components/DarkPageHero'
import { PackagesTierShowcase } from '../components/PackagesTierShowcase'
import { springSoft } from '../motion'

const TIER_COLUMNS = [
  {
    id: 'launch',
    name: 'Launch',
    price: '£65/mo',
    cadence: 'Monthly',
    buttonLabel: 'Choose Launch',
    buttonPath: '/contact/launch',
  },
  {
    id: 'suite',
    name: 'Suite',
    price: '£149/mo',
    cadence: 'Monthly',
    buttonLabel: 'Choose Suite',
    buttonPath: '/contact/suite',
  },
  {
    id: 'handover',
    name: 'Handover',
    price: 'Custom quote',
    cadence: 'One-time',
    buttonLabel: 'Ask about handover',
    buttonPath: '/contact/custom',
  },
] as const

const FEATURE_ROWS = [
  { label: 'Monthly subscription', values: ['yes', 'yes', 'no'] },
  { label: 'One-time handover quote', values: ['no', 'no', 'yes'] },
  { label: '1-3 page website scope', values: ['yes', 'no', 'no'] },
  { label: '5-8 page website scope', values: ['no', 'yes', 'no'] },
  { label: 'Hosting and SSL managed by us', values: ['yes', 'yes', 'no'] },
  { label: 'Booking enquiry list', values: ['yes', 'no', 'no'] },
  { label: 'Full booking hub with stages', values: ['no', 'yes', 'no'] },
  { label: 'Priority turnaround', values: ['no', 'yes', 'no'] },
  { label: 'Team training included', values: ['no', 'yes', 'no'] },
  { label: 'Export and migration support', values: ['no', 'no', 'yes'] },
] as const

function FeatureCell({ value }: { value: string }) {
  if (value === 'yes') {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200/80">
        <Check className="size-4" weight="bold" aria-hidden />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === 'no') {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-rose-50 px-2 py-1 text-rose-600 ring-1 ring-rose-200/80">
        <X className="size-4" weight="bold" aria-hidden />
        <span className="sr-only">Not included</span>
      </span>
    )
  }
  return null
}

export function PackagesPage() {
  const navigate = useNavigate()

  return (
    <>
      <DarkPageHero
        number="01"
        titleTop="What you get"
        titleBottom={<>&amp; what you own</>}
        description="Same system. Scaled by site size, booking depth, and priority."
        caption="Same criteria · every tier below"
      />

      <PackagesTierShowcase />

      <section
        className="border-y border-champagne-200/60 bg-gradient-to-b from-white/90 to-champagne-50/40 py-20 md:py-28"
        id="choose-tier"
        aria-labelledby="choose-tier-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSoft}
          >
            <h2
              id="choose-tier-heading"
              className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]"
            >
              Not sure which tier?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-[1.8] text-ink-muted md:text-[15px]">
              Quick compare: Launch and Suite are monthly subscriptions. Handover is separate and
              only needed if you want to move away later.
            </p>
          </motion.div>

          <div className="mt-14 md:mt-18">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[47.5rem] border-collapse bg-white">
                <thead>
                  <tr className="border-b border-champagne-200/90">
                    <th className="w-[34%] px-4 py-6 text-left md:px-6" aria-label="Feature list" />
                    {TIER_COLUMNS.map((tier) => (
                      <th key={tier.id} className="w-[22%] px-3 py-6 text-center md:px-4">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="font-display text-[1.55rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.8rem]">
                            {tier.name}
                          </span>
                          <span className="font-sans text-sm font-medium text-ink">
                            {tier.price}
                          </span>
                          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted/80">
                            {tier.cadence}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_ROWS.map((row, rowIndex) => (
                    <tr
                      key={row.label}
                      className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-champagne-50/20'}
                    >
                      <th className="border-b border-champagne-100/85 px-4 py-6 text-left font-sans text-sm font-medium text-ink md:px-6 md:py-[1.625rem] md:text-[15px]">
                        {row.label}
                      </th>
                      {row.values.map((value, valueIndex) => (
                        <td
                          key={`${row.label}-${valueIndex}`}
                          className="border-b border-champagne-100/85 px-3 py-6 text-center md:px-4 md:py-[1.625rem]"
                        >
                          <FeatureCell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 border-t border-champagne-200/90 bg-white px-4 py-5 sm:grid-cols-3 md:px-6">
              {TIER_COLUMNS.map((tier) => (
                <GhostButton
                  key={tier.id}
                  type="button"
                  className="w-full justify-center border-champagne-200/90 px-4 py-2.5 text-sm shadow-none"
                  onClick={() => navigate(tier.buttonPath)}
                >
                  {tier.buttonLabel}
                </GhostButton>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-24 rounded-3xl border border-champagne-200/90 bg-white/95 px-6 py-8 text-center shadow-md ring-1 ring-champagne-100/70 md:mt-32 md:px-10 md:py-11"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springSoft, delay: 0.06 }}
          >
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-petal/80 to-champagne-100/90 ring-1 ring-mango/20">
              <ChatsCircle className="size-7 text-tangerine" weight="duotone" aria-hidden />
            </div>
            <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]">
              Still unsure after reading the above? Send a short note or book through the FAQ —
              we’ll match you to Launch or Suite on facts (volume, team size, how you take
              bookings), not upsell pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton
                type="button"
                className="px-8"
                onClick={() => navigate('/contact/launch')}
              >
                Get in touch
              </PrimaryButton>
              <GhostButton type="button" className="px-8" onClick={() => navigate('/#pricing')}>
                View prices on home
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-champagne-200/70 bg-champagne-50/50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSoft}
          >
            <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
              Same home page, live prices
            </h2>
            <p className="mt-3 font-sans text-sm text-ink-muted md:text-base">
              The pricing cards on the homepage mirror these tiers —{' '}
              <Link
                to="/#pricing"
                className="font-semibold text-tangerine underline decoration-tangerine/35 underline-offset-2"
              >
                open Plans
              </Link>{' '}
              to book or compare side-by-side.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryButton type="button" className="px-8" onClick={() => navigate('/#pricing')}>
                Go to Plans
              </PrimaryButton>
              <GhostButton
                type="button"
                className="px-8"
                onClick={() => navigate('/contact/launch')}
              >
                Book a call
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
