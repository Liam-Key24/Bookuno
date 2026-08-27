import { Button } from '@/components/ui/Button'

type PageCtaProps = {
  title: string
  body: string
  className?: string
}

/** Simple closing CTA — no deep panels or eyebrows. */
export function PageCta({ title, body, className = 'bg-meridian-surface' }: PageCtaProps) {
  return (
    <section
      className={['w-full px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 lg:py-28', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.2rem]">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">{body}</p>
        <Button href="/#contact" variant="accent" className="mt-8">
          Get started with Merevo
        </Button>
      </div>
    </section>
  )
}
