import {
  Globe,
  CalendarCheck,
  ShieldCheck,
  HardDrives,
  Wrench,
  Headset,
} from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'
import { Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { featureCard, featureSectionLayout, stackedFeatureList } from '@/lib/uiClasses'

/** What’s included: product + managed bits + branded-home idea. */
const rooms: readonly {
  icon: Icon
  iconClass: string
  title: string
  body: string
  tilt: string
}[] = [
  {
    icon: Globe,
    iconClass: 'text-meridian-mid',
    title: 'Your website',
    body: 'Your branding on the door. Customers land on you, not a marketplace.',
    tilt: 'md:-rotate-1',
  },
  {
    icon: CalendarCheck,
    iconClass: 'text-meridian-accent',
    title: 'Booking requests',
    body: 'Bookings stay with your business and domain, not lost in the inbox.',
    tilt: 'md:rotate-1',
  },
  {
    icon: ShieldCheck,
    iconClass: 'text-meridian-deep',
    title: 'Hosting & security',
    body: 'Kept online, protected and looked after. No server shopping.',
    tilt: 'md:rotate-1',
  },
  {
    icon: HardDrives,
    iconClass: 'text-meridian-mid',
    title: 'Secure storage',
    body: 'The data you need to run the service, held safely.',
    tilt: 'md:-rotate-1',
  },
  {
    icon: Wrench,
    iconClass: 'text-meridian-accent',
    title: 'Updates & maintenance',
    body: 'We do the fiddling, fixing and button pressing.',
    tilt: 'md:-rotate-1',
  },
  {
    icon: Headset,
    iconClass: 'text-meridian-deep',
    title: 'Human support',
    body: 'A real person in your corner when you need one.',
    tilt: 'md:rotate-1',
  },
]

export function WhatMerevoDoes() {
  return (
    <Section
      id="features"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-x-clip !py-20 md:!py-28 lg:!py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] bottom-[18%] bg-gradient-to-b from-transparent via-meridian-accent/12 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[min(36rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meridian-accent/12 blur-3xl"
      />

      <div className="relative z-10 w-full min-w-0">
        <Reveal className="mx-auto max-w-[36rem]">
          <SectionHeading
            title="What’s under the roof?"
            lede="One proper online home. The useful stuff, quietly handled—including the behind the scenes bits."
          />
        </Reveal>

        <div className={featureSectionLayout}>
          <Reveal className="flex w-full min-w-0 justify-center lg:justify-start">
            <IllustrationSlot
              label="Your own website"
              brief="Friendly shop window with the business name and a clear Book now moment."
              className="aspect-auto h-[min(48vh,26rem)] w-full max-w-[22rem] bg-white/60 lg:max-w-none"
              tone="ink"
            />
          </Reveal>

          <ul className={`${stackedFeatureList} lg:grid lg:grid-cols-2 lg:gap-5`}>
            {rooms.map((room, index) => {
              const Icon = room.icon
              return (
                <Reveal key={room.title} delayMs={index * 50} as="li" className="w-full min-w-0">
                  <article
                    className={[
                      featureCard,
                      'origin-center transition-transform duration-500',
                      room.tilt,
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        size={26}
                        weight="duotone"
                        className={['mt-0.5 shrink-0', room.iconClass].join(' ')}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                          {room.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                          {room.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
