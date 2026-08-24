import {
  CalendarCheck,
  CreditCard,
  EnvelopeSimple,
  Headset,
  Monitor,
} from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'

const capabilities = [
  {
    icon: Monitor,
    title: 'Your website',
    body: 'A professionally designed Merevo template, personalised with your name, logo, colours, images, services and prices.',
  },
  {
    icon: CalendarCheck,
    title: 'Your bookings',
    body: 'Availability and online booking through your own website—so customers book with you, not on somebody else’s marketplace.',
  },
  {
    icon: CreditCard,
    title: 'Your payments',
    body: 'Online payments powered by Stripe. Take deposits or full payments. Stripe processing fees apply separately.',
  },
  {
    icon: EnvelopeSimple,
    title: 'Your customer marketing',
    body: 'Friendly follow-ups and staying in touch—without adding “learn email marketing software” to your to-do list.',
  },
  {
    icon: Headset,
    title: 'The technical bits',
    body: 'Hosting, secure data storage, platform maintenance, updates and Merevo technical support—quietly looked after for you.',
  },
] as const

export function WhatMerevoDoes() {
  return (
    <Section id="features" className="bg-meridian-surface">
      <div className="max-w-[40rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">What’s included</p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Your website, bookings, payments and customer marketing—under one friendly roof.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Merevo is a managed website, booking, payments and customer-growth platform for service
          businesses. Not a DIY builder. Not a marketplace. Not a traditional web-design agency.
          One connected service, set up and managed for you.
        </p>
        <p className="mt-[0.75rem] text-sm font-medium tracking-tight text-meridian-ink">
          Your website. Your bookings. Your customers.
        </p>
      </div>

      <ul className="mt-[2.5rem] grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, body }) => (
          <li key={title} className="rounded-[20px] bg-white p-[1.35rem] md:p-[1.5rem]">
            <Icon size={24} weight="duotone" className="text-meridian-mid" aria-hidden />
            <h3 className="mt-[1rem] text-base font-semibold tracking-tight text-meridian-ink">
              {title}
            </h3>
            <p className="mt-[0.45rem] text-sm leading-relaxed text-meridian-muted">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
