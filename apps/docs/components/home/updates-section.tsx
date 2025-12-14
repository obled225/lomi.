/* @proprietary license */

import { useTranslation } from '@/lib/utils/translation-context';
import { t } from '@/lib/i18n/translations';
import { Section } from '@/components/ui/section';
import { BlogArticlesCarousel } from './blog-articles-carousel';
import { ChangelogCarousel } from './changelog-carousel';

export function UpdatesSection() {
  const { currentLanguage } = useTranslation();

  return (
    <Section className="mb-8 lg:mb-28">
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
        <div className="flex flex-col space-y-6 text-left mt-20 md:mt-0">
          {/* Careers content */}
          <div className="space-y-4">
            <h2 className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line">
              {String(t('careers.title', currentLanguage))}
            </h2>
          </div>
        </div>

        {/* Latest Articles Section */}
        <BlogArticlesCarousel />

        {/* Latest Changelog Section */}
        <ChangelogCarousel />
      </div>
    </Section>
  );
}
