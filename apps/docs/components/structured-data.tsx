import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://lomi.africa/#organization',
        name: 'lomi.',
        alternateName: 'lomi.',
        url: 'https://lomi.africa',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lomi.africa/banner.webp',
          width: 1200,
          height: 630,
        },
        description:
          "West Africa's leading payment processing platform. Accept payments, send payouts, and automate financial workflows with ease.",
        foundingDate: '2024-01-17',
        founders: [
          {
            '@type': 'Person',
            name: 'Babacar Diop',
            url: 'https://github.com/princemuichkine',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+225-01-60-223-401S',
          contactType: 'customer service',
          email: 'hello@lomi.africa',
          availableLanguage: ['English', 'French', 'Spanish', 'Chineses'],
        },
        sameAs: [
          'https://github.com/lomiafrica/lomi./',
          'https://twitter.com/lomiafrica',
          'https://www.linkedin.com/company/lomiafri',
        ],
        areaServed: [
          {
            '@type': 'Country',
            name: 'Benin',
          },
          {
            '@type': 'Country',
            name: 'Burkina Faso',
          },
          {
            '@type': 'Country',
            name: "Côte d'Ivoire",
          },
          {
            '@type': 'Country',
            name: 'Guinea-Bissau',
          },
          {
            '@type': 'Country',
            name: 'Niger',
          },
          {
            '@type': 'Country',
            name: 'Senegal',
          },
          {
            '@type': 'Country',
            name: 'Mali',
          },
          {
            '@type': 'Country',
            name: 'Togo',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lomi.africa/#website',
        url: 'https://lomi.africa',
        name: "lomi. | West Africa's Payment Processing Platform",
        description:
          'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
        publisher: {
          '@id': 'https://lomi.africa/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://lomi.africa/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://lomi.africa/#webpage',
        url: 'https://lomi.africa',
        name: "lomi. | West Africa's Payment Processing Platform",
        isPartOf: {
          '@id': 'https://lomi.africa/#website',
        },
        about: {
          '@id': 'https://lomi.africa/#organization',
        },
        description:
          'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
        breadcrumb: {
          '@id': 'https://lomi.africa/#breadcrumb',
        },
        inLanguage: 'en-US',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: ['https://lomi.africa'],
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://lomi.africa/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lomi.africa',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://lomi.africa/#software',
        name: 'lomi. Payment API',
        description:
          'Complete payment processing API for West African businesses',
        url: 'https://lomi.africa',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        creator: {
          '@id': 'https://lomi.africa/#organization',
        },
        featureList: [
          'Payment Processing',
          'Payment Links',
          'Programmatic Payments',
          'Programmatic Payouts',
          'Credit card payments',
          'Payouts',
          'Subscriptions',
          'Mobile Money',
          'Bank Transfers',
          'API Integration',
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
