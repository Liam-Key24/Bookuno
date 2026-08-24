import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const steps = [
  {
    step: '01',
    title: 'Pick your look',
    caption: 'CHOOSE A POLISHED MEREVO TEMPLATE',
  },
  {
    step: '02',
    title: 'Send your bits',
    caption: 'LOGO, COLOURS, SERVICES, HOURS, IMAGES',
  },
  {
    step: '03',
    title: 'Connect the essentials',
    caption: 'BOOKINGS, DOMAIN AND STRIPE',
  },
  {
    step: '04',
    title: 'Pop the kettle on',
    caption: 'WE BRING IT TOGETHER. YOU REVIEW AND LAUNCH',
  },
] as const

export function HowItWorks() {
  return (
    <Section className="bg-meridian-surface">
      <Reveal className="max-w-[40rem]">
        <SectionCaption>How setup works</SectionCaption>
        <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          Pick a template. Send your bits. We’ll bring it together.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-meridian-muted">
          Quick setup. Very little work from you. No plugin head-scratching.
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70} as="li">
            <article className="flex h-full min-h-[16rem] flex-col justify-between rounded-meridian bg-white p-8 md:min-h-[18rem] md:p-9">
              <p className="font-display text-sm font-bold tracking-tight text-meridian-soft">
                {item.step}
              </p>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                  {item.caption}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
