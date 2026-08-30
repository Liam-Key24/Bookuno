import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { sectionBandPad } from '@/lib/uiClasses'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="bg-white">
      <section
        className={`flex min-h-[min(70vh,36rem)] flex-col items-center justify-center text-center ${sectionBandPad}`}
      >
        <p className="text-sm font-semibold tracking-wide text-meridian-muted">404</p>
        <h1 className="mt-2 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.5rem]">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-meridian-muted">
          That link may be outdated or mistyped. Head back home or get in touch.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="accent">
            Back to home
          </Button>
          <Button href="/contact">Contact us</Button>
        </div>
      </section>
    </main>
  )
}
