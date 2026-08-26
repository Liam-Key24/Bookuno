import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

/** What’s included: product + managed bits + branded-home idea. */
const rooms = [
  {
    title: 'Your website',
    body: 'Your branding on the door. Customers land on you, not a marketplace.',
  },
  {
    title: 'Booking requests',
    body: 'Bookings stay with your business and domain, not lost in the inbox.',
  },
  {
    title: 'Hosting & security',
    body: 'Kept online, protected and looked after. No server shopping.',
  },
  {
    title: 'Secure storage',
    body: 'The data you need to run the service, held safely.',
  },
  {
    title: 'Updates & maintenance',
    body: 'We do the fiddling, fixing and button pressing.',
  },
  {
    title: 'Human support',
    body: 'A real person in your corner when you need one.',
  },
] as const

export function WhatMerevoDoes() {
  return (
    <Section
      id="features"
      className="flex min-h-[100svh] flex-col justify-center bg-white !py-12 md:!py-16 lg:!py-20"
    >
      <Reveal className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          What’s under the roof?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          One proper online home. The useful stuff, quietly handled—including the behind
          the scenes bits.
        </p>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14">
        <Reveal className="flex justify-center lg:justify-start">
          <IllustrationSlot
            label="Your own website"
            brief="Friendly shop window with the business name and a clear Book now moment."
            className="aspect-auto h-[min(48vh,26rem)] w-full max-w-[22rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65 lg:max-w-none"
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
          {rooms.map((room, index) => (
            <Reveal key={room.title} delayMs={index * 50} as="li">
              <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                {room.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                {room.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
