/* @proprietary license */

import { useState, useEffect } from 'react';
import SimpleImage from '@/components/home/hero-image';
import { AgnosticBackground } from '@/components/home/agnostic-background';
import { useTranslation } from '@/lib/utils/translation-context';
import { t as translate } from '@/lib/i18n/translations';

interface HeroProps {
  dashboardImage?:
    | string
    | {
        light: string;
        dark: string;
      };
  mobileDashboardImage?:
    | string
    | {
        light: string;
        dark: string;
      };
  initialTitleIndex: number | null;
}

// Function to set the title index cookie (client-side only)
const setTitleIndexCookie = (index: number): void => {
  if (typeof document === 'undefined') return;

  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `hero-title-index=${index};path=/;expires=${expires.toUTCString()}`;
};

function Hero({
  dashboardImage,
  mobileDashboardImage,
  initialTitleIndex,
}: HeroProps) {
  const { currentLanguage } = useTranslation();

  // Use server-provided index, or default to 0 for SSR consistency
  // We use 0 as SSR default when no cookie exists (first visit)
  const [titleIndex] = useState<number>(() => initialTitleIndex ?? 0);
  const [isFirstVisit] = useState<boolean>(() => initialTitleIndex === null);

  // On first visit (no cookie), generate random index client-side and set cookie
  // This runs after hydration so won't cause mismatch - title stays at 0 for this visit
  // but future visits will have the cookie set
  useEffect(() => {
    if (isFirstVisit) {
      const randomIndex = Math.floor(Math.random() * 5);
      setTitleIndexCookie(randomIndex);
    }
  }, [isFirstVisit]);

  // Create t function that uses currentLanguage (same pattern as header.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));

  // Get all title variations
  const titles = translate('hero.titles', currentLanguage);
  const title =
    Array.isArray(titles) && titles[titleIndex]
      ? titles[titleIndex]
      : t('hero.titles.0');

  return (
    <section className="relative max-w-7xl mx-auto pl-2 pr-4 pb-12 py-2 md:py-12 lg:py-16 xl:py-28">
      {/* Container with fixed height and overflow-hidden for envelope effect */}
      <div className="relative flex min-h-[880px] h-[70vh] max-h-[880px] md:min-h-[600px] md:h-[70vh] md:max-h-[900px] border rounded-sm overflow-hidden bg-origin-border md:translate-y-0 translate-y-28">
        {/* Agnostic background with hero effects */}
        <AgnosticBackground variant="hero" />

        {/* Content overlay */}
        <div className="flex flex-col z-10 pl-2 pr-4 size-full md:pl-5 md:pr-12 md:py-12 max-md:items-center max-md:text-center">
          <div className="mt-12 md:mt-20 lg:mt-8">
            <h1 className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line">
              {title as string}
            </h1>
          </div>
        </div>

        {/* Hero Image - positioned absolutely to create envelope effect */}
        {dashboardImage && (
          <SimpleImage
            src={dashboardImage}
            mobileSrc={mobileDashboardImage}
            alt="Preview"
            width={1200}
            height={800}
            className="absolute top-[270px] left-[8%] max-w-[90%] md:top-[245px] md:left-[3.75%] md:max-w-[80%] lg:max-w-[1200px] animate-in fade-in duration-400"
          />
        )}
      </div>
    </section>
  );
}

export { Hero };
