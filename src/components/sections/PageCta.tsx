import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

type PageCtaProps = {
  title: string
  body: string
}

export function PageCta({ title, body }: PageCtaProps) {
  return (
    <section className="w-full bg-white px-4 pb-20 md:px-5 md:pb-28 lg:px-6 lg:pb-32">
      <Reveal className="mx-auto max-w-[96rem]">
        <div className="rounded-meridian bg-meridian-deep px-6 py-14 text-center md:px-10 md:py-16">
          <h2 className="mx-auto max-w-[28rem] font-display text-[1.75rem] font-bold tracking-tight text-white sm:text-[2.1rem]">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-relaxed text-white/75 sm:text-base">
            {body}
          </p>
          <Button href="/#contact" variant="accent" className="mt-8">
            Get started with Merevo
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
