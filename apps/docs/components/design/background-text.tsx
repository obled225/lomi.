"use client";

import { useTheme } from "@/lib/hooks/use-theme";
import { useTranslation } from "@/lib/contexts/translation-context";
import { t } from "@/lib/i18n/translations";
import Image from "next/image";

interface BackgroundTextProps {
  children?: React.ReactNode;
}

export function BackgroundText({ children }: BackgroundTextProps) {
  const { resolvedTheme, mounted } = useTheme();
  const { currentLanguage } = useTranslation();

  const imageSrc = resolvedTheme === "dark" ? "/icon_tw.webp" : "/icon_tb.webp";

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden mt-[-80px] h-[240px] translate-y-4 md:mt-[-100px] md:h-[388px] relative z-0 pointer-events-none">
      <Image
        src={imageSrc}
        alt="background"
        className="absolute inset-0 w-[500px] h-[333px] object-cover md:w-[1000px] md:h-[330px] origin-bottom translate-y-[-28px] md:translate-y-[122px] opacity-[0.08] select-none mx-auto pointer-events-none"
        width={1000}
        height={445}
        priority={false}
      />

      {/* Horizontal line */}
      <div className="hidden md:block absolute top-3/4 md:top-[82%] w-full h-px bg-zinc-200 dark:bg-zinc-800" />

      {/* Overlay for the bottom half to make it less visible */}
      <div className="hidden md:block absolute top-3/4 md:top-[82%] bottom-0 left-0 right-0 bg-background/30 dark:bg-background/60 pointer-events-none" />

      {/* Company description text */}
      <div className="hidden md:block absolute top-[calc(75%+8px)] md:top-[calc(82%+8px)] right-16 md:right-44 z-20 pointer-events-auto">
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 max-w-lg text-right leading-relaxed">
          {t("footer.company_credit", currentLanguage) as string}{" "}
          <a
            href="https://lomi.africa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            {t("footer.lomi", currentLanguage) as string}
          </a>
        </p>
      </div>

      <div className="relative z-10 h-full md:h-[calc(100%+1rem)] md:-mb-8">
        {children}
      </div>
    </div>
  );
}
