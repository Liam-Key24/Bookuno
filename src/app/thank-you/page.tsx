import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Thank you | Meridian',
  description: 'We received your message and sent a confirmation email.',
}

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="w-full px-[1.5rem] py-[4rem] md:px-[2.5rem] md:py-[5rem] lg:px-[3rem]">
        <div className="mx-auto max-w-[36rem] rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.75rem] text-center md:px-[2.5rem]">
          <p className="text-sm font-medium tracking-tight text-meridian-deep">Message received</p>
          <h1 className="mt-[0.75rem] text-[2rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.4rem]">
            Thank you — we’ll be in touch.
          </h1>
          <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted">
            Your details were saved securely and a confirmation email is on its way. Prefer to
            add anything? Reply to that email or write to us again from the contact form.
          </p>
          <div className="mt-[1.75rem] flex flex-wrap items-center justify-center gap-[0.75rem]">
            <Button href="/" variant="accent">
              Back to home
            </Button>
            <Button href="/pricing">See founding offer</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
