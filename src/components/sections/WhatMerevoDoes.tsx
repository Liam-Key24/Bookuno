import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'

/** What’s included: product surface + managed foundation, merged. */
const rooms = [
  {
    title: 'Your website',
    body: 'A polished online front door for your business.',
    label: 'Website illustration',
    brief: 'Clean shop-front window with a soft Open sign and calm brand colours.',
  },
  {
    title: 'Booking requests',
    body: 'No more customer messages hiding in the inbox jungle.',
    label: 'Bookings illustration',
    brief: 'Simple calendar and request note waiting neatly by the door.',
  },
  {
    title: 'Hosting & security',
    body: 'Kept online, protected and looked after. No server shopping.',
    label: 'Hosting illustration',
    brief: 'Quiet lock and shield resting on a soft server shelf.',
  },
  {
    title: 'Secure storage',
    body: 'The data you need to run the service, held safely.',
    label: 'Storage illustration',
    brief: 'Soft vault drawer with calm folders tucked neatly inside.',
  },
  {
    title: 'Updates & maintenance',
    body: 'We do the fiddling, fixing and button pressing.',
    label: 'Maintenance illustration',
    brief: 'Friendly toolkit and a tidy wrench beside a glowing update light.',
  },
  {
    title: 'Human support',
    body: 'A real person in your corner when you need one. Not a ticket black hole.',
    label: 'Support illustration',
    brief: 'Warm desk lamp and a small headset ready for a helpful chat.',
  },
] as const

export function WhatMerevoDoes() {
  return (
    <Section id="features" className="bg-meridian-surface">
      <Reveal className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
          What’s under the roof?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">
          The useful stuff, quietly handled—including the behind-the-scenes bits.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {rooms.map((room, index) => (
          <Reveal key={room.title} delayMs={index * 60} as="li">
            <article className="flex h-full flex-col rounded-[1.25rem] bg-white p-6 md:p-7">
              <h3 className="font-display text-xl font-bold tracking-tight text-meridian-ink md:text-2xl">
                {room.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                {room.body}
              </p>
              <IllustrationSlot
                label={room.label}
                brief={room.brief}
                className="mt-6 aspect-[16/11] w-full max-w-none flex-1 bg-meridian-soft/30 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
              />
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
