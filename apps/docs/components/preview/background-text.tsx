/* @proprietary license */

'use client';

import { Logo } from '@/lib/utils/logo';
import { useTranslation } from '@/lib/utils/translation-context';
import { t as translate } from '@/lib/i18n/translations';
import { ReactNode } from 'react';

interface BackgroundTextProps {
  children?: ReactNode;
}

export function BackgroundText({ children }: BackgroundTextProps) {
  const { currentLanguage } = useTranslation();

  // Create t function that uses currentLanguage (same pattern as footer.tsx)
  const t = (
    key: string,
    values?: Record<string, string | number | undefined>,
  ) => String(translate(key, currentLanguage, values));
  return (
    <div className="max-w-7xl mx-auto overflow-hidden mt-[-80px] h-[240px] translate-y-4 md:mt-[-100px] md:h-[388px] relative z-0 pointer-events-none">
      <div className="absolute right-0 w-[500px] h-[333px] object-cover md:w-[1000px] md:h-[330px] origin-bottom  translate-y-[25px] md:translate-y-0 opacity-[0.06] select-none pointer-events-none">
        <Logo
          width={1000}
          height={445}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      {/* Horizontal line */}
      <div className="hidden md:block absolute left-0 right-0 top-[73%] md:top-[78%] w-full h-px bg-zinc-200 dark:bg-zinc-800" />

      {/* Overlay for the bottom half to make it less visible */}
      <div className="hidden md:block absolute top-[73%] md:top-[78%] bottom-0 left-0 right-0 bg-background/20 dark:bg-background/30 pointer-events-none" />

      {/* Company Disclaimer */}
      <div className="hidden md:block absolute top-[calc(73%+8px)] md:top-[calc(78%+8px)] left-1 md:left-2 right-1 md:right-2 z-20 pointer-events-auto">
        <div className="text-[10px] text-zinc-500 dark:text-zinc-400 max-w-7xl text-left leading-relaxed space-y-2">
          {t('footer.company_disclaimer')
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        </div>
      </div>

      <div className="relative z-10 h-full md:h-[calc(100%+1rem)] md:-mb-8">
        {children}
      </div>
    </div>
  );
}
