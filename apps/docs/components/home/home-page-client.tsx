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
  defaultDashboardImage: { light: string; dark: string };
  defaultMobileDashboardImage: string;
}

export function HomePageClient({
  initialTitleIndex,
  defaultDashboardImage,
  defaultMobileDashboardImage,
}: HomePageClientProps) {
  useHomePageInit();

  // Use server-provided defaults for initial render, then hydration can take over if needed
  // In practice, since we calculated them based on cookie, they should match

  return (
    <>
      {/* Hero Section */}
      <Hero
        dashboardImage={defaultDashboardImage}
        mobileDashboardImage={defaultMobileDashboardImage}
        initialTitleIndex={initialTitleIndex}
      />
      <FeaturesSection />
      <AddOns />
      <UpdatesSection />
      {/* <EarlyMemberPricing /> */}
    </>
  );
}
