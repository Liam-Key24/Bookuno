'use client'

import { useState } from 'react'
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
}

export function Faq({
  items = includedFaqs,
  title = 'FAQ, without the jargon.',
  lede = 'Straight answers about what’s under the roof.',
  id = 'faq',
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id={id} className="bg-white">
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">{lede}</p>
      </div>

      {/* Short lists keep a min-height so the section doesn’t jump when an answer opens */}
      <div
        className={[
          'mx-auto mt-12 max-w-[44rem] sm:mt-14',
          items.length <= 6 ? 'min-h-[28rem] sm:min-h-[30rem]' : '',
        ].join(' ')}
      >
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${id}-panel-${index}`
          const buttonId = `${id}-button-${index}`

          return (
            <div key={item.question} className="border-t border-meridian-ink/10 last:border-b last:border-meridian-ink/10">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
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
                  <p className="max-w-[40rem] pb-5 text-sm leading-relaxed text-meridian-muted md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
