'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { sectionBandPad } from '@/lib/uiClasses'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-white">
      <section
        className={`flex min-h-[min(70vh,36rem)] flex-col items-center justify-center text-center ${sectionBandPad}`}
      >
        <p className="text-sm font-semibold tracking-wide text-meridian-muted">Something went wrong</p>
        <h1 className="mt-2 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.5rem]">
          We hit a snag
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-meridian-muted">
          The page could not load properly. You can try again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button type="button" variant="accent" onClick={reset}>
            Try again
          </Button>
          <Button href="/">Back to home</Button>
        </div>
      </section>
    </main>
  )
}
