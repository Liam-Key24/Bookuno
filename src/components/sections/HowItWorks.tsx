import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

const steps = [
  {
    title: 'Pick your look',
    body: 'Choose a polished Merevo template that already feels like home.',
    illustration: {
      label: 'Template pick',
      brief: 'Browsing polished Merevo template thumbnails on a soft desk.',
    },
  },
  {
    title: 'Send your bits',
    body: 'Logo, colours, services, hours and images to get started. You can always tweak details later in your settings.',
    illustration: {
      label: 'Brand bits',
      brief: 'Logo, colours and content pieces being handed over in a neat pile.',
    },
  },
  {
    title: 'We’ll do the connections',
    body: 'Bookings, domain and Stripe plugged in without the plugin fog.',
    illustration: {
      label: 'Connections',
      brief: 'Bookings, domain and Stripe linking into place with soft cables.',
    },
  },
  {
    title: 'Pop the kettle on',
    body: 'We bring it together. You review, tweak and launch when ready.',
    illustration: {
      label: 'Launch ready',
      brief: 'Kettle on while the site comes together for a calm review.',
    },
  },
] as const

/** Placeholder until pencilled arrow art is dropped in. */
function PencilArrowSlot({ flip }: { flip?: boolean }) {
  return (
    <div
      className={[
        'mx-auto flex h-16 w-full max-w-[12rem] items-center justify-center sm:h-20',
        flip ? '-scale-x-100' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-meridian bg-meridian-soft/25 px-3 text-center">
        <p className="text-[0.65rem] font-semibold tracking-wide text-meridian-deep/80 uppercase">
          Pencilled arrow
        </p>
        <p className="mt-0.5 text-[0.65rem] leading-snug text-meridian-muted">
          Drop art here
        </p>
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <Section className="bg-white !pt-8 md:!pt-10 lg:!pt-12">
      <Reveal className="mx-auto max-w-[34rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Pick a template. Send your bits. We’ll bring it together.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Quick setup. Very little work from you. No plugin head-scratching.
        </p>
      </Reveal>

      <ol className="relative mx-auto mt-14 max-w-[64rem] sm:mt-20">
        {steps.map((step, index) => {
          const illustrationFirst = index % 2 === 0
          const pathShift =
            index % 2 === 0
              ? 'lg:-translate-x-10 xl:-translate-x-16'
              : 'lg:translate-x-10 xl:translate-x-16'
          const cardTilt = illustrationFirst ? '-rotate-2' : 'rotate-2'

          const card = (
            <article
              className={[
                'rounded-[1.25rem] bg-meridian-surface p-6 shadow-[0_10px_28px_rgb(22_105_122_/_0.1)] md:p-8',
                'origin-center transition-transform duration-500',
                cardTilt,
              ].join(' ')}
            >
              <p className="font-display text-4xl font-bold tracking-tight text-meridian-soft/90 md:text-5xl">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                {step.body}
              </p>
            </article>
          )

          const art = (
            <IllustrationSlot
              label={step.illustration.label}
              brief={step.illustration.brief}
              className="aspect-[5/4] max-w-none bg-meridian-mid/25 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
            />
          )

          return (
            <li key={step.title} className="relative">
              <Reveal
                delayMs={40}
                className={[
                  'grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20',
                  pathShift,
                ].join(' ')}
              >
                {illustrationFirst ? (
                  <>
                    <div className="lg:pr-4">{art}</div>
                    <div className="lg:pl-4">{card}</div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1 lg:pr-4">{card}</div>
                    <div className="order-1 lg:order-2 lg:pl-4">{art}</div>
                  </>
                )}
              </Reveal>

              {index < steps.length - 1 ? (
                <Reveal delayMs={80} className="py-6 sm:py-8 md:py-10">
                  <PencilArrowSlot flip={!illustrationFirst} />
                </Reveal>
              ) : null}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
