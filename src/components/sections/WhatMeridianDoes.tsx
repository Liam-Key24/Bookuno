import { CalendarCheck, ChatCircleDots, Headset, Lightning, Monitor } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'

const capabilities = [
  {
    icon: Monitor,
    title: 'Managed website',
    body: 'A clean site for your salon, barbershop, or restaurant — designed, launched, and kept looking current.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking & enquiry handling',
    body: 'Capture requests the way you work: keep your current system, use Meridian requests, or blend both.',
  },
  {
    icon: Lightning,
    title: 'Hosting & updates',
    body: 'Uptime, small content changes, and ongoing polish stay on our side so nothing quietly breaks.',
  },
  {
    icon: ChatCircleDots,
    title: 'Clear client communication',
    body: 'Prospects get a straightforward path to ask for a table, a cut, or a call — without messy back-and-forth.',
  },
  {
    icon: Headset,
    title: 'Human support',
    body: 'Real help when you need a tweak, a question answered, or something fixed before the weekend rush.',
  },
] as const

export function WhatMeridianDoes() {
  return (
    <Section id="features" className="bg-meridian-surface">
      <div className="max-w-[38rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">What Meridian does</p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          We run the digital front door. You run the floor.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Meridian is a managed website partner for independent hospitality and beauty
          businesses. One relationship covers the site, the enquiry path, hosting, updates,
          and support — without handing you a complicated product to learn.
        </p>
      </div>

      <ul className="mt-[2.5rem] grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="rounded-[20px] bg-white p-[1.35rem] md:p-[1.5rem]"
          >
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
