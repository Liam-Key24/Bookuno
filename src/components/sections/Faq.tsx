'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { Section } from '@/components/sections/Section'

export type FaqItem = {
  question: string
  answer: string
}

/** Default set for What’s included — product, not pricing. */
export const includedFaqs: FaqItem[] = [
  {
    question: 'Is my website custom-built?',
    answer:
      'No—you pick a Merevo template and we personalise it with your brand, services and content. That keeps setup quick, dependable and affordable.',
  },
  {
    question: 'How do bookings work?',
    answer:
      'Customers book through your own Merevo website and domain—not a marketplace profile. Requests stay with your business.',
  },
  {
    question: 'How do Stripe payments work?',
    answer:
      'We help connect Stripe so you can take deposits or full payments on your site. Stripe processing fees apply separately from your Merevo subscription.',
  },
  {
    question: 'What’s included in customer marketing?',
    answer:
      'Friendly follow-ups to keep in touch and encourage customers back—without you learning email software or running campaigns yourself.',
  },
  {
    question: 'Do you manage hosting and support?',
    answer:
      'Yes. Hosting, storage, maintenance, updates and Merevo technical support for your managed site are included—not unlimited custom development.',
  },
]

type FaqProps = {
  items?: FaqItem[]
  title?: string
  lede?: string
  id?: string
  className?: string
}

export function Faq({
  items = includedFaqs,
  title = 'FAQ, without the jargon.',
  lede = 'Straight answers about what’s under the roof.',
  id = 'faq',
  className = 'bg-white',
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const [listMinHeight, setListMinHeight] = useState<number>()

  useLayoutEffect(() => {
    const root = listRef.current
    if (!root) return

    const measure = () => {
      const rows = root.querySelectorAll<HTMLElement>('[data-faq-row]')
      let buttonsHeight = 0
      let maxAnswerHeight = 0

      rows.forEach((row) => {
        const button = row.querySelector<HTMLElement>('[data-faq-button]')
        const answer = row.querySelector<HTMLElement>('[data-faq-answer]')
        if (button) buttonsHeight += button.getBoundingClientRect().height
        if (answer) maxAnswerHeight = Math.max(maxAnswerHeight, answer.scrollHeight)
      })

      // Borders between rows (top on each + bottom on last)
      const borders = rows.length + 1
      setListMinHeight(Math.ceil(buttonsHeight + maxAnswerHeight + borders))
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(root)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [items])

  return (
    <Section id={id} className={className}>
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">{lede}</p>
      </div>

      {/* Fixed min-height = all questions + tallest answer, so the section below doesn’t jump */}
      <div
        ref={listRef}
        className="mx-auto mt-12 max-w-[44rem] sm:mt-14"
        style={listMinHeight ? { minHeight: listMinHeight } : undefined}
      >
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${id}-panel-${index}`
          const buttonId = `${id}-button-${index}`

          return (
            <div
              key={item.question}
              data-faq-row
              className="border-t border-meridian-ink/10 last:border-b last:border-meridian-ink/10"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  data-faq-button
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-meridian-mid/40 focus-visible:ring-offset-2"
                >
                  <span className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                    {item.question}
                  </span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={[
                      'shrink-0 text-meridian-mid transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={[
                  'grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <div
                    data-faq-answer
                    className="max-w-[40rem] space-y-3 pb-5 text-sm leading-relaxed text-meridian-muted md:text-base"
                  >
                    {item.answer.split('\n\n').map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
