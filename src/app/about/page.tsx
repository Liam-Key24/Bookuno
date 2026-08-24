import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Reveal } from '@/components/motion/Reveal'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Merevo helps independent service businesses get online with a managed website, bookings, payments and customer marketing.',
}

const cards = [
  {
    title: 'Who it’s for',
    caption: 'INDEPENDENT SERVICE BUSINESSES',
    label: 'Audience',
    brief: 'Barber chair, nail desk, and trainer mat as three soft icons.',
  },
  {
    title: 'What we believe',
    caption: 'YOU RUN THE BUSINESS. WE HANDLE THE WEBSITE BITS.',
    label: 'Belief',
    brief: 'Balance scale with a calm site on one side and a smiling owner on the other.',
  },
  {
    title: 'How we work',
    caption: 'TEMPLATES, SETUP, HOSTING AND SUPPORT',
    label: 'Partnership',
    brief: 'Handshake made of simple shapes in teal and accent orange.',
  },
] as const

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageIntro
        caption="Built for busy owners"
        title="Already busy. Still need a proper website."
        lede="Merevo is managed website, bookings, payments and marketing—not another app to learn."
        illustrationLabel="About Merevo"
        illustrationBrief="Warm portrait of a local service business owner with a soft teal glow."
      />

      <section className="w-full px-4 pb-20 md:px-5 md:pb-28 lg:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-[96rem] gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delayMs={index * 80}>
              <article className="flex h-full min-h-[20rem] flex-col rounded-meridian bg-meridian-surface p-6 md:p-8">
                <IllustrationSlot
                  label={card.label}
                  brief={card.brief}
                  className="mb-8 aspect-[4/3] max-w-none bg-[#9aa7b0]"
                />
                <h2 className="mt-auto font-display text-2xl font-bold tracking-tight text-meridian-ink">
                  {card.title}
                </h2>
                <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                  {card.caption}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title="Say hello"
        body="If that sounds like your kind of help, we’d love to hear about your business."
      />
    </main>
  )
}
