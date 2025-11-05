'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';

export default function TermsClient() {
    const { currentLanguage } = useTranslation();

    return (
        <>
            <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
                <div className="flex flex-col space-y-6 text-left mt-24">
                    <div className="space-y-4">
                        <motion.h1
                            className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line -mt-2 md:mt-0"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {t('terms.title', currentLanguage) as string}
                        </motion.h1>
                        <motion.p
                            className="text-foreground/90 text-base leading-relaxed tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            dangerouslySetInnerHTML={{
                                __html: t('terms.introduction', currentLanguage) as string,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
