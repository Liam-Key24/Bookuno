import type { Metadata } from 'next'
import { DemoCard } from '@/components/sections/DemoCard'
import { demoTemplates } from '@/components/sections/demoTemplatesData'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'

export const metadata: Metadata = {
  title: 'Templates | Meridian',
  description: 'Demo website directions Meridian can manage for salons and barbers.',
}

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Polished demos. Built to feel bookable."
        lede="Two labelled fictional sites showing the kind of salon and barber presence Meridian manages — marketing demos only, with booking CTAs included."
        illustrationLabel="Template gallery"
        illustrationBrief="Two mini browser frames side by side — salon and barber — with a shared “Book” button glow."
      />

      <section className="w-full px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
        <div className="grid gap-[1.25rem] md:grid-cols-2">
          {demoTemplates.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </section>

      <PageCta
        title="Want a site in this lane?"
        body="Get in touch and we’ll shape a Meridian founding build around your brand."
      />
    </main>
  )
}
