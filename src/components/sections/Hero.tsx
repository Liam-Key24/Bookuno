import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { SectionCaption } from '@/components/sections/SectionCaption'

export function Hero() {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-2 md:px-5 md:pb-16 lg:px-6">
      <div className="mx-auto grid w-full max-w-[96rem] min-h-[min(78vh,52rem)] items-center gap-10 rounded-meridian bg-meridian-surface px-5 py-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <Reveal className="flex max-w-[40rem] flex-col items-start">
          <SectionCaption>Less fiddling. More bookings.</SectionCaption>
          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-meridian-ink sm:text-[3.4rem] lg:text-[4.25rem]">
            Your business, ready to book.
          </h1>
          <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-meridian-muted sm:text-lg">
            Website, bookings, Stripe payments and customer marketing—set up and managed for you.
          </p>
          <p className="mt-3 text-sm font-medium text-meridian-ink sm:text-base">
            £50 a month. First three months £150 upfront, including setup.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="sm" variant="accent">
              Get started with Merevo
            </Button>
            <Button href="#features" variant="soft" size="sm">
              See what’s included
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={140} className="flex justify-center md:justify-end">
          <IllustrationSlot
            label="Hero illustration"
            brief="Cheerful shop-front with a calm booking calendar and soft accent — premium without clutter."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[28rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
