import { ChatCircleDots, Heart, Sparkle } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'

const points = [
  {
    icon: Heart,
    title: 'Keep in touch',
    body: 'Stay connected with the people who already know your business—without another complicated tool to learn.',
  },
  {
    icon: Sparkle,
    title: 'Encourage them back',
    body: 'Gentle nudges that make it easier for customers to return, without you rewriting the same message by hand.',
  },
  {
    icon: ChatCircleDots,
    title: 'Less repetitive admin',
    body: 'Customer communication stays connected to your business, so fewer jobs pile up in your inbox.',
  },
] as const

export function CustomerMarketing() {
  return (
    <Section className="bg-white">
      <div className="max-w-[38rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">
          Customer marketing
        </p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Bring customers back—without becoming an email-marketing expert.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Friendly follow-ups, without the faff. Merevo helps you stay in touch without adding
          “learn email marketing software” to your to-do list.
        </p>
      </div>

      <ul className="mt-[2.5rem] grid gap-[1rem] md:grid-cols-3">
        {points.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="rounded-[20px] bg-meridian-surface p-[1.35rem] md:p-[1.5rem]"
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
