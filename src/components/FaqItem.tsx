import { Plus } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-champagne-200/80 bg-white/95 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-base font-semibold text-ink transition-colors hover:bg-champagne-50/80"
      >
        <span>{question}</span>
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-petal/50 text-tangerine transition-transform duration-200 ease-out motion-reduce:transition-none ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus className="size-5" weight="bold" aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: easeOut }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-champagne-200/60 px-6 pb-6">
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted sm:mt-5">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
