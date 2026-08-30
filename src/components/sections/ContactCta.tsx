import { LeadForm } from '@/components/forms/LeadForm'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { contentShell, sectionBandPadLoose, splitGrid } from '@/lib/uiClasses'

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
      className={`w-full scroll-mt-24 bg-white ${sectionBandPadLoose}`}
    >
      <div className={`${contentShell} ${splitGrid}`}>
        <Reveal>
          <SectionHeading
            title={title}
            lede="Share a little about your business and we’ll follow up personally."
            align="left"
            className="max-w-none"
            titleClassName="max-w-[18rem] sm:max-w-[22rem]"
          />
          <IllustrationSlot
            label="Contact illustration"
            brief="Calm desk scene — notebook, soft calendar and a friendly wave. Placeholder until artwork lands."
            tone="ink"
            className="mt-8 aspect-[4/3] w-full max-w-[18rem] bg-meridian-soft/35"
          />
        </Reveal>

        <Reveal delayMs={80} className="min-w-0 w-full">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  )
}
