import { Section } from '@/components/sections/Section'

const faqs = [
  {
    question: 'What is Merevo?',
    answer:
      'Merevo is a managed website, booking, payments and customer-growth platform for independent service businesses. Your website, bookings, payments and customer marketing are set up and managed for you.',
  },
  {
    question: 'What is included?',
    answer:
      'A personalised Merevo website, online booking, Stripe-powered payments, customer and email marketing, hosting and secure data storage, platform maintenance, Merevo technical support, setup and launch help, and one standard domain for the first year.',
  },
  {
    question: 'Is my website custom-built?',
    answer:
      'No—and that’s intentional. You choose a polished Merevo template and we personalise it with your branding, services and details. That keeps setup quick, dependable and affordable. It is not a bespoke web-design agency build.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Your business name and logo, brand colours, images, services/menu and prices, opening hours and availability, contact and social details, domain preferences, and the information needed to connect Stripe.',
  },
  {
    question: 'How does the initial £150 work?',
    answer:
      'You pay £150 upfront. That covers your first three months at the founding rate, including website setup and launch. After those three months, the subscription continues at £50 a month.',
  },
  {
    question: 'Is there a separate setup fee?',
    answer:
      'No. The £150 is not an additional setup fee—it pays for your first three months upfront, and setup and launch are included.',
  },
  {
    question: 'Is a domain included?',
    answer:
      'Yes. One standard domain—preferably a standard .co.uk—is included for the first year.',
  },
  {
    question: 'Can I use a domain I already own?',
    answer:
      'In many cases, yes. Tell us what you already have when you get in touch and we’ll help you understand the options for connecting it.',
  },
  {
    question: 'How do bookings work?',
    answer:
      'Customers book through your own Merevo website. Availability is set up from the details you provide, so bookings stay with your brand rather than a marketplace profile.',
  },
  {
    question: 'How do Stripe payments work?',
    answer:
      'Online payments are powered by Stripe. We help you connect Stripe so you can take deposits or full payments through your site.',
  },
  {
    question: 'Are Stripe fees included?',
    answer:
      'No. Online payments are powered by Stripe; Stripe processing fees apply separately and are not covered by your Merevo subscription.',
  },
  {
    question: 'Can Merevo add my existing menu, services or PDF?',
    answer:
      'Yes. Send us your services, menus, prices or existing PDF information and we’ll add them as part of setup.',
  },
  {
    question: 'Does Merevo manage hosting and maintenance?',
    answer:
      'Yes. Hosting, secure data storage, platform maintenance and updates are included, so you don’t have to manage the technical side yourself.',
  },
  {
    question: 'What technical support is included?',
    answer:
      'Merevo technical support is included for the platform and your managed website. It covers help with the service—not unlimited custom development, plugins or redesigns.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Setup is designed to be quick and to need very little work from you once you’ve sent your business details. Timelines depend on how quickly those details arrive and any domain or Stripe steps—get in touch and we’ll walk you through the next steps.',
  },
] as const

export function Faq() {
  return (
    <Section id="faq" className="bg-meridian-surface">
      <div className="max-w-[38rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">FAQ</p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Straight answers, without the jargon.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          A few common questions about Merevo, pricing and what you get.
        </p>
      </div>

      <dl className="mt-[2.5rem] space-y-[0.85rem]">
        {faqs.map((item) => (
          <div
            key={item.question}
            className="rounded-[20px] bg-white px-[1.35rem] py-[1.25rem] md:px-[1.5rem]"
          >
            <dt className="text-base font-semibold tracking-tight text-meridian-ink">
              {item.question}
            </dt>
            <dd className="mt-[0.5rem] text-sm leading-relaxed text-meridian-muted">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
