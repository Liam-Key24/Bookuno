import { motion, useReducedMotion } from 'framer-motion'
import { springSoft } from '../motion'
import {
  OfferMockupBookings,
  OfferMockupLaunch,
  OfferMockupWebsite,
} from './WhatWeOfferMockups'

const easeOut = [0.22, 1, 0.36, 1] as const

const MOCKUPS = [OfferMockupWebsite, OfferMockupBookings, OfferMockupLaunch] as const

const BLOCKS: { title: string; text: string; accent: string }[] = [
  {
    title: 'Fully managed web presence',
    text: 'We create fully managed websites and booking management for small businesses — one stack, not a pile of tools.',
    accent: 'from-mango/90 to-tangerine',
  },
  {
    title: 'Bookings & enquiries in one place',
    text: 'Each setup includes a custom-built website and booking management so enquiries and appointments stay in one thread — built for front-of-house teams, not sales floors.',
    accent: 'from-cherry/80 to-rose',
  },
  {
    title: 'Configured, ready to run',
    text: 'Everything is designed, built, and configured for you, ready to use immediately.',
    accent: 'from-sun to-mango',
  },
]

export function WhatWeOfferSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="what-we-offer"
      className="relative scroll-mt-24 overflow-hidden border-y border-champagne-200/70 bg-gradient-to-b from-champagne-50/90 via-white to-petal/15 py-18 md:py-24 lg:py-28"
      aria-labelledby="what-we-offer-heading"
      aria-describedby="what-we-offer-caption"
    >
      <div
        className="pointer-events-none absolute -left-40 top-1/4 size-[380px] rounded-full bg-gradient-to-br from-mango/25 via-rose/15 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-gradient-to-tl from-sun/20 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(251_146_60/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(251_146_60/0.06)_1px,transparent_1px)] bg-[length:48px_48px] opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,black,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
        <motion.div
          className="mx-auto w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2
            id="what-we-offer-heading"
            className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-[2.35rem]"
          >
            What we offer
          </h2>
          <p
            id="what-we-offer-caption"
            className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]"
          >
            Site, bookings, and care — designed and run for you, not handed off as a DIY kit.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 items-start gap-y-14 md:gap-y-16 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0 xl:gap-x-14 2xl:gap-x-[4.5rem]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
        >
          {BLOCKS.map((block, i) => {
            const Mockup = MOCKUPS[i]
            return (
              <motion.article
                key={block.title}
                variants={{
                  hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: springSoft },
                }}
                className="group relative flex w-full max-w-md flex-col self-center overflow-hidden rounded-3xl border border-champagne-200/80 bg-white/90 p-6 shadow-lg shadow-champagne-200/35 ring-1 ring-white/90 transition-transform duration-300 ease-out hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:max-w-none sm:p-7"
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br ${block.accent} opacity-[0.14] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.22]`}
                  aria-hidden
                />

                <div className="relative flex flex-col text-center">
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.35rem] md:text-2xl">
                    {block.title}
                  </h3>

                  <div className="relative mx-auto mt-6 w-full max-w-[280px] shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-w-[300px]">
                    <Mockup />
                  </div>

                  <div className="mt-8 border-t border-champagne-200/70 pt-6">
                    <p className="mx-auto max-w-prose font-sans text-[15px] leading-relaxed text-ink-muted md:text-base md:leading-[1.75]">
                      {block.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
