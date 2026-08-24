import type { Metadata } from 'next'
import { EnvelopeSimple, MapPin, ChatCircle } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { CONTACT_EMAIL, CONTACT_LABEL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Merevo about the founding offer for independent service businesses.',
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="w-full">
        <div className="m-2 grid w-auto gap-4 rounded-meridian bg-meridian-soft p-5 md:grid-cols-2 md:gap-8 md:p-7 lg:p-8">
          <Reveal>
            <SectionCaption className="text-meridian-ink/70">Talk to Merevo</SectionCaption>
            <h1 className="mt-4 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.5rem]">
              Say hello
            </h1>
            <p className="mt-3 max-w-[28rem] text-base leading-relaxed text-meridian-ink/75">
              Independent service businesses—reach out about getting started. We reply personally.
            </p>
            <Button href="/#contact" variant="accent" className="mt-6">
              Get started with Merevo
            </Button>
          </Reveal>

          <ul className="space-y-3">
            {[
              {
                icon: EnvelopeSimple,
                title: 'Email',
                body: (
                  <>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 inline-block text-sm text-meridian-deep underline-offset-2 hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p className="mt-1 text-xs text-meridian-muted">{CONTACT_LABEL}</p>
                  </>
                ),
              },
              {
                icon: ChatCircle,
                title: 'Response',
                body: (
                  <p className="mt-1 text-sm text-meridian-muted">
                    We aim to reply within 1–2 business days.
                  </p>
                ),
              },
              {
                icon: MapPin,
                title: 'Based',
                body: (
                  <p className="mt-1 text-sm text-meridian-muted">
                    Serving independent service businesses (remote-friendly).
                  </p>
                ),
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delayMs={index * 70} as="li">
                  <div className="rounded-meridian bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Icon
                        size={22}
                        weight="duotone"
                        className="text-meridian-mid"
                        aria-hidden
                      />
                      <div>
                        <p className="font-display text-sm font-bold tracking-tight text-meridian-ink">
                          {item.title}
                        </p>
                        {item.body}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
