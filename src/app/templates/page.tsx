import type { Metadata } from 'next'
import { DemoCard } from '@/components/sections/DemoCard'
import { demoTemplates } from '@/components/sections/demoTemplatesData'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Polished Merevo website templates for independent service businesses — pick a look, send your details, and we’ll bring it together.',
}

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        caption="Pick a look"
        title="Pick a template. We’ll make it yours."
        lede="Fictional demos of the kind of presence Merevo sets up—marketing only, with booking CTAs."
        illustrationLabel="Template gallery"
        illustrationBrief="Two mini browser frames side by side with a shared Book button glow."
      />

      <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-[72rem] gap-3 md:grid-cols-2">
          {demoTemplates.map((demo, index) => (
            <Reveal key={demo.id} delayMs={index * 90}>
              <DemoCard demo={demo} />
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title="Want a site in this lane?"
        body="Get in touch and we’ll help turn a Merevo template into your branded online home."
      />
    </main>
  )
}
