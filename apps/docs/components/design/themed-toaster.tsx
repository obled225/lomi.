"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/lib/hooks/use-theme";

// Toaster component that uses theme after ThemeProvider is mounted
export const ThemedToaster = () => {
  const { resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"} />;
  // return <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"} position="top-center" />;
};
