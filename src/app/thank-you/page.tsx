import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'We received your message and sent a confirmation email.',
}

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="flex min-h-[min(70vh,36rem)] w-full flex-col items-center justify-center px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[36rem] text-center">
          <h1 className="font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
            Thank you — we’ll be in touch.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-meridian-muted">
            Your details were saved securely and a confirmation email is on its way.
          </p>
          <IllustrationSlot
            label="Thanks"
            brief="Soft tick and a calm kettle on — message received, follow-up brewing."
            className="mx-auto mt-8 aspect-[5/4] w-full max-w-[18rem] bg-meridian-soft/40 text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65"
          />
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
