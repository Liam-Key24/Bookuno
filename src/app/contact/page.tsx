import type { Metadata } from 'next'
import { EnvelopeSimple, MapPin, ChatCircle } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { CONTACT_EMAIL, CONTACT_LABEL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Meridian',
  description: 'Contact Meridian about the founding offer for salons, barbers, and restaurants.',
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="w-full px-[1.5rem] py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:px-[3rem]">
        <div className="grid gap-[1.5rem] rounded-[20px] bg-meridian-surface p-[1.5rem] md:grid-cols-2 md:gap-[2rem] md:p-[2.5rem] lg:p-[3rem]">
          <div>
            <p className="text-sm font-medium tracking-tight text-meridian-deep">Contact</p>
            <h1 className="mt-[0.5rem] text-[2rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.5rem]">
              Talk to Meridian
            </h1>
            <p className="mt-[1rem] max-w-[28rem] text-base leading-relaxed text-meridian-muted">
              Independent salons, barbers, and restaurants — reach out about the founding offer
              or ask a quick question. We reply personally.
            </p>
            <Button href="/#contact" variant="accent" className="mt-[1.5rem]">
              Open the contact form
            </Button>
          </div>

          <ul className="space-y-[1rem]">
            <li className="rounded-[20px] bg-white p-[1.25rem]">
              <div className="flex items-start gap-[0.75rem]">
                <EnvelopeSimple size={22} weight="duotone" className="text-meridian-mid" aria-hidden />
                <div>
                  <p className="text-sm font-semibold tracking-tight text-meridian-ink">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-[0.25rem] inline-block text-sm text-meridian-deep underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-[0.35rem] text-xs text-meridian-muted">{CONTACT_LABEL}</p>
                </div>
              </div>
            </li>
            <li className="rounded-[20px] bg-white p-[1.25rem]">
              <div className="flex items-start gap-[0.75rem]">
                <ChatCircle size={22} weight="duotone" className="text-meridian-mid" aria-hidden />
                <div>
                  <p className="text-sm font-semibold tracking-tight text-meridian-ink">Response</p>
                  <p className="mt-[0.25rem] text-sm text-meridian-muted">
                    We aim to reply within 1–2 business days.
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-[20px] bg-white p-[1.25rem]">
              <div className="flex items-start gap-[0.75rem]">
                <MapPin size={22} weight="duotone" className="text-meridian-mid" aria-hidden />
                <div>
                  <p className="text-sm font-semibold tracking-tight text-meridian-ink">Based</p>
                  <p className="mt-[0.25rem] text-sm text-meridian-muted">
                    Serving independent hospitality & beauty businesses (remote-friendly).
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
