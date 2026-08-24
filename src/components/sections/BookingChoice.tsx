import { Buildings, Globe, SealCheck } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const points = [
  {
    icon: Buildings,
    title: 'Your branding',
    caption: 'CUSTOMERS LAND ON YOUR SITE, NOT SOMEBODY ELSE’S',
  },
  {
    icon: Globe,
    title: 'Your online home',
    caption: 'BOOKINGS STAY WITH YOUR BUSINESS AND DOMAIN',
  },
  {
    icon: SealCheck,
    title: 'Template, not from scratch',
    caption: 'QUICK, DEPENDABLE AND AFFORDABLE TO SET UP',
  },
] as const

export function BookingChoice() {
  return (
    <Section id="booking" className="bg-white">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div>
          <Reveal>
            <SectionCaption>Your own branded home</SectionCaption>
            <h2 className="mt-4 max-w-[28rem] font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              Send customers to you—not a marketplace.
            </h2>
            <p className="mt-3 max-w-[32rem] text-base leading-relaxed text-meridian-muted">
              Your branding, your services, your bookings. One proper online home.
            </p>
          </Reveal>

          <ul className="mt-6 grid gap-3">
            {points.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60} as="li">
                <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="surface" />
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delayMs={100} className="flex justify-center lg:justify-end">
          <IllustrationSlot
            label="Your own website"
            brief="Friendly shop window with the business name and a clear Book now moment."
            className="w-full max-w-[20rem] bg-meridian-soft md:max-w-[24rem]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
