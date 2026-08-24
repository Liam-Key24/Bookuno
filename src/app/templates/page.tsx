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

      <section className="w-full px-4 pb-20 md:px-5 md:pb-28 lg:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-[96rem] gap-4 md:grid-cols-2">
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
