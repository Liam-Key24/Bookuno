import { LeadForm } from '@/components/forms/LeadForm'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export function ContactCta() {
  return (
    <section id="contact" className="w-full bg-white px-3 py-10 sm:px-4 sm:py-12 md:py-16">
      <div className="relative mx-auto w-full overflow-hidden rounded-meridian px-6 py-10 sm:px-8 sm:py-12 md:w-2/3 md:px-10 md:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#c5e4eb] via-meridian-soft to-meridian-mid/70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(ellipse_at_35%_15%,rgb(197_228_235_/_0.9),transparent_55%),radial-gradient(ellipse_at_75%_85%,rgb(72_159_181_/_0.35),transparent_50%)] blur-2xl"
        />

        <div className="relative z-10">
          <h2 className="text-center font-display text-[1.85rem] font-bold tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Get started with Merevo
          </h2>

          <div className="mt-8 grid w-full items-center gap-8 sm:mt-10 sm:gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 lg:gap-14">
            <div className="flex justify-center md:justify-start">
              <IllustrationSlot
                label="Contact illustration"
                brief="Calm desk scene — notebook, soft calendar and a friendly wave. Placeholder until artwork lands."
                className="aspect-[4/3] w-full max-w-[18rem] bg-white/45 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
              />
            </div>

            <div className="flex h-auto min-w-0 w-full items-center self-center">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
