'use client';

import { Hero } from '@/components/home/hero';
import { FeaturesSection } from '@/components/home/features-section';
import { CareersSection } from '@/components/home/careers-section';
import { Sdks } from '@/components/home/sdks';
import { EarlyMemberPricing } from '@/components/home/early-member-pricing';
import { useHomePageInit } from '@/lib/hooks/use-home-page-init';

export function HomePageClient() {
  const { getDashboardImage } = useHomePageInit();

  return (
    <>
      {/* Hero Section */}
      <Hero dashboardImage={getDashboardImage()} />
      <FeaturesSection />
      <Sdks />
      <EarlyMemberPricing />
      <CareersSection />
    </>
  );
}
