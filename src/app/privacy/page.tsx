import type { Metadata } from 'next'
import { LegalLayout } from '@/components/sections/LegalLayout'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} collects and uses information on this marketing site.`,
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="24 August 2026">
      <p>
        {SITE_NAME} (“we”) operates this marketing website for independent service businesses.
        This notice explains what we collect and why.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        What we collect
      </h2>
      <ul className="list-disc space-y-[0.4rem] pl-[1.25rem]">
        <li>
          Contact details you submit on our lead form (name, email, optional business details,
          and message).
        </li>
        <li>
          Newsletter signup details (email, optional first name, and a timestamp of your explicit
          promotional-email consent) when you subscribe from the site footer.
        </li>
        <li>
          A local preference for analytics consent (stored in your browser).
        </li>
        <li>
          Optional privacy-conscious analytics events if you accept analytics: CTA clicks and
          successful form submissions. These events do not include your email or message content.
        </li>
      </ul>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        How we use it
      </h2>
      <p>
        Lead details are used to reply about the {SITE_NAME} founding offer, send a confirmation
        email, and notify our founder inbox. Newsletter details are used only for optional
        promotional updates after you confirm your email; you can unsubscribe at any time via the
        link in each campaign. Analytics (only with consent) help us understand which calls to
        action are useful.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Storage & processors
      </h2>
      <p>
        Leads and newsletter subscribers are stored in Supabase. Transactional and promotional
        emails are sent with Resend. Optional analytics may use a first-party endpoint and, if
        configured, Plausible. We do not sell your personal information.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Contact
      </h2>
      <p>
        Questions about privacy:{' '}
        <a className="font-medium text-meridian-deep underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalLayout>
  )
}
