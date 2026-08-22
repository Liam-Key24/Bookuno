import type { Metadata } from 'next'
import { LegalLayout } from '@/components/sections/LegalLayout'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service | Meridian',
  description: 'Terms for using the Meridian marketing website and founding-offer enquiries.',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="22 August 2026">
      <p>
        By using this Meridian marketing site, you agree to these simple terms. They cover the
        website and founding-offer enquiries — not a signed client services agreement.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        The site
      </h2>
      <p>
        Content is provided for information about Meridian’s managed website partnership for
        independent salons, barbers, and restaurants. Demo templates are fictional marketing
        showcases, not live client booking systems.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Enquiries
      </h2>
      <p>
        Submitting the contact form is an enquiry, not a contract. Pricing, timelines, and scope
        for founding partners are confirmed separately in writing before work begins.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Acceptable use
      </h2>
      <p>
        Don’t misuse the site or form (spam, abuse, or attempts to disrupt services). We may
        ignore or remove abusive submissions.
      </p>

      <h2 className="text-base font-semibold tracking-tight text-meridian-ink sm:text-lg">
        Contact
      </h2>
      <p>
        Questions:{' '}
        <a className="font-medium text-meridian-deep underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalLayout>
  )
}
