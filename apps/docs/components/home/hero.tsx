/* @proprietary license */

import { Suspense, useState, useEffect } from 'react';
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
  mobileDashboardImage?: {
    light: string;
    dark: string;
  };
}

// Function to get a random title index from session storage or generate new one
const getSessionTitleIndex = (): number => {
  // Always return 0 on server to avoid hydration mismatch
  if (typeof window === 'undefined') {
    return 0;
  }

  try {
    // Try to get existing index from session storage
    const stored = sessionStorage.getItem('hero-title-index');
    if (stored !== null) {
      const index = parseInt(stored, 10);
      // Validate that it's a number between 0 and 4
      if (!isNaN(index) && index >= 0 && index <= 4) {
        return index;
      }
    }

    // Generate a new random index (0-4) and store it
    const randomIndex = Math.floor(Math.random() * 5);
    sessionStorage.setItem('hero-title-index', randomIndex.toString());
    return randomIndex;
  } catch {
    // Fallback if sessionStorage is not available
    return 0;
  }
};

function Hero({ dashboardImage, mobileDashboardImage }: HeroProps) {
  const { currentLanguage } = useTranslation();
  // Start with index 0 to ensure server/client consistency, then randomize on client
  const [titleIndex, setTitleIndex] = useState<number>(0);

  // Randomize title on client side after hydration to avoid hydration mismatch
  useEffect(() => {
    const randomIndex = getSessionTitleIndex();
    if (randomIndex !== 0) {
      setTitleIndex(randomIndex);
    }
  }, []);

  // Create t function that uses currentLanguage (same pattern as header.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));

  // Get all title variations
  const titles = translate('hero.titles', currentLanguage);
  const title =
    Array.isArray(titles) && titles[titleIndex]
      ? titles[titleIndex]
      : t('hero.titles.0');

  return (
    <section className="relative max-w-7xl mx-auto pl-2 pr-4 py-2 md:py-12 lg:py-16 xl:py-28">
      {/* Container with fixed height and overflow-hidden for envelope effect */}
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-sm overflow-hidden bg-origin-border">
        {/* Agnostic background with hero effects */}
        <AgnosticBackground variant="hero" />

        {/* Content overlay */}
        <div className="flex flex-col z-10 pl-2 pr-4 size-full md:pl-5 md:pr-12 md:py-12 max-md:items-center max-md:text-center">
          <div className="mt-28 md:mt-20 lg:mt-8">
            <h1 className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line">
              {title as string}
            </h1>
          </div>
        </div>

        {/* Hero Image - positioned absolutely to create envelope effect */}
        {dashboardImage && (
          <Suspense
            fallback={
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-sm" />
            }
          >
            <SimpleImage
              src={dashboardImage}
              mobileSrc={mobileDashboardImage}
              alt="Preview"
              width={1200}
              height={800}
              className="absolute top-[400px] left-[2%] max-w-[90%] md:top-[340px] md:left-[5%] md:max-w-[80%] lg:max-w-[1200px] animate-in fade-in duration-400"
            />
          </Suspense>
        )}
      </div>
    </section>
  );
}

export { Hero };
