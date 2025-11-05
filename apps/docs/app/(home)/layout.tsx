import type { ReactNode } from 'react';
import { Header } from '@/components/home/header';
import { Footer } from '@/components/home/footer';
import CookieConsent from '@/components/home/tracking-cookie';

interface LayoutProps<T extends string> {
  children: ReactNode;
  params: Promise<{ slug?: T[] }>;
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="overflow-hidden relative bg-background">
      {/* Main Content */}
      <main className="relative z-10">
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <div className="scroll-footer bottom-0 left-0 -mt-24 sm:mt-0 right-0 pb-0 z-0">
          <Footer />
        </div>
      </main>
      <CookieConsent />
    </div>
  );
}
