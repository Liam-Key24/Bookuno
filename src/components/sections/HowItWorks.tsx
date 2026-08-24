import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

const steps = [
  {
    label: 'STEP ONE',
    title: 'Pick your look',
    tagline: 'Choose a polished Merevo template',
    illustration: {
      label: 'Template pick',
      brief: 'Illustration: browsing polished Merevo template thumbnails',
    },
  },
  {
    label: 'STEP TWO',
    title: 'Send your bits',
    tagline: 'Logo, colours, services, hours, images',
    illustration: {
      label: 'Brand bits',
      brief: 'Illustration: logo, colours and content pieces being handed over',
    },
  },
  {
    label: 'STEP THREE',
    title: 'Connect the essentials',
    tagline: 'Bookings, domain and Stripe',
    illustration: {
      label: 'Connections',
      brief: 'Illustration: bookings, domain and Stripe linking into place',
    },
  },
  {
    label: 'STEP FOUR',
    title: 'Pop the kettle on',
    tagline: 'We bring it together; you review and launch',
    illustration: {
      label: 'Launch ready',
      brief: 'Illustration: kettle on while the site comes together for review',
    },
  },
] as const

export function HowItWorks() {
  return (
    <Section withPanel panelClassName="bg-meridian-surface">
      <Reveal className="mx-auto max-w-[36rem] text-center">
        <SectionCaption>How setup works</SectionCaption>
        <h2 className="mt-4 font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Pick a template. Send your bits. We’ll bring it together.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Quick setup. Very little work from you. No plugin head-scratching.
        </p>
      </Reveal>

      <ol className="mx-auto mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, index) => {
          const showDesktopArrow = index < steps.length - 1
          const showTabletArrow = index % 2 === 0 && index < steps.length - 1

          return (
            <Reveal
              key={step.title}
              delayMs={index * 70}
              as="li"
              className="relative"
            >
              <article className="flex h-full flex-col rounded-meridian bg-white px-4 pb-5 pt-5 sm:px-5 sm:pb-6 sm:pt-6">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-meridian-muted uppercase">
                  {step.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-meridian-ink md:text-[1.35rem]">
                  {step.title}
                </h3>

                <div className="my-5 flex flex-1 items-center justify-center">
                  <IllustrationSlot
                    label={step.illustration.label}
                    brief={step.illustration.brief}
                    className="aspect-[5/4] max-w-none rounded-[8px] bg-meridian-ink px-4 py-6"
                  />
                </div>

                <p className="mt-auto text-sm leading-relaxed text-meridian-muted">
                  {step.tagline}
                </p>
              </article>

              {showDesktopArrow ? (
                <span
                  className="pointer-events-none absolute top-[46%] -right-2.5 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border border-meridian-ink/10 bg-white text-meridian-deep shadow-[0_4px_12px_rgb(15_23_32_/_0.06)] lg:flex"
                  aria-hidden
                >
                  <ArrowRight size={14} weight="bold" />
                </span>
              ) : null}

              {showTabletArrow ? (
                <span
                  className="pointer-events-none absolute top-[46%] -right-3 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-meridian-ink/10 bg-white text-meridian-deep shadow-[0_4px_12px_rgb(15_23_32_/_0.06)] sm:flex lg:hidden"
                  aria-hidden
                >
                  <ArrowRight size={14} weight="bold" />
                </span>
              ) : null}
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
