import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'Templates | Meridian',
  description: 'Demo website directions Meridian can manage for salons and barbers.',
}

const demos = [
  {
    name: 'Northside Cuts',
    kind: 'Barbershop demo',
    brief: 'Bold type, appointment CTA, and a calm “book a chair” moment on a dark-teal shop scene.',
  },
  {
    name: 'Harbour Glow',
    kind: 'Salon demo',
    brief: 'Soft light, service list, and a clear “request a time” button beside a sunlit chair.',
  },
] as const

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Polished demos. Built to feel bookable."
        lede="Preview the kind of site Meridian manages — marketing demos only for now, with booking CTAs front and centre."
        illustrationLabel="Template gallery"
        illustrationBrief="Two mini browser frames side by side — salon and barber — with a shared “Book” button glow."
      />

      <section className="w-full px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
        <div className="grid gap-[1.25rem] md:grid-cols-2">
          {demos.map((demo) => (
            <article
              key={demo.name}
              className="rounded-[20px] bg-meridian-surface p-[1.25rem] md:p-[1.5rem]"
            >
              <IllustrationSlot
                label={demo.name}
                brief={demo.brief}
                className="aspect-[16/11] max-w-none bg-[#8f9aa3]"
              />
              <p className="mt-[1rem] text-xs font-medium tracking-tight text-meridian-deep uppercase">
                {demo.kind}
              </p>
              <h2 className="mt-[0.35rem] text-xl font-semibold tracking-tight text-meridian-ink">
                {demo.name}
              </h2>
              <p className="mt-[0.45rem] text-sm leading-relaxed text-meridian-muted">
                Showcase direction for a Meridian-managed site — including a booking call to action.
              </p>
            </article>
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
