import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unsubscribed — Meridian',
  robots: { index: false, follow: false },
}

export default async function NewsletterUnsubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams

  const copy =
    status === 'unsubscribed'
      ? {
          title: 'You are unsubscribed',
          body: 'You have been removed from Meridian promotional emails. You will not receive further newsletter campaigns unless you subscribe again.',
        }
      : status === 'already'
        ? {
            title: 'Already unsubscribed',
            body: 'This address is already unsubscribed from the Meridian newsletter. No further action is needed.',
          }
        : status === 'error'
          ? {
              title: 'Something went wrong',
              body: 'We could not process your unsubscribe request right now. Please try again shortly, or email hello@meridian.studio.',
            }
          : {
              title: 'Link unavailable',
              body: 'This unsubscribe link is invalid. If you still receive emails, use the unsubscribe link in the latest message or contact hello@meridian.studio.',
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
