import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const points = [
  {
    title: 'Your branding',
    caption: 'CUSTOMERS LAND ON YOUR SITE, NOT SOMEBODY ELSE’S',
  },
  {
    title: 'Your online home',
    caption: 'BOOKINGS STAY WITH YOUR BUSINESS AND DOMAIN',
  },
  {
    title: 'Template, not from scratch',
    caption: 'QUICK, DEPENDABLE AND AFFORDABLE TO SET UP',
  },
] as const

export function BookingChoice() {
  return (
    <Section id="booking" className="bg-white">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <Reveal>
            <SectionCaption>Your own branded home</SectionCaption>
            <h2 className="mt-5 max-w-[28rem] font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
              Send customers to you—not a marketplace.
            </h2>
            <p className="mt-4 max-w-[32rem] text-base leading-relaxed text-meridian-muted">
              Your branding, your services, your bookings. One proper online home.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4">
            {points.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70} as="li">
                <article className="rounded-meridian bg-meridian-surface px-7 py-8 md:px-9 md:py-10">
                  <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                    {item.caption}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delayMs={120} className="flex justify-center lg:justify-end lg:pt-16">
          <IllustrationSlot
            label="Your own website"
            brief="Friendly shop window with the business name and a clear Book now moment."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[28rem]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
