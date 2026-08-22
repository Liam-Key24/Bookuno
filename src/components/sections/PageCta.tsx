import { Button } from '@/components/ui/Button'

type PageCtaProps = {
  title: string
  body: string
}

export function PageCta({ title, body }: PageCtaProps) {
  return (
    <section className="w-full bg-white px-[1.5rem] pb-[3rem] md:px-[2.5rem] md:pb-[4rem] lg:px-[3rem]">
      <div className="rounded-[20px] bg-meridian-deep px-[1.5rem] py-[2.25rem] text-center md:px-[2.5rem] md:py-[2.75rem]">
        <h2 className="mx-auto max-w-[26rem] text-[1.6rem] font-semibold tracking-tight text-white sm:text-[1.85rem]">
          {title}
        </h2>
        <p className="mx-auto mt-[0.75rem] max-w-[30rem] text-sm leading-relaxed text-white/75 sm:text-base">
          {body}
        </p>
        <Button href="/#contact" variant="accent" className="mt-[1.5rem]">
          Get in touch
        </Button>
      </div>
    </section>
  )
}
