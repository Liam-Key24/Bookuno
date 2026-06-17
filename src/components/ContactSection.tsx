import { EnvelopeSimple, Phone } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { BentoWatermark } from './BentoWatermark'
import { GhostButton, PrimaryButton } from './Button'
import {
  formRow2Cls,
  inputContactCls,
  labelCls,
  textareaContactCls,
} from './lead-forms/fieldStyles'
import { springSoft } from '../motion'

const FAUX_PHONE_DISPLAY = '020 7946 0958'

export function ContactSection() {
  const reduceMotion = useReducedMotion()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section
      id="enquiries"
      className="relative scroll-mt-24 overflow-hidden border-t border-champagne-200/70 bg-white py-18 md:py-24 lg:py-28"
      aria-labelledby="enquiries-heading"
    >
      <BentoWatermark
        ids={[2, 0, 3, 1]}
        className="-left-14 top-24 rotate-[-10deg] opacity-[0.08]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-20">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={springSoft}
          >
            <h2
              id="enquiries-heading"
              className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]"
            >
              Send an enquiry — we&apos;ll answer
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
              No long forms here. Ask about plans, timing, or whether we&apos;re a fit — we read
              every message and reply by email.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-champagne-200/85 bg-white px-4 py-3.5 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-champagne-50/80 ring-1 ring-champagne-200/70">
                <EnvelopeSimple className="size-5 text-tangerine" weight="duotone" aria-hidden />
              </span>
              <p className="font-sans text-sm leading-snug text-ink-muted">
                Prefer the structured booking forms? Use{' '}
                <Link
                  to="/contact/launch"
                  className="font-semibold text-tangerine underline decoration-tangerine/35 underline-offset-2"
                >
                  Talk Launch
                </Link>{' '}
                or{' '}
                <Link
                  to="/contact/suite"
                  className="font-semibold text-tangerine underline decoration-tangerine/35 underline-offset-2"
                >
                  Talk Suite
                </Link>
                .
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-champagne-200/85 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-champagne-50/80 ring-1 ring-champagne-200/70">
                  <Phone className="size-6 text-tangerine" weight="duotone" aria-hidden />
                </span>
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Phone (placeholder)
                  </p>
                  <p className="font-display text-xl font-semibold tabular-nums tracking-tight text-ink">
                    {FAUX_PHONE_DISPLAY}
                  </p>
                </div>
              </div>
              <p className="mt-3 font-sans text-xs leading-snug text-ink-muted/90">
                Example number for this demo — we&apos;ll give you a real line before launch.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-champagne-200/90 bg-white p-7 shadow-card md:p-9"
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...springSoft, delay: reduceMotion ? 0 : 0.06 }}
          >
            {sent ? (
              <div className="py-6 text-center">
                <p className="font-sans text-sm text-ink-muted">
                  Thanks — we&apos;ve got your enquiry. We&apos;ll answer by email as soon as we
                  can.
                </p>
                <GhostButton type="button" className="mt-5" onClick={() => setSent(false)}>
                  Send another enquiry
                </GhostButton>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className={formRow2Cls}>
                  <div>
                    <label htmlFor="contact-name" className={labelCls}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      className={inputContactCls}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelCls}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={200}
                      className={inputContactCls}
                      placeholder="you@business.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelCls}>
                    Your enquiry
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    className={textareaContactCls}
                    placeholder="What you’d like to know — we’ll reply here."
                  />
                </div>
                <div className="flex justify-end border-t border-champagne-200/55 pt-5">
                  <PrimaryButton type="submit" className="w-full sm:w-auto">
                    Send
                  </PrimaryButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
