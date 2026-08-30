import { createPageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata = createPageMetadata({
  title: 'Newsletter confirmed',
  description: 'Confirmation status for your Merevo newsletter subscription.',
  path: '/newsletter/confirmed',
  noIndex: true,
})

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
          body: `Thanks for confirming. You will receive occasional ${SITE_NAME} promotional updates about managed websites, bookings and customer marketing for service businesses. You can unsubscribe any time from a newsletter email.`,
        }
      : status === 'already'
        ? {
            title: 'Already confirmed',
            body: `This confirmation link has already been used. You are on the ${SITE_NAME} newsletter list — no further action needed.`,
          }
        : status === 'error'
          ? {
              title: 'Something went wrong',
              body: `We could not confirm your subscription right now. Please try the link again in a moment, or email ${CONTACT_EMAIL}.`,
            }
          : {
              title: 'Link unavailable',
              body: `This confirmation link is invalid or has expired. If you still want updates, subscribe again from the ${SITE_NAME} website footer.`,
            }

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-[40rem] flex-col justify-center px-4 py-20 md:px-5">
      <p className="font-display text-sm font-bold tracking-tight text-meridian-deep">{SITE_NAME}</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-meridian-ink">
        {copy.title}
      </h1>
      <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted">{copy.body}</p>
      <p className="mt-[2rem]">
        <Link
          href="/"
          className="inline-flex rounded-meridian bg-meridian-deep px-[1.25rem] py-[0.75rem] text-sm font-medium text-white transition-colors hover:bg-meridian-mid"
        >
          Back to {SITE_NAME}
        </Link>
      </p>
    </main>
  )
}
