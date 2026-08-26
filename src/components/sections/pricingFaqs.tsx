import type { FaqItem } from '@/components/sections/Faq'

/** Pricing-page FAQ — costs, extras, cancellation. Product FAQ lives in Faq.tsx. */
export const pricingFaqs: FaqItem[] = [
  {
    question: 'What do I pay to get started?',
    answer:
      '£150 upfront covers your first three months, including setup and launch. After that, the founding price is £50 a month while you’re subscribed.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer:
      'Yes. The minimum initial commitment is three months (covered by the £150 start). After that, the service continues monthly at £50 unless you cancel.',
  },
  {
    question: 'What is included in the £50 monthly price?',
    answer:
      'Your personalised Merevo template site, hosting, SSL, security and maintenance updates, online booking or enquiry setup, reasonable updates to existing pages, technical support, and customer marketing we manage for you. It is not unlimited custom development.',
  },
  {
    question: 'Is a domain included?',
    answer:
      'One standard domain is included for the first year, up to a £25 allowance. If your chosen domain costs more, you pay the difference before we buy it. Premium domains, extra domains, transfers, privacy add-ons and renewals after year one are separate.',
  },
  {
    question: 'Who owns my domain?',
    answer:
      'Your domain is registered in your business name. Merevo manages the registrar account, DNS and renewals on your behalf while your service is active.\n\nYour plan includes one standard domain allowance. Premium domains, additional domains and renewal costs outside that allowance are charged separately with your approval.\n\nIf you leave Merevo after the minimum term, we will provide account access or transfer the domain to your chosen provider. We will begin the handover within five working days, although registrar rules or temporary transfer locks may affect the final completion date.',
  },
  {
    question: 'If you already own a domain',
    answer:
      'You keep full ownership and control of your existing domain. Merevo does not transfer or take ownership of it.\n\nYou authorise Merevo to manage the DNS, website connection, SSL and related technical settings while your service is active. Domain renewal fees remain your responsibility unless specifically included in writing.\n\nWhen the service ends, Merevo will remove its access and provide any reasonable technical information needed to continue managing the domain with your chosen provider.',
  },
  {
    question: 'How much do extra pages cost?',
    answer:
      'Additional standard template pages are £20 each as a one-off, when we use the existing template, you supply final copy and images, no new functionality is needed, and one normal revision is included. Custom layouts, new components, integrations, copywriting and advanced booking work need a separate quote.',
  },
  {
    question: 'Are hosting and database costs included?',
    answer:
      'Yes for normal website, booking, customer-record and image use. Large video files, unusually high storage, excessive traffic or exceptional third-party usage may need a separate arrangement—we explain the issue and ask for approval before charging anything extra.',
  },
  {
    question: 'Are there limits on uploaded files?',
    answer:
      'Normal images and business files for your site are included. Very large media (especially video) or unusually high storage may fall outside normal use. If that happens, we talk it through before any extra charge.',
  },
  {
    question: 'Are Stripe fees included?',
    answer:
      'No. When card payments are connected for your site, Stripe charges its own processing fees to you—separate from your Merevo subscription. Merevo does not control Stripe’s pricing. As published on Stripe’s UK pricing page for standard online payments: 1.5% + 20p for standard UK cards, 2.8% + 20p for premium UK cards, 2.5% + 20p for EEA cards, and 3.15% + 20p for international cards (+2% if currency conversion is required). Stripe’s rates can change; always check stripe.com/gb/pricing for the latest.',
  },
  {
    question: 'Are external booking-system fees included?',
    answer:
      'No. If you use Fresha, Treatwell, OpenTable, Calendly or similar alongside Merevo, those providers charge their own fees. They sit outside your Merevo subscription.',
  },
  {
    question: 'Can I be charged without warning?',
    answer:
      'No. Extra work, premium domains, exceptional usage or anything outside the agreed offer is explained first. Nothing starts without your approval.',
  },
  {
    question: 'What happens if I leave?',
    answer:
      'After the three-month minimum, you can stop the monthly subscription. Your domain stays registered in your business name—we provide account access or transfer it to your chosen provider, beginning the handover within five working days (registrar rules or transfer locks may affect final completion). Any other migration work is agreed separately before it begins.',
  },
  {
    question: 'Can prices change?',
    answer:
      'Founding customers keep the £50 monthly founding rate while subscribed. Third-party fees (Stripe, booking tools, domain renewals) follow those providers’ own pricing and can change independently of Merevo.',
  },
]
