'use client';

import { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/design/language-switcher';
import { BackgroundText } from '@/components/design/background-text';
import { LottieIcon } from '@/components/ui/lottie-icon';
import { animations } from '@/lib/utils/lottie-animations';
import { useTheme } from '@/lib/hooks/use-theme';
import { useThemeAnimation } from '@/lib/hooks/use-theme-animation';
import { FacebookIcon, GitHubIcon, LinkedInIcon, XIcon, SlackIcon } from '@/components/icons';
import { Check } from 'lucide-react';
import { ProductHuntBadge } from '@/components/design/product-hunt-badge';
import { playClickSound as playSound } from '@/lib/utils/sound';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t as translate } from '@/lib/i18n/translations';

const GITHUB_REPO_URL = 'https://github.com/lomiafrica/lomi./';

export function Footer() {
  const { resolvedTheme, mounted } = useTheme();
  const { toggleTheme, themeButtonRef } = useThemeAnimation();
  const { currentLanguage } = useTranslation();

  // Create t function that uses currentLanguage (same pattern as tracking-cookie.tsx)
  const t = (key: string) => String(translate(key, currentLanguage));
  const [hoveredTheme, setHoveredTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      document.documentElement.style.overscrollBehaviorY = isAtBottom
        ? 'none'
        : 'auto';
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const playClickSound = useCallback(() => {
    playSound();
  }, []);

  const handleToggleTheme = useCallback(async () => {
    playClickSound();
    await toggleTheme();
  }, [toggleTheme, playClickSound]);


  // Wait for theme to be mounted to prevent hydration mismatches

  return (
    <div>
      <div className="relative w-full bg-background pt-28 sm:pt-6">
        {/* Header with Logo and Tagline */}
        <div className="max-w-[1265px] mx-auto pl-2 pr-4 py-2 border-b border-zinc-200 dark:border-zinc-800"></div>

        {/* Footer content */}
        <div className="w-full text-zinc-600 dark:text-zinc-400 pt-12 pb-16 select-none relative z-10">
          <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Subscribe and Social */}
              <div className="space-y-4 order-4 md:order-1">
                <div className="flex flex-row items-center text-left justify-start gap-1 w-full max-w-[600px]">
                  <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start w-full sm:w-auto">
                    <Link
                      href="/"
                      onClick={playClickSound}
                      className="inline-flex items-center"
                    >
                      {mounted && (
                        <>
                          <Image
                            src="/company/transparent_d.webp"
                            alt="lomi. logo"
                            width={38}
                            height={38}
                            className="block dark:hidden cursor-pointer hover:opacity-80 transition-opacity"
                          />
                          <Image
                            src="/company/transparent_l.webp"
                            alt="lomi. logo"
                            width={38}
                            height={38}
                            className="hidden dark:block cursor-pointer hover:opacity-80 transition-opacity"
                          />
                        </>
                      )}
                    </Link>
                    <span className="text-muted-foreground text-lg leading-none font-thin">
                      |
                    </span>
                    <Link
                      href={GITHUB_REPO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#5FED83] dark:hover:text-[#5FED83] inline-flex items-center transition-colors"
                      aria-label="View our GitHub"
                    >
                      <GitHubIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <Link
                      href="https://twitter.com/lomiafrica"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#000000] dark:hover:text-[#FFFFFF] inline-flex items-center transition-colors"
                      aria-label="Follow us on Twitter"
                    >
                      <XIcon className="h-[22px] w-[22px] translate-y-[-0.5px] -translate-x-px" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/lomiafrica"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#1877F2] dark:hover:text-[#1877F2] inline-flex items-center transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <FacebookIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/lomiafri"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] inline-flex items-center transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <LinkedInIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <Link
                      href="https://slack.lomi.africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#E01E5A] dark:hover:text-[#E01E5A] inline-flex items-center transition-colors"
                      aria-label="Join our Slack community"
                    >
                      <SlackIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <div
                      ref={themeButtonRef}
                      onClick={handleToggleTheme}
                      onMouseEnter={() => setHoveredTheme(true)}
                      onMouseLeave={() => setHoveredTheme(false)}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white inline-flex items-center transition-colors cursor-pointer"
                      aria-label={
                        mounted
                          ? `Toggle ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`
                          : 'Toggle theme'
                      }
                      title={
                        mounted
                          ? `Toggle ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`
                          : 'Toggle theme'
                      }
                    >
                      {mounted && (
                        <LottieIcon
                          animationData={
                            resolvedTheme === 'dark'
                              ? animations.sun
                              : animations.point
                          }
                          size={20}
                          loop={false}
                          autoplay={false}
                          initialFrame={0}
                          isHovered={hoveredTheme}
                          ariaLabel={
                            mounted
                              ? `Toggle ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`
                              : 'Toggle theme'
                          }
                          customColor={
                            hoveredTheme
                              ? resolvedTheme === 'dark'
                                ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                                : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                              : resolvedTheme === 'dark'
                                ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                                : [0.322, 0.322, 0.357] // zinc-600 in light mode
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="">
                  <ProductHuntBadge />
                </div>

                {/* Copyright and Language - Better mobile alignment */}
                <div className="flex flex-row items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mt-4 -translate-y-3 w-full">
                  <span className="px-2 py-1.5 h-8 ml-2 md:ml-0 bg-transparent hover:bg-[#2a2f3d]/5 rounded-sm transition-colors duration-200 dark:hover:bg-[#2a2f3d]/20 inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                    {t('footer.copyright')}
                  </span>
                  <div className="">
                    <LanguageSwitcher />
                  </div>
                </div>

                {/* System Status and Certifications Container - Using Absolute Positioning for both */}
                <div className="flex mt-[20px] ml-auto relative h-[70px]">
                  {/* Status Link - Absolutely positioned to the far right */}
                  <a
                    href="https://status.lomi.africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-0 top-1/2 -translate-y-11.5 flex items-center gap-1.5 px-2 py-1.5 text-xs h-8 bg-transparent hover:bg-[#2a2f3d]/5 rounded-sm transition-colors duration-200 justify-center dark:hover:bg-[#2a2f3d]/20 group text-sky-600 dark:text-green-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                    onClick={playClickSound}
                  >
                    <div className="relative flex items-center justify-center w-3 h-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 dark:bg-green-500/50 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 dark:bg-green-900 items-center justify-center">
                        <Check
                          className="h-2 w-2 text-white dark:text-green-300"
                          strokeWidth={3}
                        />
                      </span>
                    </div>
                    <span className="text-sky-600 dark:text-green-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-normal whitespace-nowrap text-center">
                      {t('footer.status')}
                    </span>
                  </a>
                  {/* Certification Icons Container - Absolutely positioned to the left of the status link */}
                  {/* Estimate status link width + gap ~ 160px? Use right-40 (160px) */}
                  <div className="absolute right-40 top-[calc(50%-30px)] -translate-y-1/2 flex items-center">
                    {/* Positioned absolutely, left of status */}
                    {/* PCI Icon Wrapper - Remove cursor-pointer */}
                    <div
                      className="group mr-2"
                      title="lomi. is PCI DSS level 4 certified"
                    >
                      <Image
                        src="/regulatory/PCI_DSS.webp"
                        alt="PCI DSS Certified"
                        width={120}
                        height={70}
                        className="w-[120px] h-[70px] shrink-0 object-contain filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 dark:filter dark:grayscale dark:brightness-100 dark:opacity-25 dark:group-hover:opacity-100 transition-all"
                      />
                    </div>
                    {/* SSL Icon - Remove cursor-pointer */}
                    <div className="group mr-6" title="lomi. is SSL secure">
                      <Image
                        src="/regulatory/SSL.webp"
                        alt="SSL Secured"
                        width={69}
                        height={27}
                        className="w-[69px] h-[27px] shrink-0 object-contain filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 dark:invert dark:opacity-25 dark:group-hover:opacity-100 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Column */}
              <div className="space-y-4 pl-4 order-1 md:order-2 lg:translate-x-[105px]">
                <h2 className="text-zinc-900 dark:text-white font-normal text-base">
                  {t('footer.features.title')}
                </h2>
                <ul className="space-y-3 relative z-20">
                  {[
                    {
                      name: t('footer.features.overview'),
                      link: '/',
                    },
                    {
                      name: t('footer.features.pricing'),
                      link: '/pricing',
                    },
                    {
                      name: t('footer.features.faq'),
                      link: '/faq',
                    },
                  ].map((item) => (
                    <li key={item.name} className="relative z-20">
                      <Link
                        href={item.link}
                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors inline-flex items-center gap-2"
                        onClick={playClickSound}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4 pl-4 order-2 md:order-3 lg:translate-x-[65px]">
                <h2 className="text-zinc-900 dark:text-white font-normal text-base">
                  {t('footer.resources.title')}
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      name: t('footer.resources.github'),
                      link: 'https://github.com/lomiafrica/lomi.',
                    },
                    {
                      name: t('footer.resources.support'),
                      link: '/docs/core/support/contact',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    {
                      name: t('footer.resources.featureRequest'),
                      link: 'https://github.com/lomiafrica/lomi./issues/new?labels=enhancement',
                    },
                    {
                      name: t('footer.resources.review'),
                      link: 'https://www.producthunt.com/products/lomi/reviews/new',
                    },
                    { name: t('footer.resources.privacy'), link: '/privacy' },
                    { name: t('footer.resources.terms'), link: '/terms' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        target={item.target}
                        rel={item.rel}
                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors whitespace-nowrap"
                        onClick={playClickSound}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/assets/lomi.brand.zip"
                      download="lomi.brand.zip"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {t('footer.resources.branding')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-4 pl-4 order-3 md:order-4 lg:translate-x-[55px]">
                <h2 className="text-zinc-900 dark:text-white font-normal text-base">
                  {t('footer.company.title')}
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      name: t('footer.company.story'),
                      link: '/docs/core/introduction/manifesto',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      color: '',
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: t('footer.company.blog'),
                      link: '/blog',
                      color: '',
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: t('footer.company.openSource'),
                      link: '/docs/core/freedom/open-source',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      color:
                        'text-sky-600 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200',
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        target={item.target}
                        rel={item.rel}
                        className={`text-sm ${item.color} transition-colors group flex items-center`}
                        onClick={playClickSound}
                      >
                        <span>{item.name}</span>
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {mounted && (
          <BackgroundText>
            <div className="container max-w-5xl mx-auto px-4 h-full flex items-end justify-end pb-6 md:pb-16 pointer-events-none" />
          </BackgroundText>
        )}
      </div>
    </div>
  );
}
