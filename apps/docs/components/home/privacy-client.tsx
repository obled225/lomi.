'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';

export default function PrivacyClient() {
  const { currentLanguage } = useTranslation();

  return (
    <>
      <div className="max-w-5xl mx-auto pl-4 pr-6 md:pl-2 sm:pr-4 py-4 md:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col space-y-6 text-left mt-12 md:-mt-8">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl tracking-tighter font-regular text-zinc-800 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('privacy.title', currentLanguage) as string}
            </motion.h1>
            <motion.p
              className="text-foreground/90 text-base leading-relaxed tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{
                __html: t('privacy.introduction', currentLanguage) as string,
              }}
            />
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          className="space-y-12 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {t('privacy.sections.notice.title', currentLanguage) as string}
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {t('privacy.sections.notice.content', currentLanguage) as string}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {t('privacy.sections.consent.title', currentLanguage) as string}
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {t('privacy.sections.consent.content', currentLanguage) as string}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <h3 className="text-lg font-medium mb-3 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.data_we_collect.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.data_we_collect.content',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.google_api.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.google_api.content',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.third_party_ai.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.third_party_ai.content',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.data_storage.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.data_storage.content',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.google_sharing.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.google_sharing.content',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_collection.subsections.how_we_use.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_collection.subsections.how_we_use.introduction',
                  currentLanguage,
                ) as string
              }
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-foreground/90 text-base leading-relaxed tracking-tight">
              {(() => {
                const content = t(
                  'privacy.sections.data_collection.subsections.how_we_use.purposes',
                  currentLanguage,
                );
                if (Array.isArray(content)) {
                  return content.map((purpose, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: purpose }}
                    />
                  ));
                }
                return null;
              })()}
            </ul>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight mt-4">
              {
                t(
                  'privacy.sections.data_collection.subsections.how_we_use.additional_info',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_retention.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_retention.content',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.your_rights.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <h3 className="text-lg font-medium mb-3 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.your_rights.subsections.data_rights.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.your_rights.subsections.data_rights.introduction',
                  currentLanguage,
                ) as string
              }
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-foreground/90 text-base leading-relaxed tracking-tight">
              {(() => {
                const content = t(
                  'privacy.sections.your_rights.subsections.data_rights.rights',
                  currentLanguage,
                );
                if (Array.isArray(content)) {
                  return content.map((right, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: right }}
                    />
                  ));
                }
                return null;
              })()}
            </ul>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight mt-4">
              {
                t(
                  'privacy.sections.your_rights.subsections.data_rights.contact_info',
                  currentLanguage,
                ) as string
              }
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.your_rights.subsections.right_to_object.title',
                  currentLanguage,
                ) as string
              }
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.your_rights.subsections.right_to_object.content',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.opting_out.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.opting_out.content',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.data_security.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.data_security.content',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {
                t(
                  'privacy.sections.policy_changes.title',
                  currentLanguage,
                ) as string
              }
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {
                t(
                  'privacy.sections.policy_changes.content',
                  currentLanguage,
                ) as string
              }
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
              {t('privacy.sections.contact.title', currentLanguage) as string}
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed tracking-tight">
              {t('privacy.sections.contact.content', currentLanguage) as string}
            </p>
          </motion.section>
        </motion.div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-border flex justify-end">
          <p className="text-foreground/80 text-sm">
            {t('privacy.footer_date', currentLanguage) as string}
          </p>
        </div>
      </div>
    </>
  );
}
