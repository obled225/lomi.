/* @proprietary license */

import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/utils/translation-context';
import { t as translate } from '@/lib/i18n/translations';
import { AgnosticBackground } from './agnostic-background';
import ContributorCounter from './contributor-counter';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { ComponentProps } from 'react';
import { playClickSound } from '@/lib/utils/sound';
import { useTheme } from '@/lib/hooks/use-theme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  blueVsTheme,
  blueVsDarkTheme,
} from '@/lib/utils/code-highlighting-theme';

export function PreviewImages(props: ComponentProps<'div'>) {
  const { currentLanguage } = useTranslation();
  const { resolvedTheme, mounted } = useTheme();
  const [active, setActive] = useState(1);

  // Create t function that uses currentLanguage (same pattern as footer.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));

  // Use same logic as hero component for dashboard
  const getDashboardImage = (language: string) => {
    if (language === 'en' || language === 'fr') {
      return {
        light: `/company/dashboard/main-${language}-l.webp`,
        dark: `/company/dashboard/main-${language}-d.webp`,
      };
    }

    if (language === 'es') {
      return {
        light: '/company/dashboard/main-es-l.webp',
        dark: '/company/dashboard/main-es-d.webp',
      };
    }

    if (language === 'zh') {
      return {
        light: '/company/dashboard/main-zh-l.webp',
        dark: '/company/dashboard/main-zh-d.webp',
      };
    }

    // Default fallback to English main
    return {
      light: '/company/dashboard/main-en-l.webp',
      dark: '/company/dashboard/main-en-d.webp',
    };
  };

  const dashboardImage = getDashboardImage(currentLanguage);
  const currentTheme = mounted ? resolvedTheme : 'dark';

  const previews = [
    {
      image: currentTheme === 'dark' ? '/company/add-ons/docs-d.webp' : '/company/add-ons/docs-l.webp',
      name: t('sdks.documentation'),
    },
    {
      image: currentTheme === 'dark' ? dashboardImage.dark : dashboardImage.light,
      name: t('sdks.dashboard'),
    },
    {
      image: '/company/add-ons/checkout.webp',
      name: t('sdks.checkout'),
    },
  ];

  return (
    <div {...props} className={cn('relative flex flex-col gap-2', props.className)}>
      <div className="relative w-full h-[310px]">
        {previews.map((item, i) => (
          <Image
            key={i}
            src={item.image}
            alt="preview"
            width={400}
            height={300}
            className={cn(
              'absolute inset-0 w-full h-full select-none rounded-sm object-cover border border-border',
              active === i ? '' : 'invisible',
            )}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex gap-1 rounded-sm bg-muted/30 border border-border p-1 w-[360px] h-10">
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActive(0);
            }}
            className={`flex-1 px-3 pt-1.5 pb-2.5 text-sm font-normal rounded-sm transition-all duration-200 h-7.5 focus:outline-none focus:ring-0 focus:border-none ${active === 0
              ? 'bg-[#E9EAEF] dark:bg-[#2A2B30] text-foreground shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {t('sdks.documentation')}
          </button>
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActive(1);
            }}
            className={`flex-1 px-3 pt-1.5 pb-2.5 text-sm font-normal rounded-sm transition-all duration-200 h-7.5 focus:outline-none focus:ring-0 focus:border-none ${active === 1
              ? 'bg-[#E9EAEF] dark:bg-[#2A2B30] text-foreground shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {t('sdks.dashboard')}
          </button>
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActive(2);
            }}
            className={`flex-1 px-3 pt-1.5 pb-2.5 text-sm font-normal rounded-sm transition-all duration-200 h-7.5 focus:outline-none focus:ring-0 focus:border-none ${active === 2
              ? 'bg-[#E9EAEF] dark:bg-[#2A2B30] text-foreground shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {t('sdks.checkout')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function AddOns() {
  const { currentLanguage } = useTranslation();
  const { resolvedTheme, mounted } = useTheme();

  // Create t function that uses currentLanguage (same pattern as footer.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));

  // Usage code example for SDK integration
  const usageCode = `import { getLomiClient } from '@lomi./sdk-next';

const lomiClient = getLomiClient();

const checkoutSession = await lomiClient.checkoutSessions.create({
  amount: 50000,
  currency_code: 'XOF',
  price_id: 'price_12345678-1234-1234-1234-123456789abc',
  environment: 'live',
  allow_coupon_code: true,
  allow_quantity: false,
  require_billing_address: false
});

window.location.href = checkoutSession.checkout_url;`;

  return (
    <Section className="mt-16 md:mt-28 mb-8 md:mb-32 lg:mb-28">
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
        <SectionHeader title={t('sdks.title')} className="mb-6 md:mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="size-full"
          >
            <Card className="relative flex flex-col overflow-hidden z-2 rounded-sm h-[400px]">
              <CardContent className="p-6 relative h-full">
                <h3 className="text-xl font-semibold mb-6">
                  {t('sdks.frameworkAgnostic')}
                </h3>
                <p className="text-muted-foreground">
                  {t('sdks.sdksDescription')}
                </p>
                <div className="absolute bottom-6 left-6 flex flex-row gap-2 bg-slate-50 border border-gray-200 dark:bg-zinc-800 dark:border-[0.15px] dark:border-gray-700/20 rounded-xl p-2 w-fit">
                  <svg
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                  </svg>
                  <Image
                    src="/random/js.webp"
                    alt="JavaScript"
                    width={28}
                    height={28}
                    className="size-6"
                  />
                  <Image
                    src="/random/python.webp"
                    alt="Python"
                    width={20}
                    height={20}
                    className="size-5 translate-y-0.5"
                  />
                  <Image
                    src="/random/laravel.webp"
                    alt="Laravel"
                    width={24}
                    height={24}
                    className="size-5 translate-y-0.5"
                  />
                  <Image
                    src="/random/go.webp"
                    alt="Go"
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>
              </CardContent>
              <AgnosticBackground variant="masked" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="size-full"
          >
            <Card className="relative flex flex-col overflow-hidden z-2 rounded-sm h-[400px]">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6">
                  {t('sdks.communityDriven')}
                </h3>
                <div className="flex-1 flex items-center justify-center">
                  <ContributorCounter
                    repoOwner="lomiafrica"
                    repoName="lomi."
                    displayCount={12}
                    className="w-full"
                  />
                </div>
              </CardContent>
              <AgnosticBackground variant="sphere" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block size-full"
          >
            <Card className="relative flex flex-col overflow-hidden z-2 rounded-sm h-[400px]">
              <CardContent className="p-6 relative h-full">
                <PreviewImages className="flex-1" />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="size-full"
          >
            <Card className="relative flex flex-col overflow-hidden z-2 rounded-sm h-[400px]">
              <CardContent className="p-6 flex flex-col h-full gap-6">
                <h3 className="text-xl font-semibold">
                  {t('sdks.minimalYetPowerful')}
                </h3>
                <div className="bg-muted/50 dark:bg-blue-950/30 rounded-sm overflow-hidden shadow-sm h-[300px] md:h-[300px] overflow-y-auto hide-scrollbar">
                  {mounted && (
                    <SyntaxHighlighter
                      language="typescript"
                      style={
                        resolvedTheme === 'dark'
                          ? blueVsDarkTheme
                          : blueVsTheme
                      }
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        fontSize: '0.75rem',
                        lineHeight: '1.5',
                      }}
                      wrapLines={true}
                      codeTagProps={{
                        style: {
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        },
                      }}
                    >
                      {usageCode}
                    </SyntaxHighlighter>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
