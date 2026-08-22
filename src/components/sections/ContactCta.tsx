import { LeadForm } from '@/components/forms/LeadForm'
import { Section } from '@/components/sections/Section'

export function ContactCta() {
  return (
    <Section id="contact" className="bg-white pt-0 md:pt-0">
      <div className="rounded-[20px] bg-meridian-deep px-[1.5rem] py-[2.75rem] md:px-[2.5rem] md:py-[3.5rem]">
        <div className="mx-auto max-w-[40rem] text-center">
          <h2 className="text-[1.85rem] font-semibold tracking-tight text-white sm:text-[2.25rem]">
            Ready for a website that works as hard as you do?
          </h2>
          <p className="mt-[1rem] text-base leading-relaxed text-white/75">
            Tell us about your salon, barbershop, or restaurant. We’ll save your note securely,
            email you a confirmation, and reply personally about the founding offer.
          </p>
        </div>

        <div className="mt-[2rem]">
          <LeadForm />
        </div>
      </div>
    </Section>
  )
}
