import {
  ArrowRight,
  Coffee,
  ImageSquare,
  LinkSimple,
  PaintBrush,
} from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const steps = [
  {
    icon: PaintBrush,
    title: 'Pick your look',
    body: 'Choose a polished Merevo template that suits your business.',
  },
  {
    icon: ImageSquare,
    title: 'Send us your business bits',
    body: 'Share your logo, colours, images, services, prices, opening hours and contact details.',
  },
  {
    icon: LinkSimple,
    title: 'Connect the important stuff',
    body: 'We’ll help configure bookings, your domain and Stripe payments.',
  },
  {
    icon: Coffee,
    title: 'Pop the kettle on',
    body: 'Merevo brings everything together and gets you ready to launch. You’ll still review and approve before you go live.',
  },
] as const

export function HowItWorks() {
  return (
    <Section className="bg-meridian-surface">
      <div className="max-w-[38rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">How setup works</p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Pick a template, send us your bits, and we’ll bring it together.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Setup is designed to be quick and require very little work from you. No plugins, patches
          or technical head-scratching required—just the details only you know about your business.
        </p>
      </div>

      <ol className="mt-[2.5rem] grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-4">
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
                className="absolute top-[1.5rem] -right-[0.65rem] hidden text-meridian-soft lg:block"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-[2rem] flex justify-center md:justify-start">
        <IllustrationSlot
          label="Setup flow"
          brief="Four soft steps: template, business details, Stripe and domain, then a kettle and a ready-to-launch site — playful and premium."
          className="aspect-[16/9] w-full max-w-[36rem] bg-meridian-deep"
        />
      </div>
    </Section>
  )
}
