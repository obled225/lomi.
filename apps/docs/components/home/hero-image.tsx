/* @proprietary license */

'use client';

import Image from 'next/image';
import { useTheme } from '@/lib/hooks/use-theme';

interface SimpleImageProps {
  src:
    | string
    | {
        light: string;
        dark: string;
      };
  mobileSrc?:
    | string
    | {
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
  const { resolvedTheme, mounted } = useTheme();

  // Use 'dark' as default during SSR (matches your theme default)
  const currentTheme = mounted ? resolvedTheme : 'dark';

  // Get image source based on theme
  const getImageSrc = (imgSrc: string | { light: string; dark: string }) => {
    if (typeof imgSrc === 'string') return imgSrc;
    return currentTheme === 'dark' ? imgSrc.dark : imgSrc.light;
  };

  const desktopSrc = getImageSrc(src);
  const mobileImageSrc = mobileSrc ? getImageSrc(mobileSrc) : null;

  return (
    <>
      {/* Desktop image - hidden on mobile */}
      <Image
        src={desktopSrc}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-xl border-2 border-gray-200 dark:border-zinc-800 shadow-lg hidden md:block ${className || ''}`}
        loading="eager"
        decoding="async"
        crossOrigin="anonymous"
        priority
        fetchPriority="high"
        sizes="(min-width: 768px) 80vw, 0vw"
      />
      {/* Mobile image - hidden on desktop */}
      {mobileImageSrc && (
        <Image
          src={mobileImageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-xl border-2 border-gray-200 dark:border-zinc-800 shadow-lg block md:hidden ${className || ''}`}
          loading="eager"
          decoding="async"
          crossOrigin="anonymous"
          priority
          fetchPriority="high"
          sizes="(max-width: 767px) 90vw, 0vw"
        />
      )}
    </>
  );
}
