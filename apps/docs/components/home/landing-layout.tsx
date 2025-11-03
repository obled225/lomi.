"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/design/theme-provider";
import SoundGateInit from "@/components/ui/sound-gate-init";
import { Analytics } from "@vercel/analytics/react";
import { ThemedToaster } from "@/components/design/themed-toaster";
import { ModalProvider } from "@/components/workspace/sidebar/modal-provider";

// Dynamically import TranslationProvider to avoid SSR issues
const TranslationProvider = dynamic(
  () =>
    import("@/lib/contexts/translation-context").then((mod) => ({
      default: mod.TranslationProvider,
    })),
  {
    ssr: false,
    loading: () => null,
  },
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Suspense fallback={null}>
        <TranslationProvider>
          <SoundGateInit />
          <ModalProvider />
          <main>{children}</main>
          <ThemedToaster />
          <Analytics />
        </TranslationProvider>
      </Suspense>
    </ThemeProvider>
  );
}
