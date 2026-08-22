import Link from 'next/link'
import { Section } from '@/components/sections/Section'
import { DemoCard } from '@/components/sections/DemoCard'
import { demoTemplates } from '@/components/sections/demoTemplatesData'

export function DemoTemplates() {
  return (
    <Section id="templates" className="bg-white">
      <div className="flex flex-col gap-[1rem] md:flex-row md:items-end md:justify-between">
        <div className="max-w-[36rem]">
          <p className="text-sm font-medium tracking-tight text-meridian-deep">Demo templates</p>
          <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            Two fictional sites. Built to feel bookable.
          </h2>
          <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Quick showcases of the polished websites Meridian manages for independent salons and
            barbers — with booking CTAs front and centre.
          </p>
        </div>
        <Link
          href="/templates"
          className="text-sm font-medium tracking-tight text-meridian-deep transition-colors hover:text-meridian-ink"
        >
          View templates page
        </Link>
      </div>

      <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
        {demoTemplates.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>
    </Section>
  )
}
