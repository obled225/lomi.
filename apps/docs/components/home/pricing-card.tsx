/* @proprietary license */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/utils/translation-context';
import { t } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AgnosticBackground } from '@/components/home/agnostic-background';
import { playClickSound } from '@/lib/utils/sound';

interface PricingCardProps {
    currency: 'XOF' | 'USD' | 'EUR';
}

export function PricingCard({ currency }: PricingCardProps) {
    const { currentLanguage } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto pl-2 pr-4 py-2 pb-16">
            <section className="overflow-hidden relative bg-transparent text-foreground dark:text-foreground rounded-sm border p-0 pb-16 pt-8 md:pb-32 md:pt-16 before:absolute before:inset-0 before:bg-linear-to-r before:from-foreground/5 before:via-transparent before:to-foreground/5 before:pointer-events-none dark:before:from-background/20 dark:before:to-background/20 select-none">
                <AgnosticBackground variant="blob" />
                <div className="container flex flex-col items-center justify-center">
                    <div className="text-center mb-6 md:mb-8 px-4">
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 flex flex-col items-center">
                                <div className="flex flex-wrap items-baseline justify-center translate-x-[4px]">
                                    <span className="inline-flex whitespace-nowrap mr-2 text-3xl md:text-4xl lg:text-6xl">
                                        2.5% +
                                    </span>
                                    <div className="relative inline-flex items-center h-16 sm:h-20 md:h-24 min-w-[200px] sm:min-w-[250px] w-auto">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currency === 'XOF' ? '200 F CFA' : currency === 'USD' ? '0.30 USD' : '0.30 EUR'}
                                                className="absolute text-foreground dark:text-foreground whitespace-nowrap mt-2"
                                                initial={{
                                                    opacity: 0,
                                                    y: currency === 'XOF' ? -50 : 50,
                                                }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: currency === 'XOF' ? 50 : -50 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 30,
                                                    duration: 2,
                                                }}
                                                style={{ top: '26px' }}
                                            >
                                                <span className="block sm:inline relative top-[4px] sm:top-0 text-2xl md:text-4xl lg:text-6xl">
                                                    {currency === 'XOF' ? '200 F CFA' : currency === 'USD' ? '0.30 USD' : '0.30 EUR'}
                                                </span>
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 -mt-2 md:-mt-4 px-4">
                        <Button
                            type="button"
                            variant="outline"
                            size="header"
                            asChild
                            onClick={playClickSound}
                        >
                            <a
                                href="docs/core/merchant-of-record/pricing"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Learn more about our pricing structure and fees (opens in new tab)"
                            >
                                {String(t('earlyMemberPricing.learnMore', currentLanguage))}
                            </a>
                        </Button>
                        <Button
                            type="button"
                            variant="blue"
                            size="header"
                            asChild
                            onClick={playClickSound}
                        >
                            <Link href="https://dashboard.lomi.africa/sign-in">
                                {String(t('earlyMemberPricing.getStarted', currentLanguage))}
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
