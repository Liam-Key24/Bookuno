import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { SectionCaption } from '@/components/sections/SectionCaption'

export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="m-2 grid w-auto min-h-[min(68vh,42rem)] items-center justify-center gap-8 rounded-meridian bg-meridian-soft px-5 py-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
        <Reveal className="flex w-full max-w-[40rem] flex-col items-start justify-self-center md:justify-self-start">
          <SectionCaption className="text-meridian-ink/70">Less fiddling. More bookings.</SectionCaption>
          <h1 className="mt-4 font-display text-[2.4rem] font-bold leading-[1.02] tracking-tight text-meridian-ink sm:text-[3.1rem] lg:text-[3.85rem]">
            Your business, ready to book.
          </h1>
          <p className="mt-4 max-w-[30rem] text-base leading-relaxed text-meridian-ink/75 sm:text-lg">
            Website, bookings, Stripe payments and customer marketing—set up and managed for you.
          </p>
          <p className="mt-2 text-sm font-medium text-meridian-ink sm:text-base">
            £50 a month. First three months £150 upfront, including setup.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="sm" variant="accent">
              Get started with Merevo
            </Button>
            <Button href="#features" variant="soft" size="sm">
              See what’s included
            </Button>
          </div>
        </Reveal>

        <Reveal
          delayMs={140}
          className="flex w-full justify-center justify-self-center md:justify-end md:justify-self-end"
        >
          <IllustrationSlot
            label="Hero illustration"
            brief="Cheerful shop-front with a calm booking calendar and soft accent — premium without clutter."
            className="w-full max-w-[20rem] bg-white/35 md:max-w-[24rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
