import { LeadForm } from '@/components/forms/LeadForm'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

export function ContactCta() {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="m-2 w-auto rounded-meridian bg-meridian-deep p-2 sm:p-2.5 md:p-3">
        <Reveal className="overflow-hidden rounded-meridian bg-white px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto grid w-full max-w-[72rem] items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="flex max-w-[28rem] flex-col">
              <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.35rem] lg:text-[2.6rem]">
                Get started with Merevo
              </h2>
              <p className="mt-3 text-base leading-relaxed text-meridian-muted">
                Tell us about your business — we’ll help with booking, payments and the setup.
              </p>

              <IllustrationSlot
                label="Contact illustration"
                brief="Calm desk scene — notebook, soft calendar and a friendly wave. Placeholder until artwork lands."
                className="mt-8 aspect-[4/3] max-w-[18rem] bg-meridian-soft sm:max-w-[20rem]"
              />
            </div>

            <div className="min-w-0 w-full">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
