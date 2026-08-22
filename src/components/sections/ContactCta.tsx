import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/sections/Section'

export function ContactCta() {
  return (
    <Section id="contact" className="bg-white pt-0 md:pt-0">
      <div className="rounded-[20px] bg-meridian-deep px-[1.5rem] py-[2.75rem] text-center md:px-[2.5rem] md:py-[3.5rem]">
        <h2 className="mx-auto max-w-[28rem] text-[1.85rem] font-semibold tracking-tight text-white sm:text-[2.25rem]">
          Ready for a website that works as hard as you do?
        </h2>
        <p className="mx-auto mt-[1rem] max-w-[32rem] text-base leading-relaxed text-white/75">
          Tell us about your salon, barbershop, or restaurant. We’ll reply personally with
          next steps for the Meridian founding offer.
        </p>
        <div className="mt-[1.75rem] flex flex-wrap items-center justify-center gap-[0.75rem]">
          <Button href="mailto:hello@meridian.studio" variant="accent">
            Email Meridian
            <ArrowUpRight size={16} weight="bold" />
          </Button>
          <Button
            href="mailto:hello@meridian.studio?subject=Meridian%20founding%20offer"
            variant="onDeep"
          >
            Ask a quick question
          </Button>
        </div>
        <p className="mt-[1.25rem] text-sm text-white/55">
          Prefer a call? Mention it in your email and we’ll find a time.
        </p>
      </div>
    </Section>
  )
}
