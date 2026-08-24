import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

type PageCtaProps = {
  title: string
  body: string
}

export function PageCta({ title, body }: PageCtaProps) {
  return (
    <section className="w-full bg-white">
      <Reveal className="m-2 w-auto">
        <div className="rounded-meridian bg-meridian-deep px-5 py-10 text-center md:px-8 md:py-12 lg:px-12 lg:py-14">
          <h2 className="mx-auto max-w-[28rem] font-display text-[1.6rem] font-bold tracking-tight text-white sm:text-[1.95rem]">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-relaxed text-white/75 sm:text-base">
            {body}
          </p>
          <Button href="/#contact" variant="accent" className="mt-6">
            Get started with Merevo
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
