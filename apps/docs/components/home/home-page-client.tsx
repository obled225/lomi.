/* @proprietary license */

'use client';

import { Hero } from '@/components/home/hero';
import { FeaturesSection } from '@/components/home/features-section';
import { UpdatesSection } from '@/components/home/updates-section';
import { AddOns } from '@/components/home/add-ons';
// import { EarlyMemberPricing } from '@/components/home/early-member-pricing';
import { useHomePageInit } from '@/lib/hooks/use-home-page-init';

interface HomePageClientProps {
  initialTitleIndex: number | null;
}

export function HomePageClient({ initialTitleIndex }: HomePageClientProps) {
  const { getDashboardImage, getMobileDashboardImage } = useHomePageInit();

  return (
    <>
      {/* Hero Section */}
      <Hero
        dashboardImage={getDashboardImage()}
        mobileDashboardImage={getMobileDashboardImage()}
        initialTitleIndex={initialTitleIndex}
      />
      <FeaturesSection />
      <AddOns />
      <UpdatesSection />
      {/* <EarlyMemberPricing /> */}
    </>
  );
}
