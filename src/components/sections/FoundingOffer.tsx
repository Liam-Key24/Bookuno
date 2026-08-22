import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/sections/Section'

const included = [
  'Managed website for your salon, barbershop, or restaurant',
  'Booking or enquiry handling set up around how you already work',
  'Hosting, security basics, and ongoing updates',
  'Content tweaks when menus, hours, or services change',
  'Direct human support — not a ticket black hole',
  'Founding partner pricing while Meridian grows with early clients',
] as const

export function FoundingOffer() {
  return (
    <Section id="pricing" className="bg-white">
      <div className="grid items-start gap-[2rem] rounded-[20px] bg-meridian-surface p-[1.5rem] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-[2.5rem] md:p-[2.25rem] lg:p-[2.75rem]">
        <div>
          <p className="text-sm font-medium tracking-tight text-meridian-deep">
            Founding offer
          </p>
          <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            One simple partnership. No tier maze.
          </h2>
          <p className="mt-[1rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Meridian is opening with a single founding offer for independent owners who want
            a polished digital presence managed end to end. We keep the scope clear: website,
            requests, hosting, updates, and support — priced as a partnership, not a pile of
            add-ons.
          </p>
          <p className="mt-[1rem] max-w-[34rem] text-sm leading-relaxed text-meridian-muted">
            Exact investment depends on your space and starting point. Get in touch and we’ll
            walk through fit, timeline, and a clear quote — no pressure, no package ladder.
          </p>
        </div>

        <div className="rounded-[20px] bg-white p-[1.5rem] md:p-[1.75rem]">
          <h3 className="text-base font-semibold tracking-tight text-meridian-ink">
            What’s included
          </h3>
          <ul className="mt-[1.25rem] space-y-[0.85rem]">
            {included.map((item) => (
              <li key={item} className="flex gap-[0.75rem] text-sm leading-relaxed text-meridian-muted">
                <Check
                  size={18}
                  weight="bold"
                  className="mt-[0.15rem] shrink-0 text-meridian-mid"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="accent" className="mt-[1.75rem] w-full sm:w-auto">
            Talk about founding access
          </Button>
        </div>
      </div>
    </Section>
  )
}
