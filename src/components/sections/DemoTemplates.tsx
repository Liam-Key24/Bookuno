import { Section } from '@/components/sections/Section'
import { DemoCard } from '@/components/sections/DemoCard'
import { demoTemplates } from '@/components/sections/demoTemplatesData'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

type DemoTemplatesProps = {
  /** When false, hides the link treatment meant for home teaser use. */
  showPageLink?: boolean
}

export function DemoTemplates({ showPageLink = true }: DemoTemplatesProps) {
  return (
    <Section id="templates" className="bg-white !py-16 md:!py-24 lg:!py-28">
      <div className="mx-auto max-w-[36rem] text-center">
        <h1 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          Pick a look. We’ll make it yours.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          Fictional demos of the kind of presence Merevo sets up—marketing only, with booking CTAs.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[22rem] justify-center sm:mt-12 md:max-w-[26rem]">
        <IllustrationSlot
          label="Template gallery"
          brief="Two mini browser frames side by side with a shared Book button glow."
          className="aspect-[5/4] w-full max-w-none bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
        />
      </div>

      <div className="mt-12 grid gap-8 sm:mt-14 md:grid-cols-2 md:gap-10">
        {demoTemplates.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>

      {showPageLink ? (
        <p className="mt-10 text-center text-sm text-meridian-muted">
          More detail lives on the templates page when you need it.
        </p>
      ) : null}
    </Section>
  )
}
