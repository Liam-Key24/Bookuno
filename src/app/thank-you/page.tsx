import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'We received your message and sent a confirmation email.',
}

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="w-full px-4 py-20 md:px-5 md:py-28 lg:px-6">
        <div className="mx-auto max-w-[40rem] rounded-meridian bg-meridian-surface px-6 py-14 text-center md:px-10">
          <p className="caption-quirk mx-auto w-fit">// Message received //</p>
          <h1 className="mt-5 font-display text-[2.2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.6rem]">
            Thank you — we’ll be in touch.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-meridian-muted">
            Your details were saved securely and a confirmation email is on its way.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="accent">
              Back to home
            </Button>
            <Button href="/pricing">See founding pricing</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
