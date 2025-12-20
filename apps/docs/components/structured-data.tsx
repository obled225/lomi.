import Script from 'next/script';

export function StructuredData() {
  // Simple Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'lomi.',
    url: 'https://lomi.africa',
    description: "West Africa's leading payment processing platform",
    foundingDate: '2024-01-17',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@lomi.africa',
      contactType: 'customer service',
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
    description: 'Payment processing platform for West African businesses',
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
