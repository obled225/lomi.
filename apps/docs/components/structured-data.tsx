/* @proprietary license */

/**
 * Structured Data for SEO Rich Results
 *
 * Uses native <script> tags with type="application/ld+json" to ensure
 * the JSON-LD is present in the initial HTML response for crawlers.
 * This is placed in <head> of layout.tsx.
 */

// Organization Schema with enhanced details
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'lomi.',
  legalName: 'lomi. S.A.R.L.',
  url: 'https://lomi.africa',
  logo: 'https://lomi.africa/favicon.ico',
  description:
    'lomi. is a suite of APIs powering online payment processing and e-commerce products in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
  foundingDate: '2024-01-17',
  areaServed: {
    '@type': 'Place',
    name: 'West Africa',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@lomi.africa',
    contactType: 'customer service',
    availableLanguage: ['English', 'French', 'Spanish', 'Chinese'],
  },
  sameAs: [
    'https://github.com/lomiafrica/lomi./',
    'https://twitter.com/lomiafrica',
    'https://www.linkedin.com/company/lomi-africa',
  ],
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'lomi.',
  url: 'https://lomi.africa',
  description:
    'Payment processing platform for francophone West African businesses. Accept mobile money, credit cards, and bank transfers; send payouts and automate financial workflows with ease.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://lomi.africa/docs?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// SoftwareApplication Schema for the API/Platform
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'lomi. Payment API',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description:
    'lomi. is a suite of APIs powering online payment processing and e-commerce products in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
  url: 'https://lomi.africa',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'No setup fees, no monthly costs, no limits. 2% + 200 F CFA per mobile money transaction, 3.5% + $0.40 per card transaction.',
  },
  featureList: [
    'Mobile Money Payments',
    'Credit Card Processing',
    'Instant Payouts',
    'Subscription Management',
    'Fraud Detection',
    'Multi-currency Support',
    'REST API',
    'SDKs for JavaScript, Python, Go, PHP',
  ],
  author: {
    '@type': 'Organization',
    name: 'lomi.',
    url: 'https://lomi.africa',
  },
};

// FAQPage Schema - This enables FAQ rich results in Google Search
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get started with lomi.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Getting started is simple: create an account on our dashboard, connect your preferred payment methods, and you're ready to accept payments. It takes just a few minutes.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does lomi. pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'lomi. offers transparent pricing with no hidden fees. We charge 2% + 200 F CFA per transaction for mobile money, and 3.5% + $0.40 for credit cards. There are no setup fees, no monthly fees, and no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support major credit and debit cards (Visa, Mastercard, Amex, GIM UEMOA), and mobile money across multiple African countries including Wave, MTN, and SPI instant payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which mobile money providers do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We support Wave (popular in Senegal and Côte d'Ivoire), MTN (West and Central Africa), and SPI for interoperable mobile money payments across 8 UEMOA countries: Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, and Togo.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "lomi. supports payments in all 8 UEMOA countries: Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, and Togo. For credit cards, we support payments from customers worldwide.",
      },
    },
    {
      '@type': 'Question',
      name: 'When can I receive my funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funds are typically available for withdrawal within 2 business days after a payout is completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do payouts work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can withdraw your earnings to any mobile wallet in the UEMOA region or to any bank account globally. Payouts are processed instantly, giving you full control over when you receive your money.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do refunds work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can issue both full and partial refunds directly from the dashboard. Full refunds are free of charge. Partial refunds incur a 2% processing fee to cover costs. The original transaction fees are not refunded as they are charged by payment networks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does lomi. handle chargebacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile money transactions cannot have chargebacks. For credit card disputes, lomi. provides proactive fraud monitoring to minimize chargeback rates. We handle dispute management on your behalf when acting as your Merchant of Record.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set up recurring payments and subscriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, lomi. fully supports recurring payments and subscription management. You can create subscription plans, manage billing cycles, and handle upgrades and cancellations through our dashboard or API.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I integrate lomi. with my website or app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide official SDKs for Next.js, JavaScript, Go, Python, and PHP. Our REST API is well-documented and allows you to integrate payments, manage products, handle webhooks, and automate your payment workflows programmatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How secure is lomi.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "lomi. uses industry-standard security protocols and is fully compliant with PCI DSS requirements for card payments processing. We employ encryption, tokenization, and other security measures to protect your data and your customers' information.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum transaction amount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, there is no minimum transaction amount. You can process payments of any size through our platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use lomi. for international transactions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, lomi. supports international transactions. We can process payments in multiple currencies, including USD and EUR.',
      },
    },
  ],
};

export function StructuredData() {
  return (
    <>
      {/* Using native script tags ensures JSON-LD is in initial HTML for crawlers */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
    </>
  );
}
