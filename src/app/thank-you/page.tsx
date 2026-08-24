import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionCaption } from '@/components/sections/SectionCaption'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'We received your message and sent a confirmation email.',
}

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="w-full">
        <div className="m-2 mx-auto max-w-[40rem] rounded-meridian bg-meridian-soft px-5 py-10 text-center md:px-8">
          <SectionCaption className="text-meridian-ink/70">Message received</SectionCaption>
          <h1 className="mt-4 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]">
            Thank you — we’ll be in touch.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-meridian-ink/75">
            Your details were saved securely and a confirmation email is on its way.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
