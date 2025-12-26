/* @proprietary license */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/utils/translation-context';
import { t } from '@/lib/i18n/translations';
import Link from 'next/link';
import { playClickSound } from '@/lib/utils/sound';

interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  changes: string[];
}

interface ChangelogEntryCardProps {
  entry: ChangelogEntry;
  index: number;
  hoveredCard: string | null;
  onHover: (id: string | null) => void;
}

function ChangelogEntryCard({
  entry,
  index,
  hoveredCard,
  onHover,
}: ChangelogEntryCardProps) {
  const { currentLanguage } = useTranslation();

  return (
    <motion.div
      className="w-full"
      onMouseEnter={() => onHover(`changelog-${index}`)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href="/changelog"
        className="group flex flex-col h-full"
        onMouseDown={playClickSound}
      >
        <article className="flex flex-col bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-zinc-200 dark:border-zinc-800 h-full p-6 min-h-[235px]">
          <div className="grow flex flex-col">
            {/* Date */}
            <div className="mb-3">
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">
                {t('changelog.title', currentLanguage) as string} ·{' '}
                {new Date(entry.date).toLocaleDateString(
                  currentLanguage === 'zh'
                    ? 'zh-CN'
                    : currentLanguage === 'fr'
                      ? 'fr-FR'
                      : currentLanguage === 'es'
                        ? 'es-ES'
                        : 'en-US',
                  {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  },
                )}
              </p>
            </div>

            {/* Title */}
            <h3 className="font-normal leading-tight text-zinc-900 dark:text-white text-lg mb-4 line-clamp-2">
              {entry.title}
            </h3>

            {/* Summary - First change or description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 grow">
              {entry.changes.length > 0
                ? entry.changes[0]
                : 'New release with improvements and fixes'}
            </p>
          </div>

          {/* Bottom section with badge and read text */}
          <div className="mt-auto flex flex-row justify-between items-center">
            <span className="px-2 py-1 text-xs font-normal rounded bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              {t('changelog.release', currentLanguage) as string}
            </span>

            <div className="flex items-center text-primary text-sm font-normal">
              <span
                className={`transition-all duration-300 ${hoveredCard === `changelog-${index}`
                  ? 'opacity-100'
                  : 'opacity-0'
                  }`}
              >
                {t('changelog.read', currentLanguage) as string}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function ChangelogCarousel() {
  const { currentLanguage } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const changelogData = t(
    'changelog.entries',
    currentLanguage,
  ) as unknown as ChangelogEntry[];
  const changelogEntries = changelogData || [];

  return (
    <div className="w-full mt-8 relative">
      {/* Horizontal scrolling for all cards */}
      {changelogEntries.length > 0 && (
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-8" style={{ width: 'max-content' }}>
            {changelogEntries.slice(0, 6).map((entry, index) => (
              <div key={`changelog-${index}`} className="shrink-0 w-[612px]">
                <ChangelogEntryCard
                  entry={entry}
                  index={index}
                  hoveredCard={hoveredCard}
                  onHover={setHoveredCard}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
