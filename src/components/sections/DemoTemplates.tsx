import Link from 'next/link'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { DemoCard } from '@/components/sections/DemoCard'
import { demoTemplates } from '@/components/sections/demoTemplatesData'
import { Reveal } from '@/components/motion/Reveal'

export function DemoTemplates() {
  return (
    <Section id="templates" className="bg-white">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-[40rem]">
          <SectionCaption>Templates, not from scratch</SectionCaption>
          <h2 className="mt-4 font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
            Made for your business. Without making everything from scratch.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-meridian-muted">
            Pick a look, send your bits, and we’ll bring it together.
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <Link
            href="/templates"
            className="text-sm font-medium tracking-tight text-meridian-deep transition-colors duration-300 hover:text-meridian-ink"
          >
            View templates page
          </Link>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {demoTemplates.map((demo, index) => (
          <Reveal key={demo.id} delayMs={index * 90}>
            <DemoCard demo={demo} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
