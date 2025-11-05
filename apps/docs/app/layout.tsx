import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/utils/metadata';
import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';

export const metadata = createMetadata({
  title: {
    template: 'lomi. | %s',
    default: 'lomi.',
  },
  description: 'The documentation website for lomi.',
  metadataBase: baseUrl,
});

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
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
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
