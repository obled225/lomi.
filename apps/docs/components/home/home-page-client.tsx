/* @proprietary license */

'use client';

import dynamic from 'next/dynamic';
import { Hero } from '@/components/home/hero';
import { useHomePageInit } from '@/lib/hooks/use-home-page-init';

const FeaturesSection = dynamic(
  () =>
    import('@/components/home/features-section').then((m) => ({
      default: m.FeaturesSection,
    })),
  {
    ssr: true,
    loading: () => <section className="min-h-[500px]" aria-hidden />,
  },
);
const AddOns = dynamic(
  () =>
    import('@/components/home/add-ons').then((m) => ({ default: m.AddOns })),
  {
    ssr: true,
    loading: () => <section className="min-h-[400px]" aria-hidden />,
  },
);
const UpdatesSection = dynamic(
  () =>
    import('@/components/home/updates-section').then((m) => ({
      default: m.UpdatesSection,
    })),
  {
    ssr: true,
    loading: () => (
      <section className="min-h-[400px] mt-4 md:mt-36" aria-hidden />
    ),
  },
);

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
