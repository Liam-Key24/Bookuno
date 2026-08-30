import { LegalLayout, LegalSection } from '@/components/sections/LegalLayout'
import { LEGAL_EFFECTIVE_DATE, LEGAL_JURISDICTION } from '@/lib/legal'
import { createPageMetadata } from '@/lib/metadata'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

const siteHost = SITE_URL.replace(/^https?:\/\//, '')

export const metadata = createPageMetadata({
  title: 'Terms and Conditions',
  description:
    'Website and service terms for Merevo, including domains, fees, cancellation and data protection.',
  path: '/terms',
})

const nav = [
  { id: 'about-merevo', label: '1. About Merevo' },
  { id: 'website-use', label: '2. Website use' },
  { id: 'service-scope', label: '3. Service scope' },
  { id: 'client-responsibilities', label: '4. Client responsibilities' },
  { id: 'booking-and-enquiry', label: '5. Booking and enquiry functionality' },
  { id: 'existing-domains', label: '6. Existing domains' },
  { id: 'domains-purchased', label: '7. Domains purchased for a client' },
  { id: 'content-and-changes', label: '8. Content and changes' },
  { id: 'third-party-services', label: '9. Third-party services' },
  { id: 'fees-and-payment', label: '10. Fees and payment' },
  { id: 'cancellation-and-termination', label: '11. Cancellation and termination' },
  { id: 'intellectual-property', label: '12. Intellectual property' },
  { id: 'confidentiality', label: '13. Confidentiality' },
  { id: 'data-protection', label: '14. Data protection' },
  { id: 'security-incidents', label: '15. Security incidents' },
  { id: 'availability-and-backups', label: '16. Availability and backups' },
  { id: 'disclaimers', label: '17. Disclaimers' },
  { id: 'liability', label: '18. Liability' },
  { id: 'client-indemnity', label: '19. Client indemnity' },
  { id: 'changes-to-these-terms', label: '20. Changes to these terms' },
  { id: 'complaints', label: '21. Complaints' },
  { id: 'governing-law', label: '22. Governing law' },
  { id: 'general', label: '23. General' },
] as const

export default function TermsPage() {
  return (
    <LegalLayout
      title="Merevo Website and Service Terms"
      updated={LEGAL_EFFECTIVE_DATE}
      nav={nav}
    >
      <div className="space-y-4 text-sm leading-relaxed text-black md:text-base">
        <p>
          These terms apply to use of{' '}
          <a href={SITE_URL}>{siteHost}</a>. Paid clients must also accept the applicable order
          form, pricing schedule, Service Terms and Data Processing Addendum.
        </p>
      </div>

      <LegalSection id="about-merevo" title="1. About Merevo">
        <p>
          Merevo is the trading name for our managed website, booking and customer marketing
          service. Registered company details are available on request at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalSection>

      <LegalSection id="website-use" title="2. Website use">
        <p>You may use the website for lawful business purposes only. You must not:</p>
        <ul>
          <li>misuse, attack or interfere with the website;</li>
          <li>attempt to gain unauthorised access;</li>
          <li>submit malicious, unlawful or misleading material;</li>
          <li>impersonate another person or business;</li>
          <li>use the website to distribute spam or harmful code;</li>
          <li>copy Merevo branding, templates or content without permission.</li>
        </ul>
        <p>
          We may restrict access where necessary to protect the website, users or our legal
          interests.
        </p>
      </LegalSection>

      <LegalSection id="service-scope" title="3. Service scope">
        <p>
          The exact services included for a client are those stated in the accepted order form or
          pricing page.
        </p>
        <p>A typical service may include:</p>
        <ul>
          <li>website setup using an agreed template;</li>
          <li>hosting and SSL;</li>
          <li>enquiry or booking-request capture;</li>
          <li>reasonable content and configuration updates;</li>
          <li>technical maintenance and support;</li>
          <li>email notifications;</li>
          <li>approved integrations with existing booking systems.</li>
        </ul>
        <p>
          Features not expressly included are outside scope and may require a separate quote.
        </p>
      </LegalSection>

      <LegalSection id="client-responsibilities" title="4. Client responsibilities">
        <p>The client must:</p>
        <ul>
          <li>
            provide accurate business, contact, pricing, opening-hours and availability
            information;
          </li>
          <li>
            own or have permission to use all supplied text, images, logos, fonts and other
            content;
          </li>
          <li>review and approve content before publication;</li>
          <li>keep account, registrar and recovery details accurate;</li>
          <li>provide lawful instructions for personal-data processing;</li>
          <li>maintain appropriate customer-facing privacy notices and booking policies;</li>
          <li>respond to booking requests and customer enquiries;</li>
          <li>
            ensure its services, prices, claims and promotions comply with applicable law;
          </li>
          <li>keep staff access secure and notify Merevo of suspected compromise.</li>
        </ul>
        <p>
          Merevo is not responsible for losses caused by inaccurate, late or unlawful client
          instructions.
        </p>
      </LegalSection>

      <LegalSection id="booking-and-enquiry" title="5. Booking and enquiry functionality">
        <p>
          A booking request is not a confirmed appointment or reservation until the client business
          approves it and the required confirmation is issued.
        </p>
        <p>The client is responsible for:</p>
        <ul>
          <li>opening hours, availability and service duration;</li>
          <li>approving, declining or amending requests;</li>
          <li>cancellations, refunds, deposits and no-shows;</li>
          <li>customer communication;</li>
          <li>allergy, accessibility and other customer information;</li>
          <li>ensuring the booking flow matches its real-world operation.</li>
        </ul>
        <p>
          Merevo does not guarantee that every email, SMS, external integration or calendar
          connection will be delivered or remain available.
        </p>
      </LegalSection>

      <LegalSection id="existing-domains" title="6. Existing domains">
        <p>
          A domain already owned by a client remains the client’s property. Merevo receives
          permission only to manage technical settings required to provide the service.
        </p>
        <p>
          The client remains responsible for registrar billing and renewal unless the order form
          expressly says otherwise.
        </p>
      </LegalSection>

      <LegalSection id="domains-purchased" title="7. Domains purchased for a client">
        <p>Where Merevo purchases a new domain for a client:</p>
        <ul>
          <li>
            it should be registered in the client’s legal or trading name where the registrar
            permits;
          </li>
          <li>Merevo may manage the registrar account and DNS on the client’s behalf;</li>
          <li>domain availability is not guaranteed;</li>
          <li>premium, additional and renewal costs require client approval;</li>
          <li>
            transfer or account handover begins within five working days after termination and
            client cooperation;
          </li>
          <li>completion is subject to registrar, registry and transfer-lock rules.</li>
        </ul>
        <p>Merevo will not represent a client-owned domain as Merevo’s asset.</p>
      </LegalSection>

      <LegalSection id="content-and-changes" title="8. Content and changes">
        <p>The included update allowance covers only the changes stated in the order form.</p>
        <p>
          Additional template pages, custom layouts, new functionality, copywriting, photography,
          integrations or redesign work require written approval and may be charged separately.
        </p>
        <p>The client remains responsible for checking all published content.</p>
      </LegalSection>

      <LegalSection id="third-party-services" title="9. Third-party services">
        <p>
          Merevo may rely on third-party providers such as hosting, databases, email delivery,
          payment processors, domain registrars, security services and analytics providers.
        </p>
        <p>
          Those providers have their own terms, pricing, availability and privacy practices.
          Merevo is not responsible for a third party’s independent outage, policy change,
          account suspension or failure, although we will take reasonable steps to assist with
          troubleshooting.
        </p>
      </LegalSection>

      <LegalSection id="fees-and-payment" title="10. Fees and payment">
        <p>
          Fees, VAT and included allowances are stated in the applicable order form or pricing
          page.
        </p>
        <p>Unless otherwise agreed:</p>
        <ul>
          <li>the minimum service term is three months;</li>
          <li>the service then continues monthly;</li>
          <li>payment is taken using the agreed payment method;</li>
          <li>third-party charges outside the allowance require approval;</li>
          <li>
            unpaid invoices may result in restricted access, paused updates or suspended hosting
            after reasonable notice.
          </li>
        </ul>
        <p>
          No additional charge will be made without a contractual basis or the client’s approval
          where approval is required.
        </p>
      </LegalSection>

      <LegalSection id="cancellation-and-termination" title="11. Cancellation and termination">
        <p>
          Either party may terminate after the minimum term by giving <strong>30 days</strong>{' '}
          written notice.
        </p>
        <p>Merevo may terminate or suspend immediately where necessary for:</p>
        <ul>
          <li>serious breach;</li>
          <li>unlawful use;</li>
          <li>security or abuse risk;</li>
          <li>non-payment after notice;</li>
          <li>insolvency;</li>
          <li>instructions that would place Merevo in breach of law.</li>
        </ul>
        <p>
          On termination, Merevo will provide reasonable handover assistance, subject to the
          agreed exit process and payment of applicable handover, domain or third-party charges.
        </p>
        <p>
          Client data will be returned or deleted in accordance with the Data Processing Addendum
          and the client’s instructions.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="12. Intellectual property">
        <p>The client owns content, branding and materials supplied by the client.</p>
        <p>
          Merevo retains ownership of its pre-existing code, systems, templates, design
          components, processes and know-how.
        </p>
        <p>
          During the paid service, Merevo grants the client a limited licence to use the supplied
          website and Merevo components for the client’s own business.
        </p>
        <p>
          Any transfer of source code, reusable components or ownership rights must be expressly
          agreed in writing.
        </p>
      </LegalSection>

      <LegalSection id="confidentiality" title="13. Confidentiality">
        <p>
          Each party must keep the other party’s confidential information secure and use it only
          for the agreed relationship. This obligation does not apply to information that is
          public, independently developed, already lawfully known or required to be disclosed by
          law.
        </p>
      </LegalSection>

      <LegalSection id="data-protection" title="14. Data protection">
        <p>The parties must comply with applicable UK data-protection law.</p>
        <p>
          For marketing leads, Merevo normally acts as controller. For client booking and
          customer data, the client normally acts as controller and Merevo as processor.
        </p>
        <p>
          The parties must sign the applicable Data Processing Addendum before production
          processing begins. It will specify the data, purposes, retention, security measures,
          subprocessors, international transfers, breach assistance and end-of-contract deletion or
          return.
        </p>
      </LegalSection>

      <LegalSection id="security-incidents" title="15. Security incidents">
        <p>
          Each party must notify the other without undue delay after becoming aware of a suspected
          personal-data or account-security incident affecting the service.
        </p>
        <p>
          The parties will cooperate on containment, investigation, evidence preservation,
          notifications and remediation.
        </p>
      </LegalSection>

      <LegalSection id="availability-and-backups" title="16. Availability and backups">
        <p>
          We aim to provide a reliable service but do not promise uninterrupted or error-free
          availability.
        </p>
        <p>
          Maintenance, infrastructure failures, internet outages, cyberattacks, provider failures
          and events outside our reasonable control may affect availability.
        </p>
        <p>
          Backups are a recovery measure, not a guarantee that every item can be restored. Clients
          should retain copies of critical business information.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="17. Disclaimers">
        <p>Merevo does not guarantee:</p>
        <ul>
          <li>a particular number of leads, bookings or sales;</li>
          <li>search-engine ranking;</li>
          <li>uninterrupted third-party services;</li>
          <li>delivery of every email or notification;</li>
          <li>that the client’s business will comply with every legal obligation;</li>
          <li>that the client’s content, pricing or customer policies are lawful.</li>
        </ul>
        <p>
          The client remains responsible for operating its business and reviewing the suitability
          of the service.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="18. Liability">
        <p>
          Nothing in these terms excludes or limits liability that cannot legally be excluded,
          including liability for death or personal injury caused by negligence, fraud or
          fraudulent misrepresentation, or mandatory statutory rights.
        </p>
        <p>
          Subject to that limitation, Merevo’s total liability arising from a client’s service
          will be limited to{' '}
          <strong>the fees paid in the previous 12 months</strong>.
        </p>
        <p>
          Merevo will not be liable for indirect or consequential loss, loss of profit, loss of
          goodwill, loss of anticipated savings or losses caused by third-party services,
          inaccurate client information or events outside reasonable control.
        </p>
        <p>
          This clause must be reviewed and adjusted by a solicitor, particularly where clients may
          be consumers or where sensitive information is processed.
        </p>
      </LegalSection>

      <LegalSection id="client-indemnity" title="19. Client indemnity">
        <p>
          The client will reimburse Merevo for reasonable losses, claims and costs arising from:
        </p>
        <ul>
          <li>unlawful client content;</li>
          <li>infringement of another person’s intellectual-property rights;</li>
          <li>unlawful customer-data instructions;</li>
          <li>misuse of the service;</li>
          <li>the client’s products, services, bookings or customer policies.</li>
        </ul>
        <p>This does not apply to losses caused by Merevo’s own breach or negligence.</p>
      </LegalSection>

      <LegalSection id="changes-to-these-terms" title="20. Changes to these terms">
        <p>
          We may update these terms where required by law, security, service changes or new
          features. We will provide reasonable notice of material changes. Changes will not
          retrospectively remove rights already accrued.
        </p>
      </LegalSection>

      <LegalSection id="complaints" title="21. Complaints">
        <p>
          Complaints should be sent to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will acknowledge the
          complaint and try to resolve it fairly and promptly.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="22. Governing law">
        <p>
          These terms are governed by the law of{' '}
          <strong>{LEGAL_JURISDICTION}</strong>. The courts of that
          jurisdiction will have authority, subject to any mandatory rights that apply to a
          consumer or other protected party.
        </p>
      </LegalSection>

      <LegalSection id="general" title="23. General">
        <p>If a provision is invalid, the remaining provisions continue.</p>
        <p>
          Failure to enforce a provision immediately does not waive the right to enforce it later.
        </p>
        <p>
          These terms, the accepted order form, pricing schedule and applicable Data Processing
          Addendum form the agreement between the parties.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
