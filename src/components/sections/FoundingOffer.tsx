import { Check } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const included = [
  'Personalised Merevo website template',
  'Services, menus, prices and PDFs added for you',
  'Online booking on your own website',
  'Stripe payments (processing fees separate)',
  'Customer and email marketing, without the faff',
  'Hosting, storage, maintenance and support',
  'Setup, launch help, and one standard domain for year one',
  'Founding rate of £50/month while subscribed',
] as const

export function FoundingOffer() {
  return (
    <Section id="pricing" className="bg-white">
      <div className="grid items-start gap-8 rounded-meridian bg-meridian-surface p-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 md:p-10 lg:p-14">
        <Reveal>
          <SectionCaption>£50. That’s it.</SectionCaption>
          <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
            A whole lot of useful. One simple price.
          </h2>
          <p className="mt-8 font-display text-[4.5rem] font-bold leading-none tracking-tight text-meridian-ink sm:text-[6rem]">
            £50
          </p>
          <p className="mt-2 text-sm font-medium tracking-[0.16em] text-meridian-muted uppercase">
            a month
          </p>
          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-meridian-muted">
            Start with £150 upfront—covers your first three months, including setup and launch.
            After that, £50 a month. Not an extra setup fee.
          </p>
          <p className="mt-3 max-w-[34rem] text-sm leading-relaxed text-meridian-muted">
            Founding customers keep £50/month while subscribed. Stripe fees apply separately.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="rounded-meridian bg-white p-7 md:p-9">
            <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink">
              What’s covered
            </h3>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-meridian-muted"
                >
                  <Check
                    size={18}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-meridian-mid"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button href="#contact" variant="accent" className="mt-8 w-full sm:w-auto">
              Get started with Merevo
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
