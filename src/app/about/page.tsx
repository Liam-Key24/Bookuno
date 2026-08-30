import type { Metadata } from 'next'
import {
  CookingPot,
  Code,
  Sparkle,
} from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { PageCta } from '@/components/sections/PageCta'
import { Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import {
  contentShell,
  featureCard,
  sectionBandPadLoose,
  splitGridReverse,
} from '@/lib/uiClasses'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Merevo started after watching a family restaurant struggle with bookings. Affordable, simple tech for independent service businesses.',
}

const pillars: readonly {
  icon: Icon
  iconClass: string
  title: string
  body: string
  tilt: string
}[] = [
  {
    icon: CookingPot,
    iconClass: 'text-meridian-accent',
    title: 'Built from a real kitchen',
    body: 'It started with a family restaurant that needed bookings—not another complicated stack of tools.',
    tilt: '-rotate-1',
  },
  {
    icon: Code,
    iconClass: 'text-meridian-mid',
    title: 'Five years in tech',
    body: 'Hands-on experience building and shipping software, turned toward the everyday problems small businesses actually face.',
    tilt: 'rotate-1',
  },
  {
    icon: Sparkle,
    iconClass: 'text-meridian-deep',
    title: 'Simple and affordable',
    body: 'Useful tech should be clear, fairly priced, and looked after for you—not another Sunday night of DIY.',
    tilt: '-rotate-1',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section
        className={`flex min-h-[min(90svh,44rem)] w-full flex-col justify-center bg-white ${sectionBandPadLoose}`}
      >
        <div className={`${contentShell} ${splitGridReverse}`}>
          <Reveal>
            <h1 className="max-w-[22rem] font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:max-w-[28rem] sm:text-[3rem] lg:text-[3.35rem]">
              Made for businesses that are already busy.
            </h1>
            <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-meridian-muted sm:text-lg">
              Merevo exists because small places deserve a proper online home—without needing a tech
              team, a plugin maze, or another evening lost to admin.
            </p>
            <div className="mt-8">
              <Button href="/#contact" variant="accent">
                Get started with Merevo
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="flex justify-center lg:justify-end">
            <IllustrationSlot
              label="About Merevo"
              brief="Warm portrait of a founder and a family restaurant doorway, soft teal light."
              tone="ink"
              className="aspect-[5/4] w-full max-w-[26rem] bg-meridian-soft/40 lg:max-w-none"
            />
          </Reveal>
        </div>
      </section>

      <Section className="relative overflow-hidden !py-28 md:!py-36 lg:!py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 size-[min(18rem,42vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meridian-soft/20 blur-3xl"
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
          <Reveal className="flex justify-center lg:justify-start">
            <IllustrationSlot
              label="The restaurant that started it"
              brief="Quiet restaurant front with a bookings notepad and a soft orange lamp on the counter."
              tone="ink"
              className="aspect-auto h-[min(44vh,24rem)] w-full max-w-[22rem] bg-white/60 lg:max-w-none"
            />
          </Reveal>

          <Reveal delayMs={60}>
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
              It started with my dad’s restaurant.
            </h2>
            <div className="mt-5 max-w-[36rem] space-y-4 text-base leading-relaxed text-meridian-muted">
              <p>
                My dad runs a restaurant. I watched him try to keep bookings coming in while
                juggling the floor, the phone, and half-finished websites that never quite worked.
                Getting found online—and turning that into tables—shouldn’t feel like a second job.
              </p>
              <p>
                I’d spent five years working in tech. So I built Merevo for him, and for every other
                small business in the same boat: restaurants, cafés, salons, barbers and service
                trades that want more bookings and a proper online presence, without needing to
                become website experts.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="relative overflow-hidden !py-28 md:!py-36 lg:!py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 size-[min(18rem,42vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meridian-accent/12 blur-3xl"
        />

        <div className="relative z-10">
          <Reveal className="mx-auto max-w-[36rem]">
            <SectionHeading
              title="What we believe"
              lede="Tech should help you get on with the work—not add another pile of logins, plugins and guesswork."
            />
          </Reveal>

          <ul className="mx-auto mt-14 grid max-w-[64rem] gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delayMs={index * 70} as="li">
                  <article
                    className={[
                      'h-full origin-center transition-transform duration-500',
                      featureCard,
                      pillar.tilt,
                    ].join(' ')}
                  >
                    <Icon
                      size={28}
                      weight="duotone"
                      className={pillar.iconClass}
                      aria-hidden
                    />
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-meridian-muted md:text-base">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </Section>

      <PageCta
        className="bg-white py-24 sm:py-28 md:!py-36 lg:!py-44"
        title="If that sounds like your kind of help"
        body="Tell us a little about your business and we’ll walk you through the founding offer."
      />
    </main>
  )
}
