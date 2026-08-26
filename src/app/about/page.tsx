import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Merevo helps independent service businesses get online with a managed website, bookings, payments and customer marketing.',
}

const beats = [
  {
    title: 'Who it’s for',
    body: 'Independent service businesses—barbers, beauty, therapists, trainers, groomers and more.',
  },
  {
    title: 'What we believe',
    body: 'You run the business. We handle the website bits so evenings stay yours.',
  },
  {
    title: 'How we work',
    body: 'Pick a template, send your bits, we set it up and keep it looked after.',
  },
] as const

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Already busy. Still need a proper website."
        lede="Merevo is managed website, bookings, payments and marketing—not another app to learn."
        illustrationLabel="About Merevo"
        illustrationBrief="Warm portrait of a local service business owner with a soft teal glow."
      />

      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <IllustrationSlot
              label="Busy owners"
              brief="Barber chair, nail desk and trainer mat as three soft shapes in a calm row."
              className="aspect-auto h-[min(44vh,24rem)] w-full max-w-[22rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
            />
          </div>

          <ul className="grid grid-cols-1 gap-y-8 sm:gap-y-10">
            {beats.map((beat) => (
              <li key={beat.title}>
                <h2 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                  {beat.title}
                </h2>
                <p className="mt-2 max-w-[32rem] text-sm leading-relaxed text-meridian-muted md:text-base">
                  {beat.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <PageCta
        title="Say hello"
        body="If that sounds like your kind of help, we’d love to hear about your business."
      />
    </main>
  )
}
