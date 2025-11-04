'use client';

import { useEffect } from "react";
import { useTranslation } from "@/lib/contexts/translation-context";
import mixpanelService from "@/lib/mixpanel/client";

export function useHomePageInit() {
  const { currentLanguage, setLanguage } = useTranslation();

  // Function to get the appropriate image based on language
  const getDashboardImage = () => {

    // For English and French, randomly select between main and bis
    if (currentLanguage === "en" || currentLanguage === "fr") {
      const variants = ["main", "bis"];
      const randomVariant =
        variants[Math.floor(Math.random() * variants.length)];
      return `/company/portal-${randomVariant}-${currentLanguage}.webp`;
    }

    // For other languages, use the main version
    if (currentLanguage === "es") {
      return "/company/portal-main-es.webp";
    }

    if (currentLanguage === "zh") {
      return "/company/portal-main-zh.webp";
    }

    // Default fallback to English main
    return "/company/portal-main-en.webp";
  };

  // Initialize language settings
  useEffect(() => {
    const initializeLanguage = () => {
      const savedLanguage = localStorage.getItem("language");
      const browserLanguage = navigator.language.split("-")[0] || "";

      const supportedLanguages = ["en", "fr", "es", "zh"];

      // If no saved language preference exists yet
      if (!savedLanguage) {
        // Use browser language if supported, otherwise default to English
        const languageToUse = supportedLanguages.includes(browserLanguage)
          ? browserLanguage
          : "en";

        // Save language preference
        localStorage.setItem("language", languageToUse);
        console.log("Language initialized from browser:", languageToUse);

        // Apply language change if needed
        if (currentLanguage !== languageToUse) {
          setLanguage(languageToUse);
        }
      }
    };

    initializeLanguage();
  }, [currentLanguage, setLanguage]);

  // Force dark mode for home page
  useEffect(() => {
    // Remove any existing theme classes first
    document.documentElement.classList.remove("light", "dark");

    // Always apply dark mode for home page
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";

    // Dispatch theme change event to notify any listeners
    window.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: { theme: "dark" },
      }),
    );
  }, []);

  // Track page view
  useEffect(() => {
    // Defer tracking slightly to avoid blocking initial render
    const timerId = setTimeout(() => {
      // Track landing page view with device and browser information
      mixpanelService.track("Landing Page Viewed", {
        timestamp: new Date().toISOString(),
        referrer: document.referrer || "direct",
        url: window.location.href,
        path: window.location.pathname,
        utm_source:
          new URLSearchParams(window.location.search).get("utm_source") ||
          undefined,
        utm_medium:
          new URLSearchParams(window.location.search).get("utm_medium") ||
          undefined,
        utm_campaign:
          new URLSearchParams(window.location.search).get("utm_campaign") ||
          undefined,
        device_type: /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        browser: getBrowserInfo(),
        // operating_system is automatically added by the mixpanelService
      });
    }, 2500);

    // Cleanup the timeout if the component unmounts before it fires
    return () => clearTimeout(timerId);
  }, []);

  // Helper function to get browser information
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else {
      browserName = "Unknown";
    }

    return browserName;
  };

  return {
    getDashboardImage,
  };
}
