import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { copyShellNarrow, sectionBandPad } from '@/lib/uiClasses'

type PageCtaProps = {
  title: string
  body: string
  className?: string
}

/** Simple closing CTA — no deep panels or eyebrows. */
export function PageCta({ title, body, className = 'bg-meridian-surface' }: PageCtaProps) {
  return (
    <section className={[sectionBandPad, 'w-full', className].filter(Boolean).join(' ')}>
      <div className={copyShellNarrow}>
        <SectionHeading title={title} lede={body} align="center" />
        <div className="mt-8 flex justify-center">
          <Button href="/#contact" variant="accent">
            Get started with Merevo
          </Button>
        </div>
      </div>
    </section>
  )
}
