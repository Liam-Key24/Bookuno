import type { Metadata } from 'next'
import { LegalLayout, LegalSection } from '@/components/sections/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How Meridian collects and uses personal information for its marketing website, newsletter and managed services.',
}

const nav = [
  { id: 'our-role', label: '1. Our role' },
  { id: 'information-we-collect', label: '2. Information we collect' },
  { id: 'how-we-use-information', label: '3. How we use information' },
  { id: 'lawful-bases', label: '4. Lawful bases' },
  { id: 'marketing-emails', label: '5. Marketing emails' },
  { id: 'cookies', label: '6. Cookies and similar technologies' },
  { id: 'service-providers', label: '7. Service providers' },
  { id: 'client-booking-data', label: '8. Client booking data' },
  { id: 'sensitive-information', label: '9. Sensitive information' },
  { id: 'retention', label: '10. Retention' },
  { id: 'your-rights', label: '11. Your rights' },
  { id: 'security-and-incidents', label: '12. Security and incidents' },
  { id: 'children', label: '13. Children' },
  { id: 'automated-decisions', label: '14. Automated decisions' },
  { id: 'changes', label: '15. Changes' },
  { id: 'contact', label: '16. Contact' },
] as const

export default function PrivacyPage() {
  return (
    <LegalLayout title="Meridian Privacy Notice" updated="[EFFECTIVE DATE]" nav={nav}>
      <div className="space-y-4 text-sm leading-relaxed text-black md:text-base">
        <p>
          Meridian is operated by <strong>[MERIDIAN LEGAL NAME]</strong>, registered at{' '}
          <strong>[REGISTERED ADDRESS]</strong>, company number <strong>[COMPANY NUMBER]</strong>.
        </p>
        <p>
          This notice explains how we collect and use personal information when you visit{' '}
          [WEBSITE URL], contact us, subscribe to our newsletter, use a Meridian-managed website, or
          use a booking or enquiry service powered by Meridian.
        </p>
      </div>

      <LegalSection id="our-role" title="1. Our role">
        <p>For visitors to the Meridian marketing website, Meridian is the data controller.</p>
        <p>
          For marketing enquiries and newsletter subscribers, Meridian decides why and how the
          information is used.
        </p>
        <p>
          For booking and customer information submitted through a client’s Meridian-managed
          website, the client business is normally the data controller and Meridian acts as its
          data processor. The client remains responsible for deciding what information it collects
          and why. Our processing for client businesses is governed by a separate Data Processing
          Addendum.
        </p>
        <p>
          We may act as a separate controller for limited operational purposes, such as security
          logs, billing records, service administration and aggregated, non-identifying service
          statistics.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information we collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>your name, email address, telephone number and business name;</li>
          <li>business type, website requirements and enquiry details;</li>
          <li>account, billing and subscription information;</li>
          <li>booking information submitted through a client website;</li>
          <li>communications between you and Meridian;</li>
          <li>newsletter subscription status and consent records;</li>
          <li>IP address, browser type, device information and security logs;</li>
          <li>cookie preferences, analytics events and marketing preferences;</li>
          <li>information needed to verify, support or secure an account.</li>
        </ul>
        <p>
          Please do not submit health, payment-card, government-identification or other sensitive
          information unless the relevant form specifically requests it.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-information" title="3. How we use information">
        <p>We use information to:</p>
        <ul>
          <li>respond to enquiries and consultation requests;</li>
          <li>provide, maintain and support Meridian services;</li>
          <li>create and administer client websites;</li>
          <li>process bookings and enquiries according to the client’s instructions;</li>
          <li>send service, security and account messages;</li>
          <li>process payments and maintain accounting records;</li>
          <li>prevent abuse, fraud, spam and unauthorised access;</li>
          <li>measure website performance where you have consented to analytics;</li>
          <li>send Meridian marketing emails where you have separately opted in;</li>
          <li>comply with legal obligations;</li>
          <li>improve our service using aggregated or anonymised information.</li>
        </ul>
        <p>We do not sell personal information.</p>
      </LegalSection>

      <LegalSection id="lawful-bases" title="4. Lawful bases">
        <p>Depending on the circumstances, we rely on:</p>
        <ul>
          <li>
            <strong>Contract:</strong> to provide a service you requested or administer an
            agreement;
          </li>
          <li>
            <strong>Legitimate interests:</strong> to answer business enquiries, secure our systems,
            maintain records and operate the service, provided those interests do not override your
            rights;
          </li>
          <li>
            <strong>Consent:</strong> for newsletter marketing, non-essential analytics and
            optional cookies;
          </li>
          <li>
            <strong>Legal obligation:</strong> for tax, accounting, regulatory and legal
            requirements.
          </li>
        </ul>
        <p>
          You may withdraw consent at any time. Withdrawal does not affect processing that took
          place before withdrawal.
        </p>
      </LegalSection>

      <LegalSection id="marketing-emails" title="5. Marketing emails">
        <p>
          Marketing emails are sent only where we have valid consent or another lawful basis
          permitted by applicable law.
        </p>
        <p>
          Marketing consent is separate from acceptance of these terms. We keep a record of when
          and how consent was provided. Every marketing email includes an unsubscribe option.
          Unsubscribing from marketing does not stop essential service, security or booking
          messages.
        </p>
        <p>
          The ICO requires consent for electronic marketing to many individual subscribers and
          requires a clear opt-out route.{' '}
          <a
            href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/"
            target="_blank"
            rel="noreferrer"
          >
            ICO PECR guidance
          </a>
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="6. Cookies and similar technologies">
        <p>
          We use strictly necessary technologies for security, authentication, form submission and
          remembering your privacy choices.
        </p>
        <p>
          We use analytics, advertising or other non-essential technologies only after obtaining
          the required consent. You can change your preferences through the cookie settings link on
          our website.
        </p>
        <p>
          Analytics cookies are not automatically exempt merely because they help us improve the
          website.{' '}
          <a
            href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/"
            target="_blank"
            rel="noreferrer"
          >
            ICO cookie guidance
          </a>
        </p>
      </LegalSection>

      <LegalSection id="service-providers" title="7. Service providers">
        <p>
          We may share information with carefully selected providers that help us operate Meridian,
          including:
        </p>
        <ul>
          <li>hosting and database providers;</li>
          <li>email delivery providers;</li>
          <li>payment processors;</li>
          <li>security, anti-spam and rate-limiting providers;</li>
          <li>analytics providers, where consent has been provided;</li>
          <li>professional advisers, insurers and legal authorities where necessary.</li>
        </ul>
        <p>
          A current subprocessor list is available at <strong>[SUBPROCESSOR URL]</strong>.
        </p>
        <p>
          Each processor must provide appropriate contractual and security safeguards. Where
          information is transferred outside the UK, we use an appropriate lawful transfer
          mechanism and document the relevant safeguards.
        </p>
      </LegalSection>

      <LegalSection id="client-booking-data" title="8. Client booking data">
        <p>Where Meridian processes booking or enquiry information for a client business:</p>
        <ul>
          <li>the client decides what data is collected;</li>
          <li>the client is responsible for its customer-facing privacy notice;</li>
          <li>Meridian processes the information only on documented instructions;</li>
          <li>Meridian does not use identifiable booking data for its own marketing;</li>
          <li>
            Meridian may use aggregated, non-identifying statistics to operate and improve the
            platform;
          </li>
          <li>
            data is returned or securely deleted at the end of the client relationship, subject to
            lawful retention requirements.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="sensitive-information" title="9. Sensitive information">
        <p>
          Information about allergies, medical conditions or other health matters may be
          special-category data under UK GDPR. Client businesses should collect it only where
          necessary, explain why it is collected, and identify an appropriate lawful basis and
          additional condition.
        </p>
        <p>
          Meridian does not require sensitive information for general marketing enquiries. If a
          client instructs us to process it, the client remains responsible for the legal basis,
          notices and instructions provided to Meridian.{' '}
          <a
            href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/"
            target="_blank"
            rel="noreferrer"
          >
            ICO special-category guidance
          </a>
        </p>
      </LegalSection>

      <LegalSection id="retention" title="10. Retention">
        <p>We keep information only for as long as reasonably necessary.</p>
        <p>Our proposed retention periods are:</p>
        <ul>
          <li>marketing enquiries: up to 12 months after the last meaningful contact;</li>
          <li>newsletter records: until unsubscribe, plus a limited suppression record;</li>
          <li>security logs: [30/90] days;</li>
          <li>billing and tax records: for the period required by law;</li>
          <li>client booking data: according to the client’s written retention instructions;</li>
          <li>
            backups: deleted through our normal backup cycle after the applicable retention period.
          </li>
        </ul>
        <p>
          We may retain information longer where required for legal claims, fraud prevention,
          regulatory duties or accounting.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="11. Your rights">
        <p>Subject to legal exceptions, you may ask us to:</p>
        <ul>
          <li>provide a copy of your personal information;</li>
          <li>correct inaccurate information;</li>
          <li>delete information;</li>
          <li>restrict processing;</li>
          <li>provide information in a portable format;</li>
          <li>stop processing based on legitimate interests;</li>
          <li>withdraw consent;</li>
          <li>stop direct marketing.</li>
        </ul>
        <p>
          Contact <strong>[CONTACT EMAIL]</strong>. We may need to verify your identity before
          responding.
        </p>
        <p>
          You may complain to the Information Commissioner’s Office at{' '}
          <a href="https://ico.org.uk/" target="_blank" rel="noreferrer">
            ico.org.uk
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="security-and-incidents" title="12. Security and incidents">
        <p>
          We use proportionate technical and organisational safeguards, including access controls,
          secure connections, least-privilege access, server-side secrets, monitoring and
          appropriate backups.
        </p>
        <p>
          No online service can guarantee absolute security. If we identify a personal-data breach,
          we will investigate, contain it, notify affected parties where required and notify the
          ICO where the legal threshold is met. Where reportable, the ICO states notification is
          generally required without undue delay and, where feasible, within 72 hours.{' '}
          <a href="https://ico.org.uk/pdb" target="_blank" rel="noreferrer">
            ICO breach guidance
          </a>
        </p>
      </LegalSection>

      <LegalSection id="children" title="13. Children">
        <p>
          Meridian is intended for business users and is not directed at children. We do not
          knowingly collect children’s information through the marketing website.
        </p>
      </LegalSection>

      <LegalSection id="automated-decisions" title="14. Automated decisions">
        <p>
          We do not make solely automated decisions producing legal or similarly significant
          effects about website visitors or client customers.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="15. Changes">
        <p>
          We may update this notice to reflect service, legal or security changes. The latest
          version will always be published at this page with a new “last updated” date.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="16. Contact">
        <p>Privacy questions should be sent to:</p>
        <p>
          <strong>[MERIDIAN LEGAL NAME]</strong>
          <br />
          <strong>[REGISTERED ADDRESS]</strong>
          <br />
          <strong>[CONTACT EMAIL]</strong>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
