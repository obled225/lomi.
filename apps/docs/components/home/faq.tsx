'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/actions/utils';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t, getTranslations } from '@/lib/i18n/translations';
import { playClickSound } from '@/lib/utils/sound';

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, contactInfo, ...props }, ref) => {
    const { currentLanguage } = useTranslation();
    const translations = getTranslations(currentLanguage);
    const faqData = (
      translations.faq as unknown as {
        questions: { question: string; answer: string }[];
      }
    ).questions;

    return (
      <section
        ref={ref}
        id="faq"
        className={cn('pt-10 pb-32', className)}
        {...props}
      >
        <div className="mx-auto max-w-5xl pl-4 pr-6 md:pl-2 sm:pr-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-sm border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-4">
                {t('faq.badge', currentLanguage) as string}
              </div>
              <h2 className="text-2xl font-regular tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-zinc-800 dark:text-white mb-3">
                {t('faq.title', currentLanguage) as string}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed tracking-tight max-w-2xl mx-auto">
                {t('faq.subtitle', currentLanguage) as string}
              </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-2xl mx-auto space-y-2 w-full">
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  playClickSound={playClickSound}
                />
              ))}
            </div>

            {/* Contact Section */}
            {contactInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-md mx-auto mt-12 p-6 rounded-sm text-center"
              >
                <div className="inline-flex items-center justify-center p-1.5 rounded-sm mb-4">
                  <Mail className="h-3 w-3" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  {contactInfo.title}
                </p>
                <p className="text-xs text-foreground/80 mb-4">
                  {contactInfo.description}
                </p>
                <Button
                  size="header"
                  onClick={() => {
                    contactInfo.onContact?.();
                    playClickSound();
                  }}
                >
                  {contactInfo.buttonText}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  },
);
FaqSection.displayName = 'FaqSection';

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
    playClickSound: () => void;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(props.index === 0);
  const { question, answer, index, playClickSound } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        'group',
        'transition-all duration-200 ease-in-out rounded-sm',
        isOpen
          ? 'border-t border-l border-r border-border/50 border-b-0 bg-linear-to-br from-background via-muted/50 to-background'
          : 'border border-border/50 hover:bg-muted/50',
      )}
    >
      <Button
        variant="dashed"
        onClick={() => {
          setIsOpen(!isOpen);
          playClickSound();
        }}
        className="w-full px-6 py-6 h-auto justify-between hover:bg-transparent items-start flex-wrap sm:flex-nowrap"
      >
        <h3
          className={cn(
            'text-sm sm:text-base font-medium transition-colors duration-200 text-left leading-relaxed',
            'text-gray-600 dark:text-white',
            'wrap-break-word whitespace-normal word-break hyphens-auto flex-1 pr-3',
            isOpen && 'text-gray-900 dark:text-white',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            'p-0.5 rounded-sm shrink-0 mt-1',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-foreground/80',
          )}
        >
          <ChevronDown className="h-3 w-3" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeIn' },
            }}
          >
            <div className="px-6 pb-4 pt-2 border-b border-border/50 rounded-sm">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-foreground/80 text-sm leading-relaxed text-left"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = 'FaqItem';

// FAQ Footer component
const FaqFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { currentLanguage } = useTranslation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group transition-all duration-200 ease-in-out rounded-sm border border-border/50 hover:bg-muted/50',
        className
      )}
    >
      <div className="w-full px-6 py-3 h-auto justify-between hover:bg-transparent items-center flex-wrap sm:flex-nowrap flex">
        <h3 className="text-sm sm:text-base font-medium transition-colors duration-200 text-left leading-relaxed text-gray-600 dark:text-white wrap-break-word whitespace-normal word-break hyphens-auto flex-1 pr-3">
          {t('faq.still_have_questions', currentLanguage) as string}
        </h3>
        <a
          href="/docs"
          className="text-sm hover:opacity-75 transition-colors font-medium text-zinc-800 dark:text-white shrink-0"
        >
          {t('faq.visit_docs', currentLanguage) as string}
        </a>
      </div>
    </motion.div>
  );
});
FaqFooter.displayName = 'FaqFooter';

export { FaqSection, FaqFooter };
