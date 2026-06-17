import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BentoWatermark } from './BentoWatermark'
import { PrimaryButton } from './Button'
import { fadeUp } from '../motion'

export function HomeFinalCtaSection() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden border-t border-champagne-200/70 bg-gradient-to-b from-white to-champagne-100/95 py-20 md:py-24 lg:py-28">
      <BentoWatermark
        ids={[4, 2, 1, 3]}
        className="-left-12 bottom-10 rotate-[-9deg] opacity-[0.09]"
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-ink md:text-5xl md:leading-[1.18]">
            Run the day.{' '}
            <span className="inline-block bg-gradient-to-r from-cherry via-mango to-rose bg-clip-text pb-[0.2em] italic text-transparent">
              We run the site.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-base text-ink-muted md:text-lg">
            Free call — Launch vs Suite, what&apos;s included, handover options.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton className="px-10 py-4 text-base" onClick={() => navigate('/#pricing')}>
              Get started
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
