import { ArrowRight, EnvelopeSimple, SealCheck, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const steps = [
  {
    icon: PaperPlaneTilt,
    title: 'Customer request',
    body: 'Someone asks for a cut, a table, or a time from your site.',
  },
  {
    icon: SealCheck,
    title: 'Business approval',
    body: 'You check the diary and approve — nothing books itself without you.',
  },
  {
    icon: EnvelopeSimple,
    title: 'Confirmation email',
    body: 'They get a clear confirmation. You stay in control.',
  },
] as const

export function HowItWorks() {
  return (
    <Section className="bg-meridian-surface">
      <div className="max-w-[36rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">How it works</p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Request → approve → confirm.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          When you use Meridian booking requests, the flow stays simple. No live payments,
          calendar sync, or dashboard yet — just a clear path you can trust.
        </p>
      </div>

      <ol className="mt-[2.5rem] grid gap-[1rem] md:grid-cols-3">
        {steps.map(({ icon: Icon, title, body }, index) => (
          <li
            key={title}
            className="relative rounded-[20px] bg-white p-[1.35rem] md:p-[1.5rem]"
          >
            <div className="flex items-center gap-[0.65rem]">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-meridian-surface text-sm font-semibold text-meridian-deep">
                {index + 1}
              </span>
              <Icon size={22} weight="duotone" className="text-meridian-mid" aria-hidden />
            </div>
            <h3 className="mt-[1rem] text-base font-semibold tracking-tight text-meridian-ink">
              {title}
            </h3>
            <p className="mt-[0.4rem] text-sm leading-relaxed text-meridian-muted">{body}</p>
            {index < steps.length - 1 ? (
              <ArrowRight
                size={18}
                weight="bold"
                className="absolute top-[1.5rem] -right-[0.65rem] hidden text-meridian-soft md:block"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mt-[1.5rem] max-w-[40rem] text-sm leading-relaxed text-meridian-muted">
        Prefer Fresha, Treatwell, OpenTable, Calendly, or another tool? We link out to your
        existing system instead — same site, your booking stack.
      </p>

      <div className="mt-[2rem] flex justify-center md:justify-start">
        <IllustrationSlot
          label="Request flow"
          brief="Three-step strip: phone taps “request”, owner taps “approve”, envelope says “confirmed” — playful and premium."
          className="aspect-[16/9] w-full max-w-[36rem] bg-meridian-deep"
        />
      </div>
    </Section>
  )
}
