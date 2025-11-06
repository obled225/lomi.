'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { FaqFooter } from './faq';

export default function FaqClient() {
  const { currentLanguage } = useTranslation();

  const faqItems = [
    { key: 'pricing', question: t('faq.items.pricing.question', currentLanguage), answer: t('faq.items.pricing.answer', currentLanguage) },
    { key: 'funds', question: t('faq.items.funds.question', currentLanguage), answer: t('faq.items.funds.answer', currentLanguage) },
    { key: 'payment_methods', question: t('faq.items.payment_methods.question', currentLanguage), answer: t('faq.items.payment_methods.answer', currentLanguage) },
    { key: 'minimum_amount', question: t('faq.items.minimum_amount.question', currentLanguage), answer: t('faq.items.minimum_amount.answer', currentLanguage) },
    { key: 'security', question: t('faq.items.security.question', currentLanguage), answer: t('faq.items.security.answer', currentLanguage) },
    { key: 'international', question: t('faq.items.international.question', currentLanguage), answer: t('faq.items.international.answer', currentLanguage) },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
        <div className="flex flex-col space-y-6 text-left mt-28">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('faq.title', currentLanguage) as string}
            </motion.h1>
            <motion.p
              className="text-foreground/90 text-base leading-relaxed tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{
                __html: t('faq.introduction', currentLanguage) as string,
              }}
            />
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Accordions type="single" defaultValue="pricing" className="rounded-sm">
              {faqItems.map((item, index) => (
                <Accordion
                  key={item.key}
                  title={item.question as string}
                  className="rounded-sm"
                >
                  <p className="text-foreground/90 leading-relaxed">
                    {item.answer as string}
                  </p>
                </Accordion>
              ))}
            </Accordions>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FaqFooter />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
