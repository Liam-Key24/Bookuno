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
    question: 'Is my website custom-built?',
    answer:
      'No—you pick a Merevo template and we personalise it. That keeps setup quick, dependable and affordable.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Info, logo, colours, images, services and prices, hours, contact details, domain preferences, and Stripe connection info.',
  },
  {
    question: 'How does the £150 work?',
    answer:
      'It covers your first three months at the founding rate, including setup and launch. Then £50 a month.',
  },
  {
    question: 'Is there a separate setup fee?',
    answer: 'No. The £150 pays for the first three months upfront. Setup and launch are included.',
  },
  {
    question: 'Is a domain included?',
    answer: 'Yes—one standard domain, preferably a .co.uk, for the first year.',
  },
  {
    question: 'Can I use a domain I already own?',
    answer: 'Often yes. Tell us what you have and we’ll help with the options.',
  },
  {
    question: 'How do bookings work?',
    answer: 'Customers book through your own Merevo website—not a marketplace profile.',
  },
  {
    question: 'How do Stripe payments work?',
    answer:
      'We help connect Stripe so you can take deposits or full payments. Stripe processing fees apply separately.',
  },
  {
    question: 'Are Stripe fees included?',
    answer: 'No. They are not covered by your Merevo subscription.',
  },
  {
    question: 'Can you add my menu or PDF?',
    answer: 'Yes. Send services, menus, prices or a PDF and we’ll add them during setup.',
  },
  {
    question: 'Do you manage hosting and maintenance?',
    answer: 'Yes. Hosting, storage, maintenance and updates are included.',
  },
  {
    question: 'What support is included?',
    answer:
      'Merevo technical support for the platform and your managed site—not unlimited custom development.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Setup is designed to be quick once you’ve sent your details. Timelines depend on those details plus domain and Stripe steps.',
  },
] as const

export function Faq() {
  return (
    <Section id="faq" className="bg-meridian-surface">
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          FAQ, without the jargon.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Straight answers to the questions we hear most.
        </p>
      </div>

      <dl className="mx-auto mt-12 max-w-[44rem] space-y-8 sm:mt-14">
        {faqs.map((item) => (
          <div key={item.question}>
            <dt className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
              {item.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
