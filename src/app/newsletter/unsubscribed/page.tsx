import { createPageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata = createPageMetadata({
  title: 'Unsubscribed',
  description: 'Confirmation that you have unsubscribed from Merevo promotional emails.',
  path: '/newsletter/unsubscribed',
  noIndex: true,
})

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
          body: `You have been removed from ${SITE_NAME} promotional emails. You will not receive further newsletter campaigns unless you subscribe again.`,
        }
      : status === 'already'
        ? {
            title: 'Already unsubscribed',
            body: `This address is already unsubscribed from the ${SITE_NAME} newsletter. No further action is needed.`,
          }
        : status === 'error'
          ? {
              title: 'Something went wrong',
              body: `We could not process your unsubscribe request right now. Please try again shortly, or email ${CONTACT_EMAIL}.`,
            }
          : {
              title: 'Link unavailable',
              body: `This unsubscribe link is invalid. If you still receive emails, use the unsubscribe link in the latest message or contact ${CONTACT_EMAIL}.`,
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
