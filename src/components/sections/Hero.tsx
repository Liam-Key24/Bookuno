import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export function Hero() {
  return (
    <section className="w-full bg-white px-[1.5rem] pb-[2rem] pt-[0.5rem] md:px-[2.5rem] md:pb-[2.5rem] lg:px-[3rem]">
      <div className="grid w-full items-center gap-[2.5rem] rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.5rem] md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-[3rem] md:px-[2.5rem] md:py-[3.5rem] lg:px-[3rem] lg:py-[4rem]">
        <div className="flex max-w-[36rem] flex-col items-start">
          <h1 className="text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-meridian-ink sm:text-[2.75rem] lg:text-[3.35rem]">
            Your website should be pulling its weight,
            <span className="mt-[0.15em] block">not pulling your hair out.</span>
          </h1>

          <Button href="#contact" size="sm" className="mt-[2rem]">
            Book a call
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <IllustrationSlot
            label="Hero illustration"
            brief="Calm, playful scene of a tidy site doing the work — soft teal shapes, light UI chrome, and a warm accent moment that feels premium without clutter."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[26rem]"
          />
        </div>
      </div>
    </section>
  )
}
