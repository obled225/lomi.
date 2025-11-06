import './global.css';
import type { Metadata, Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/utils/metadata';
import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  ...createMetadata({
    title: {
      template: 'lomi. | %s',
      default: 'lomi. | West Africa\'s Payment Processing Platform',
    },
    description: 'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
    metadataBase: baseUrl,
  }),
  // Google Site Verification
  verification: {
    google: 'fD_UOOSaZDjO5rdngNSUYtYQK-sfA5DhMyiUNW7GyAs',
  },
  // Robots
  robots: 'index, follow',
  // Keywords
  keywords: [
    'payment processing',
    'online payments',
    'West Africa',
    'bank transfers',
    'mobile money',
    'credit card payments',
    'API',
    'unified checkout',
    'transaction management',
    'e-commerce',
    'sell online',
    'billing',
    'facturation',
    'javascript',
    'subscriptions',
    'visa',
    'mastercard',
    'orange',
    'mtn',
    'wave',
    'paiement en ligne',
    'paiement mobile',
    'transfert d\'argent',
    'portefeuille électronique',
    'commerce électronique',
    'passerelle de paiement',
    'solution de paiement',
    'Afrique de l\'Ouest',
    'paiements africains',
    'plateforme de paiement',
    'intégration de paiement',
    'paiement par carte',
    'portefeuille mobile',
    'paiements numériques',
    'traitement des paiements',
    'gateway de paiement',
    'pagamento online',
    'pagamento móvel',
    'transferência de dinheiro',
    'comércio eletrônico',
    'pagamento com cartão',
    'pagamentos africanos',
    'processamento de pagamentos',
    'منصة الدفع',
    'المدفوعات عبر الإنترنت',
    'المدفوعات بالهاتف المحمول',
    'التجارة الإلكترونية',
    'معالجة المدفوعات',
    'بطاقة الائتمان',
    'crypto-monnaie',
    'abonnements',
    'infrastructure de paiement',
    'paiement sans friction',
    'paiement sécurisé',
  ],
  // Author
  authors: [{ name: 'Babacar Diop', url: 'https://github.com/lomiafrica/' }],
  alternates: {
    canonical: 'https://lomi.africa',
    languages: {
      'en': 'https://lomi.africa',
      'x-default': 'https://lomi.africa',
    },
  },
  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://lomi.africa/',
    title: 'lomi. | West Africa\'s Payment Processing Platform',
    description: 'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
    images: [
      {
        url: 'https://res.cloudinary.com/dzrdlevfn/image/upload/v1759315964/x_banner_vu16vp.webp',
        width: 1200,
        height: 630,
        alt: 'lomi. | West Africa\'s Payment Processing Platform',
      },
    ],
    locale: 'en_US',
    siteName: 'lomi.',
    alternateLocale: ['fr_FR'],
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'lomi. | West Africa\'s Payment Processing Platform',
    description: 'lomi. is a suite of APIs powering online payment processing and e-commerce solutions in West Africa. Accept payments, send payouts, and automate financial workflows with ease.',
    images: ['https://res.cloudinary.com/dzrdlevfn/image/upload/v1759315964/x_banner_vu16vp.webp'],
    site: '@lomiafrica',
    creator: '@lomiafrica',
  },
  // Additional metadata for French and performance optimizations
  other: {
    'og:title[fr]': 'lomi. | La meilleure façon d\'accepter des paiements en Afrique de l\'Ouest',
    'og:description[fr]': 'lomi. est une suite d\'APIs qui facilitent le traitement des paiements en ligne et les solutions de e-commerce en Afrique de l\'Ouest. Acceptez des paiements, effectuez des versements et automatisez vos flux financiers en toute simplicité.',
    'twitter:title[fr]': 'lomi. | La meilleure façon d\'accepter des paiements en Afrique de l\'Ouest',
    'twitter:description[fr]': 'lomi. est une suite d\'APIs qui facilitent le traitement des paiements en ligne et les solutions e-commerce en Afrique de l\'Ouest. Acceptez des paiements, effectuez des versements et automatisez vos flux financiers en toute simplicité.',
    'msapplication-TileColor': '#da532c',
    // Preconnect for performance (Next.js will automatically add link tags)
    preconnect: [
      'https://api.producthunt.com',
      'https://res.cloudinary.com',
    ],
  },
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

// Use single system font stack for everything
const font = {
  style: {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  variable: '--font-main',
  className: 'font-main',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${font.variable}`} suppressHydrationWarning>
      <Body>
        <Provider>{children}</Provider>
        <Analytics />
      </Body>
    </html>
  );
}
