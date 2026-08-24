import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export function Hero() {
  return (
    <section className="w-full bg-white px-[1.5rem] pb-[2rem] pt-[0.5rem] md:px-[2.5rem] md:pb-[2.5rem] lg:px-[3rem]">
      <div className="grid w-full items-center gap-[2.5rem] rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.5rem] md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-[3rem] md:px-[2.5rem] md:py-[3.5rem] lg:px-[3rem] lg:py-[4rem]">
        <div className="flex max-w-[38rem] flex-col items-start">
          <p className="text-sm font-medium tracking-tight text-meridian-deep">Merevo</p>
          <h1 className="mt-[0.65rem] text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-meridian-ink sm:text-[2.75rem] lg:text-[3.35rem]">
            Your business, ready to book.
          </h1>
          <p className="mt-[1.15rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            A lovely website, online bookings, Stripe payments and customer marketing—all set up
            and managed for you.
          </p>
          <p className="mt-[0.85rem] max-w-[34rem] text-sm font-medium leading-relaxed text-meridian-ink sm:text-base">
            £50 a month. Your first three months are £150 upfront, including setup.
          </p>

          <div className="mt-[2rem] flex flex-wrap items-center gap-[0.75rem]">
            <Button href="#contact" size="sm">
              Get started with Merevo
            </Button>
            <Button href="#features" variant="soft" size="sm">
              See what’s included
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <IllustrationSlot
            label="Hero illustration"
            brief="Cheerful, tidy shop-front scene with a calm booking calendar and soft accent — premium without clutter, friendly without childish."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[26rem]"
          />
        </div>
      </div>
    </section>
  )
}
