import { motion, useReducedMotion } from 'framer-motion'
import { PainBentoVisual } from './PainBentoVisuals'
import { springSoft } from '../motion'

const ITEMS: {
  tag: string
  text: string
  visual: number
}[] = [
  {
    tag: 'Invisible online',
    text: 'You already have a website, but it doesn’t bring in consistent enquiries.',
    visual: 0,
  },
  {
    tag: 'No time to tinker',
    text: 'You don’t have time to manage updates, fixes, or technical issues.',
    visual: 1,
  },
  {
    tag: 'Leads slip',
    text: 'Leads come in from different places and get lost or forgotten.',
    visual: 2,
  },
  {
    tag: 'Cost, not asset',
    text: 'Your website feels like a cost, not something that grows your business.',
    visual: 3,
  },
  {
    tag: 'Word of mouth only',
    text: 'You rely mostly on word-of-mouth instead of steady online enquiries.',
    visual: 4,
  },
]

const GRID_SPANS = [
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
]

export function WhoPainPoints() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="who"
      className="relative scroll-mt-24 border-y border-champagne-200/80 bg-champagne-50/40 py-18 md:py-24 lg:py-28"
      aria-labelledby="who-heading"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="who-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]"
          >
            Sound familiar?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]">
            Front-of-house reality — before we talk about what we build.
          </p>
        </div>

        <ul
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:mt-14 md:grid-cols-6 md:gap-5"
          aria-label="Common situations we help with"
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.tag}
              className={`flex min-h-[22rem] flex-col sm:min-h-[26rem] md:min-h-[28rem] ${GRID_SPANS[i]}`}
            >
              <motion.div
                className="group flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border border-champagne-200/90 bg-white shadow-sm ring-1 ring-champagne-100/80 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-12% 0px' }}
                transition={{
                  ...springSoft,
                  delay: reduceMotion ? 0 : i * 0.06,
                }}
              >
                <div
                  className="relative min-h-0 w-full flex-1 overflow-hidden rounded-t-2xl bg-champagne-100/80"
                  aria-hidden
                >
                  <div className="flex h-full min-h-[14rem] w-full sm:min-h-[16rem] md:min-h-[18rem]">
                    <PainBentoVisual id={item.visual} />
                  </div>
                </div>

                <div className="shrink-0 border-t border-champagne-100 px-6 pb-8 pt-7 md:px-8 md:pt-8">
                  <p className="font-display text-2xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink md:text-[1.9rem] md:leading-[1.1] lg:text-[2.05rem]">
                    {item.tag}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
