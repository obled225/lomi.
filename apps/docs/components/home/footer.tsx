"use client";

import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/design/language-switcher";
import { BackgroundText } from "@/components/design/background-text";
import { LottieIcon } from "@/components/ui/lottie-icon";
import { animations } from "@/lib/utils/lottie-animations";
import { useTheme } from "@/lib/hooks/use-theme";
import { useTranslation } from "@/lib/contexts/translation-context";
import { usePlatform } from "@/lib/hooks/use-is-mac";
import { t } from "@/lib/i18n/translations";
import { GitHubIcon, LinkedInIcon, XIcon, SlackIcon } from "@/components/icons";
import { ProductHuntBadge } from "@/components/design/product-hunt-badge";
import {
  playClickSound as playSound,
  getSoundEnabled,
  setSoundEnabled,
} from "@/lib/utils/sound";
import { Cookies } from "@/lib/utils/constants";

const GITHUB_REPO_URL = "https://github.com/princemuichkine/viacascade";

export function Footer() {
  const { resolvedTheme, mounted, setTheme } = useTheme();
  const { currentLanguage } = useTranslation();
  const platform = usePlatform();
  const [hoveredTheme, setHoveredTheme] = useState(false);
  const [hoveredSound, setHoveredSound] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => getSoundEnabled());

  useEffect(() => {
    // Listen for changes from other tabs or components
    const handleSoundChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.enabled === "boolean") {
        setIsSoundEnabled(detail.enabled);
      }
    };
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === Cookies.SoundEnabled) {
        setIsSoundEnabled(e.newValue !== "false");
      }
    };

    window.addEventListener("cascade:sound-changed", handleSoundChange);
    window.addEventListener("storage", handleStorageChange);

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      document.documentElement.style.overscrollBehaviorY = isAtBottom
        ? "none"
        : "auto";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cascade:sound-changed", handleSoundChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const playClickSound = useCallback(() => {
    playSound();
  }, []);

  const toggleTheme = useCallback(() => {
    playClickSound();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme, playClickSound]);

  const toggleSound = useCallback(() => {
    playClickSound();

    // Update state for instant UI change and persist the setting.
    const newSoundEnabled = !isSoundEnabled;
    setIsSoundEnabled(newSoundEnabled);
    setSoundEnabled(newSoundEnabled);
  }, [isSoundEnabled, playClickSound]);

  // Wait for theme to be mounted to prevent hydration mismatches
  const logoSrc = "/icon.webp";

  return (
    <div>
      <div className="relative w-full bg-background pt-28 sm:pt-6">
        {/* Header with Logo and Tagline */}
        <div className="container max-w-6xl mx-auto px-4 pt-8 py-8 border-b border-zinc-200 dark:border-zinc-800"></div>

        {/* Footer content */}
        <div className="w-full text-zinc-600 dark:text-zinc-400 pt-8 pb-20 select-none relative z-10">
          <div className="container max-w-5xl mx-auto pl-4 pr-6 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-8">
              {/* Subscribe and Social */}
              <div className="space-y-4 lg:-translate-x-2 order-3 md:order-1">
                <div className="flex flex-row items-center text-left justify-start gap-2 w-full max-w-[600px]">
                  <div className="flex items-center gap-6 flex-wrap ml-4 sm:ml-4 justify-left w-full sm:w-auto">
                    <Link
                      href="/"
                      onClick={playClickSound}
                      className="inline-flex items-center"
                    >
                      {mounted && (
                        <Image
                          src={logoSrc}
                          alt="lomi. logo"
                          width={38}
                          height={38}
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
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
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#6f42c1] inline-flex items-center transition-colors"
                      aria-label="View our GitHub"
                    >
                      <GitHubIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <Link
                      href="https://x.com/viacascadecom"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#000000] dark:hover:text-[#FFFFFF] inline-flex items-center transition-colors"
                      aria-label="Follow us on X"
                    >
                      <XIcon className="h-[22px] w-[22px] translate-y-[-0.5px] translate-x-[-4px]" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/viacascade"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#0072b1] dark:hover:text-[#0072b1] inline-flex items-center transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <LinkedInIcon className="h-[19px] w-[19px] translate-x-[-2px]" />
                    </Link>
                    <Link
                      href="https://slack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-[#36C5F0] dark:hover:text-[#36C5F0] inline-flex items-center transition-colors"
                      aria-label="Join us on Slack"
                    >
                      <SlackIcon className="h-[20px] w-[20px]" />
                    </Link>
                    <div
                      onClick={toggleTheme}
                      onMouseEnter={() => setHoveredTheme(true)}
                      onMouseLeave={() => setHoveredTheme(false)}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white inline-flex items-center transition-colors cursor-pointer"
                      aria-label={
                        mounted
                          ? `Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`
                          : "Toggle theme"
                      }
                      title={
                        mounted
                          ? `Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`
                          : "Toggle theme"
                      }
                    >
                      {mounted && (
                        <LottieIcon
                          animationData={
                            resolvedTheme === "dark"
                              ? animations.sun
                              : animations.point
                          }
                          size={23}
                          loop={false}
                          autoplay={false}
                          initialFrame={0}
                          isHovered={hoveredTheme}
                          ariaLabel={
                            mounted
                              ? `Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`
                              : "Toggle theme"
                          }
                          customColor={
                            hoveredTheme
                              ? resolvedTheme === "dark"
                                ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                                : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                              : resolvedTheme === "dark"
                                ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                                : [0.322, 0.322, 0.357] // zinc-600 in light mode
                          }
                        />
                      )}
                    </div>
                    <div
                      onClick={toggleSound}
                      onMouseEnter={() => setHoveredSound(true)}
                      onMouseLeave={() => setHoveredSound(false)}
                      className="hidden lg:flex text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white items-center transition-colors cursor-pointer"
                      aria-label={
                        mounted
                          ? `Toggle sound ${isSoundEnabled ? "off" : "on"}`
                          : "Toggle sound"
                      }
                      title={
                        mounted
                          ? `Toggle sound ${isSoundEnabled ? "off" : "on"}`
                          : "Toggle sound"
                      }
                    >
                      {mounted && (
                        <LottieIcon
                          animationData={
                            isSoundEnabled ? animations.pause : animations.play
                          }
                          size={23}
                          loop={false}
                          autoplay={false}
                          initialFrame={0}
                          isHovered={hoveredSound}
                          ariaLabel={
                            mounted
                              ? `Toggle sound ${isSoundEnabled ? "off" : "on"}`
                              : "Toggle sound"
                          }
                          customColor={
                            hoveredSound
                              ? resolvedTheme === "dark"
                                ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                                : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                              : resolvedTheme === "dark"
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

                {/* Description */}
                <div className="mt-2">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed text-left">
                    {t("footer.description", currentLanguage) as string}
                  </p>
                </div>

                <div className="flex flex-row items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mt-4 w-full">
                  <span className="px-2 py-1.5 h-8 bg-transparent hover:bg-[#2a2f3d]/3 rounded-sm transition-colors duration-200 dark:hover:bg-[#2a2f3d]/10 inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                    {t("footer.copyright", currentLanguage) as string}
                  </span>
                  <LanguageSwitcher className="px-2 py-1.5 h-8 bg-transparent hover:bg-[#2a2f3d]/3 rounded-sm transition-colors duration-200 dark:hover:bg-[#2a2f3d]/10 inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100" />
                </div>

                {/* System Status
                <div className="hidden sm:flex mt-[20px] ml-auto relative h-[70px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2.5 px-2 py-1.5 text-xs h-8 bg-transparent hover:bg-[#2a2f3d]/[0.03] rounded-sm transition-colors duration-200 justify-center dark:hover:bg-[#2a2f3d]/10 group text-blue-700 dark:text-[#4fd686] hover:text-blue-800 dark:hover:text-[#4fd686]"
                  >
                    <div className="relative flex items-center justify-center w-3 h-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-sm bg-blue-400 dark:bg-[#4fd686]/50 opacity-50"></span>
                      <span className="relative inline-flex rounded-sm h-3 w-3 bg-blue-500 dark:bg-[#2a5a45] items-center justify-center">
                        <Check
                          className="h-2 w-2 text-white dark:text-[#4fd686]"
                          strokeWidth={3}
                        />
                      </span>
                    </div>
                    <span className="text-blue-700 dark:text-[#4fd686] font-normal whitespace-nowrap text-center">
                      {t("footer.status", currentLanguage) as string}
                    </span>
                  </a>
                </div> */}
              </div>

              {/* Features Column */}
              <div className="space-y-4 md:translate-x-30 order-1 md:order-2">
                <h2 className="text-zinc-900 dark:text-white font-normal text-md">
                  {t("footer.features.title", currentLanguage) as string}
                </h2>
                <ul className="space-y-3 relative z-20 pointer-events-auto">
                  {[
                    {
                      name: t("footer.features.learn", currentLanguage),
                      key: "learn",
                      link: "#",
                    },
                    {
                      name: t("footer.features.enrich", currentLanguage),
                      key: "enrich",
                      link: "#",
                    },
                    {
                      name: t("footer.features.linkedin", currentLanguage),
                      key: "linkedin",
                      link: "#",
                    },
                    {
                      name: t("footer.features.autopilot", currentLanguage),
                      key: "autopilot",
                      link: "#",
                    },
                    {
                      name: t("footer.features.xray", currentLanguage),
                      key: "xray",
                      link: "#",
                    },
                    {
                      name: t("footer.features.scrapers", currentLanguage),
                      key: "scrapers",
                      link: "#",
                    },
                  ].map((item) => (
                    <li key={item.key} className="relative z-20">
                      <span className="text-sm text-zinc-400 dark:text-zinc-500 inline-flex items-center gap-2 cursor-not-allowed">
                        {item.name as string}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4 lg:translate-x-24 order-2 md:order-3">
                <h2 className="text-zinc-900 dark:text-white font-normal text-md">
                  {t("footer.resources.title", currentLanguage) as string}
                </h2>
                <ul className="space-y-3">
                  {platform !== "mobile" && (
                    <li>
                      <a
                        href="#"
                        onClick={playClickSound}
                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                      >
                        {platform === "mac"
                          ? (t(
                            "footer.resources.download_macos",
                            currentLanguage,
                          ) as string)
                          : (t(
                            "footer.resources.download_windows",
                            currentLanguage,
                          ) as string)}
                      </a>
                    </li>
                  )}
                  <li>
                    <Link
                      href="/blog"
                      onClick={playClickSound}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/changelog"
                      onClick={playClickSound}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {
                        t(
                          "footer.resources.changelog",
                          currentLanguage,
                        ) as string
                      }
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/assets/brand-assets.zip"
                      download
                      onClick={playClickSound}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {
                        t(
                          "footer.resources.branding",
                          currentLanguage,
                        ) as string
                      }
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      onClick={playClickSound}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {t("footer.resources.privacy", currentLanguage) as string}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      onClick={playClickSound}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {t("footer.resources.terms", currentLanguage) as string}
                    </Link>
                  </li>
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
