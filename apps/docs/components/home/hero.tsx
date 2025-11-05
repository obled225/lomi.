import { Suspense } from 'react';
import SimpleImage from '@/components/home/hero-image';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t as translate } from '@/lib/i18n/translations';

interface HeroProps {
  dashboardImage?: string | {
    light: string;
    dark: string;
  };
  mobileDashboardImage?: {
    light: string;
    dark: string;
  };
}

function Hero({ dashboardImage, mobileDashboardImage }: HeroProps) {
  const { currentLanguage } = useTranslation();

  // Create t function that uses currentLanguage (same pattern as header.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));

  return (
    <section className="relative max-w-7xl mx-auto pl-2 pr-4 py-2 md:py-12 lg:py-16 xl:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto pl-0 pr-0 py-2">
        <div className="flex flex-col space-y-6 text-left mt-20 md:mt-0">
          {/* Hero content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line">
              {t('hero.title') as string}
            </h1>
          </div>
        </div>

        {/* Portal Image Section */}
        {dashboardImage && (
          <div className="w-full mt-8">
            <Suspense
              fallback={
                <div className="w-full h-[400px] md:h-[600px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
              }
            >
              <SimpleImage
                src={dashboardImage}
                mobileSrc={mobileDashboardImage}
                alt="Preview"
                width={1200}
                height={800}
                className=""
              />
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
}

export { Hero };
