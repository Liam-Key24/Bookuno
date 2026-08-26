'use client'

import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { Section } from '@/components/sections/Section'

const faqs = [
  {
    question: 'What is Merevo?',
    answer:
      'A managed website, booking, payments and customer-growth platform for independent service businesses—set up and looked after for you.',
  },
  {
    question: 'What is included?',
    answer:
      'Personalised website, online booking, Stripe payments, customer marketing, hosting and storage, maintenance, support, setup help, and one standard domain for year one.',
  },
  {
    question: 'How does the £150 work?',
    answer:
      'It covers your first three months at the founding rate, including setup and launch. Then £50 a month. There is no separate setup fee.',
  },
  {
    question: 'Is my website custom-built?',
    answer:
      'No—you pick a Merevo template and we personalise it. That keeps setup quick, dependable and affordable.',
  },
  {
    question: 'How do bookings work?',
    answer: 'Customers book through your own Merevo website—not a marketplace profile.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" className="bg-white">
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          FAQ, without the jargon.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Straight answers to the questions we hear most.
        </p>
      </div>

      {/* min-height holds space for five rows + one answer so the section doesn’t jump */}
      <div className="mx-auto mt-12 min-h-[28rem] max-w-[44rem] sm:mt-14 sm:min-h-[30rem]">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`

          return (
            <div key={item.question} className="border-t border-meridian-ink/10">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
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
