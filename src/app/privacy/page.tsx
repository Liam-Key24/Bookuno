import type { Metadata } from 'next'
import { LegalLayout } from '@/components/sections/LegalLayout'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Meridian',
  description: 'How Meridian collects and uses information on this marketing site.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="22 August 2026">
      <p>
        Meridian (“we”) operates this marketing website for independent salons, barbers, and
        restaurants. This notice explains what we collect and why.
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
          A local preference for analytics consent (stored in your browser).
        </li>
        <li>
          Optional privacy-conscious analytics events if you accept analytics: CTA clicks,
          successful form submissions, and external booking-link clicks. These events do not
          include your email or message content.
        </li>
      </ul>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        How we use it
      </h2>
      <p>
        Lead details are used to reply about the Meridian founding offer, send a confirmation
        email, and notify our founder inbox. Analytics (only with consent) help us understand
        which calls to action are useful.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Storage & processors
      </h2>
      <p>
        Leads are stored in Supabase. Transactional emails are sent with Resend. Optional
        analytics may use a first-party endpoint and, if configured, Plausible. We do not sell
        your personal information.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Contact
      </h2>
      <p>
        Questions about privacy: {' '}
        <a className="font-medium text-meridian-deep underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalLayout>
  )
}
