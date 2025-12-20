import Script from 'next/script';

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'lomi.',
    url: 'https://lomi.africa',
    logo: 'https://lomi.africa/banner.webp',
    description: "West Africa's leading payment processing platform. Accept payments, send payouts, and automate financial workflows with ease.",
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@lomi.africa',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      'https://github.com/lomiafrica',
      'https://twitter.com/lomiafrica',
      'https://www.linkedin.com/company/lomi-africa',
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "lomi. | West Africa's Payment Processing Platform",
    url: 'https://lomi.africa',
    description: 'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lomi.africa/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Software Application Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'lomi. Payment API',
    description: 'Complete payment processing API for West African businesses',
    url: 'https://lomi.africa',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Payment Processing',
      'Mobile Money',
      'Bank Transfers',
      'Credit Cards',
      'Payment Links',
      'Subscriptions',
      'Payouts',
      'API Integration',
    ],
  };

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="structured-data-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
    </>
  );
}
