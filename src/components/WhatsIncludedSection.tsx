import { Handshake, Headset, SealCheck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Icon } from '@phosphor-icons/react'
import { springSoft } from '../motion'

const PILLARS: {
  Icon: Icon
  title: string
  desc: string
  blob: string
}[] = [
  {
    Icon: SealCheck,
    title: 'End-to-end delivery',
    desc: 'We own the build — not a DIY kit with your name on it.',
    blob: 'from-mango/80 to-tangerine',
  },
  {
    Icon: Headset,
    title: 'Support that knows you',
    desc: 'People who shipped it — plain English, no ticket roulette.',
    blob: 'from-cherry/70 to-mango',
  },
  {
    Icon: Handshake,
    title: 'Partnership mindset',
    desc: 'Clear handover, no lock-in games — we earn the relationship.',
    blob: 'from-rose/70 to-blush',
  },
]

export function WhatsIncludedSection() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      role="region"
      id="whats-included"
      className="scroll-mt-24 py-10 md:py-16"
      aria-labelledby="whats-included-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <h2 id="whats-included-heading" className="sr-only">
          What you get when you work with us
        </h2>

        <motion.ul
          className="relative mx-auto flex w-full max-w-3xl flex-col gap-4 md:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12% 0px' }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09,
              },
            },
          }}
        >
          {PILLARS.map((item, i) => {
            const zigLeft = i % 2 === 0
            return (
              <motion.li
                key={item.title}
                variants={{
                  hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: springSoft,
                  },
                }}
                className={`group relative flex gap-4 overflow-hidden rounded-2xl border border-champagne-200/90 bg-white/95 p-4 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:gap-5 sm:p-5 md:max-w-[92%] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  zigLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}
              >
                <div
                  className={`pointer-events-none absolute size-24 rounded-full bg-gradient-to-br opacity-[0.14] blur-2xl ${
                    zigLeft ? '-left-8 -top-8' : '-right-8 -top-8'
                  } ${item.blob}`}
                  aria-hidden
                />
                <span className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-champagne-50 to-white shadow-sm ring-2 ring-tangerine/25 sm:size-14">
                  <item.Icon
                    className="size-7 text-tangerine sm:size-8"
                    weight="duotone"
                    aria-hidden
                  />
                </span>
                <div className="relative z-[1] min-w-0 flex-1 pt-0.5 text-left">
                  <p className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-ink-muted sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
