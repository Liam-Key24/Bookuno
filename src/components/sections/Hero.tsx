import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { Reveal } from '@/components/motion/Reveal'
import { HeroRoleLine } from '@/components/sections/HeroRoleLine'

export function Hero() {
  return (
    <section className="relative z-10 w-full bg-white">
      <div className="relative m-2 mb-0 flex w-auto min-h-[min(80vh,50rem)] items-center justify-center overflow-hidden rounded-meridian px-5 py-10 md:px-8 md:py-12">
        {/* Blue → lighter blue at the bottom, with a soft fuzzy wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-meridian-mid via-meridian-soft to-[#b8dce4]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(ellipse_at_40%_15%,rgb(72_159_181_/_0.45),transparent_55%),radial-gradient(ellipse_at_70%_85%,rgb(184_220_228_/_0.7),transparent_50%)] blur-2xl"
        />

        <div className="relative z-10 grid w-full max-w-[70em] items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] md:gap-10 lg:gap-14">
          <Reveal className="flex flex-col items-start">
            <HeroRoleLine />
            <p className="mt-5 max-w-[28rem] text-base leading-relaxed text-white/90 sm:text-lg">
              Website, bookings and payments—managed for you. So you can get on with the work.
            </p>

            <div className="mt-8">
              <Button
                href="#features"
                size="sm"
                className="bg-white text-meridian-deep hover:bg-white/90"
              >
                Learn more
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={140} className="flex justify-center md:justify-start">
            <IllustrationSlot
              label="Hero illustration"
              brief="Cheerful shop-front with a calm booking calendar and soft accent — premium without clutter."
              className="w-full max-w-[18rem] bg-white/20 md:max-w-[22rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
