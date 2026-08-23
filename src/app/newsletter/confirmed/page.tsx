import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter confirmed — Meridian',
  robots: { index: false, follow: false },
}

export default async function NewsletterConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams

  const copy =
    status === 'confirmed'
      ? {
          title: 'You are subscribed',
          body: 'Thanks for confirming. You will receive occasional Meridian promotional updates about managed websites for salons, barbers, and restaurants. You can unsubscribe any time from a newsletter email.',
        }
      : status === 'already'
        ? {
            title: 'Already confirmed',
            body: 'This confirmation link has already been used. You are on the Meridian newsletter list — no further action needed.',
          }
        : status === 'error'
          ? {
              title: 'Something went wrong',
              body: 'We could not confirm your subscription right now. Please try the link again in a moment, or email hello@meridian.studio.',
            }
          : {
              title: 'Link unavailable',
              body: 'This confirmation link is invalid or has expired. If you still want updates, subscribe again from the Meridian website footer.',
            }

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-[40rem] flex-col justify-center px-[1.5rem] py-[4rem]">
      <p className="text-sm font-semibold tracking-tight text-meridian-deep">Meridian</p>
      <h1 className="mt-[0.75rem] text-3xl font-semibold tracking-tight text-meridian-ink">
        {copy.title}
      </h1>
      <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted">{copy.body}</p>
      <p className="mt-[2rem]">
        <Link
          href="/"
          className="inline-flex rounded-[20px] bg-meridian-deep px-[1.25rem] py-[0.75rem] text-sm font-medium text-white transition-colors hover:bg-meridian-mid"
        >
          Back to Meridian
        </Link>
      </p>
    </main>
  )
}
