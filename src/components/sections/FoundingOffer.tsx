import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/sections/Section'

const included = [
  'Professionally designed Merevo website template, personalised for your business',
  'Services, menus, prices and existing PDF information added for you',
  'Online booking through your own website',
  'Online payments powered by Stripe (Stripe processing fees apply separately)',
  'Customer and email marketing with minimal work for you',
  'Hosting, secure data storage, platform maintenance and Merevo technical support',
  'Website setup and launch assistance',
  'One standard domain—preferably a .co.uk—included for the first year',
  'Founding rate of £50 a month while your subscription remains active',
] as const

export function FoundingOffer() {
  return (
    <Section id="pricing" className="bg-white">
      <div className="grid items-start gap-[2rem] rounded-[20px] bg-meridian-surface p-[1.5rem] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-[2.5rem] md:p-[2.25rem] lg:p-[2.75rem]">
        <div>
          <p className="text-sm font-medium tracking-tight text-meridian-deep">
            Founding pricing
          </p>
          <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            A whole lot of useful. One simple price.
          </h2>
          <p className="mt-[1.25rem] text-[2.5rem] font-semibold tracking-tight text-meridian-ink sm:text-[3rem]">
            £50 a month
          </p>
          <p className="mt-[1rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Start with £150 upfront—that covers your first three months, including setup and launch.
            After that, it’s £50 a month. The £150 is not an extra setup fee; it pays for those first
            three months.
          </p>
          <p className="mt-[1rem] max-w-[34rem] text-sm leading-relaxed text-meridian-muted">
            Founding customers keep the £50 monthly rate while their subscription remains active.
            Online payments are powered by Stripe; Stripe processing fees apply separately.
          </p>
        </div>

        <div className="rounded-[20px] bg-white p-[1.5rem] md:p-[1.75rem]">
          <h3 className="text-base font-semibold tracking-tight text-meridian-ink">
            What’s covered
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
            Get started with Merevo
          </Button>
        </div>
      </div>
    </Section>
  )
}
