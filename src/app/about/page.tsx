import type { Metadata } from 'next'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'About Us | Meridian',
  description: 'Meridian helps independent salons, barbers, and restaurants keep a polished online presence.',
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Built for owners who are already busy."
        lede="Meridian is a managed website partner for independent salons, barbers, and restaurants — not another app to learn."
        illustrationLabel="About Meridian"
        illustrationBrief="Warm, simple portrait of a local shop team with a soft teal glow — premium, human, uncluttered."
      />

      <section className="w-full px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
        <div className="grid gap-[1.25rem] md:grid-cols-3">
          {[
            {
              title: 'Who it’s for',
              body: 'Independent owners who want to look open for business online.',
              label: 'Audience',
              brief: 'Salon chair, barber pole, and restaurant table as three soft icons.',
            },
            {
              title: 'What we believe',
              body: 'Your website should pull its weight. You shouldn’t pull your hair out.',
              label: 'Belief',
              brief: 'Balance scale with a calm site on one side and a smiling owner on the other.',
            },
            {
              title: 'How we work',
              body: 'One clear partnership. Hosting, updates, and support stay with us.',
              label: 'Partnership',
              brief: 'Handshake made of simple shapes in Meridian teal and accent orange.',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[20px] bg-meridian-surface p-[1.25rem] md:p-[1.5rem]"
            >
              <IllustrationSlot
                label={card.label}
                brief={card.brief}
                className="mb-[1.25rem] aspect-[4/3] max-w-none bg-[#9aa7b0]"
              />
              <h2 className="text-lg font-semibold tracking-tight text-meridian-ink">
                {card.title}
              </h2>
              <p className="mt-[0.5rem] text-sm leading-relaxed text-meridian-muted">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        title="Say hello"
        body="If that sounds like your kind of help, we’d love to hear about your space."
      />
    </main>
  )
}
