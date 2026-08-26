import { LeadForm } from '@/components/forms/LeadForm'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

type ContactCtaProps = {
  title?: string
  id?: string
}

export function ContactCta({
  title = 'Get started with Merevo',
  id = 'contact',
}: ContactCtaProps) {
  return (
    <section
      id={id}
      className="w-full scroll-mt-24 bg-white px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-[72rem] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <Reveal>
          <h2 className="max-w-[18rem] font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:max-w-[22rem] sm:text-[2.4rem]">
            {title}
          </h2>
          <p className="mt-3 max-w-[28rem] text-base leading-relaxed text-meridian-muted">
            Share a little about your business and we’ll follow up personally.
          </p>
          <IllustrationSlot
            label="Contact illustration"
            brief="Calm desk scene — notebook, soft calendar and a friendly wave. Placeholder until artwork lands."
            className="mt-8 aspect-[4/3] w-full max-w-[18rem] bg-meridian-soft/35 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
          />
        </Reveal>

        <Reveal delayMs={80} className="min-w-0 w-full">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  )
}
