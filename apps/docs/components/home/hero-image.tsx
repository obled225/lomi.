'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SimpleImageProps {
  src:
  | string
  | {
    light: string;
    dark: string;
  };
  mobileSrc?: {
    light: string;
    dark: string;
  };
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function SimpleImage({
  src,
  mobileSrc,
  alt,
  width,
  height,
  className,
}: SimpleImageProps) {
  // Initialize state directly from documentElement class for immediate accuracy
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() =>
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light',
  );

  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Use MutationObserver for instant reaction to class changes on <html>
  useEffect(() => {
    // Set up an observer to detect class changes on the document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          // Update state based on the new class state
          const isDark = document.documentElement.classList.contains('dark');
          setCurrentTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    // Start observing the <html> element
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: disconnect observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array: run only once on mount

  // Handle both string and object formats for src, with mobile support
  const currentSrc = isMobile && mobileSrc ? mobileSrc : src;
  const imageSrc =
    typeof currentSrc === 'string'
      ? currentSrc
      : currentTheme === 'dark'
        ? currentSrc.dark
        : currentSrc.light;

  return (
    <div className="w-full">
      <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative overflow-hidden rounded-sm border border-gray-200 dark:border-zinc-800 p-0 shadow-sm shadow-zinc-950/15 ring-1">
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`w-full min-h-[500px] md:min-h-[600px] h-auto object-cover rounded-sm ${className || ''}`}
          loading="eager"
          decoding="async"
          crossOrigin="anonymous"
          priority
        />
      </div>
    </div>
  );
}
