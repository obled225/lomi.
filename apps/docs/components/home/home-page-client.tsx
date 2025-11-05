'use client';

import { Hero } from '@/components/home/hero';
import { Header } from '@/components/home/header';
import { Footer } from '@/components/home/footer';
import CookieConsent from '@/components/home/tracking-cookie';
import { FeaturesSection } from '@/components/home/features-section';
import { CareersSection } from '@/components/home/careers-section';
import { Sdks } from '@/components/home/sdks';
import { EarlyMemberPricing } from '@/components/home/early-member-pricing';
import { useHomePageInit } from '@/lib/hooks/use-home-page-init';

export function HomePageClient() {
  const { getDashboardImage } = useHomePageInit();

  return (
    <div className="overflow-hidden relative bg-background">
      {/* Main Content */}
      <main className="relative z-10">
        <Header />
        <div className="min-h-[80vh] sm:min-h-screen ">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col min-h-[calc(80vh-40px)] sm:min-h-[calc(100vh-40px)] pt-8 sm:pt-16">
            {/* Hero Section */}
            <Hero dashboardImage={getDashboardImage()} />
          </div>
        </div>

        <FeaturesSection />

        <CareersSection />

        <Sdks />

        <EarlyMemberPricing />

        <div className="scroll-footer bottom-0 left-0 -mt-24 sm:mt-0 right-0 pb-0 z-0">
          <Footer />
        </div>
      </main>
      <CookieConsent />
    </div>
  );
}
