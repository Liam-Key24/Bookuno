import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export function Hero() {
  return (
    <section className="bg-white px-6 pb-10 pt-2 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-[20px] bg-meridian-surface px-8 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12 md:px-12 md:py-16 lg:px-14">
        <div className="flex max-w-xl flex-col items-start">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-meridian-ink sm:text-5xl lg:text-[3.35rem]">
            Your website should be pulling its weight,
            <span className="mt-1 block">not pulling your hair out.</span>
          </h1>

          <Button href="#contact" size="sm" className="mt-8">
            Book a call
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <IllustrationSlot
            label="Hero illustration"
            brief="Calm, playful scene of a tidy site doing the work — soft teal shapes, light UI chrome, and a warm accent moment that feels premium without clutter."
            className="bg-[#9aa7b0]"
          />
        </div>
      </div>
    </section>
  )
}
