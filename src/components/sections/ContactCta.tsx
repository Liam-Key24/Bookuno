import { LeadForm } from '@/components/forms/LeadForm'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

export function ContactCta() {
  return (
    <Section id="contact" className="bg-white pt-0 md:pt-0 lg:pt-0">
      <div className="rounded-meridian bg-meridian-deep px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <Reveal className="mx-auto max-w-[40rem] text-center">
          <div className="flex justify-center">
            <SectionCaption className="border-white/20 bg-white/10 text-white/85">
              Ready for less faff?
            </SectionCaption>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-white sm:text-[2.75rem]">
            Send us your details. We’ll help from there.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            A website that takes bookings, payments and a few jobs off your plate.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-10">
          <LeadForm />
        </Reveal>
      </div>
    </Section>
  )
}
