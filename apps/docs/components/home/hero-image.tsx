'use client';

import Image from 'next/image';

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
  const commonClasses = `rounded-xl border-2 border-gray-200 dark:border-zinc-800 shadow-lg ${className || ''}`;

  // Helper to render an image variant
  const renderImage = (
    imageSrc: string,
    visibilityClass: string
  ) => (
    <div className={visibilityClass}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={commonClasses}
        loading="eager"
        decoding="async"
        crossOrigin="anonymous"
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </div>
  );

  // Parse sources
  const desktopLight = typeof src === 'string' ? src : src.light;
  const desktopDark = typeof src === 'string' ? src : src.dark;

  // If mobileSrc is not provided, use desktop src for mobile too (default behavior)
  const hasMobile = !!mobileSrc;
  const mobileLight = hasMobile
    ? (typeof mobileSrc === 'string' ? mobileSrc : mobileSrc?.light)
    : desktopLight;
  const mobileDark = hasMobile
    ? (typeof mobileSrc === 'string' ? mobileSrc : mobileSrc?.dark)
    : desktopDark;

  return (
    <>
      {/* Desktop Light */}
      {renderImage(
        desktopLight,
        hasMobile
          ? "hidden md:block dark:md:hidden"
          : "block dark:hidden"
      )}

      {/* Desktop Dark */}
      {renderImage(
        desktopDark,
        hasMobile
          ? "hidden dark:md:block"
          : "hidden dark:block"
      )}

      {/* Mobile Light (only if mobileSrc exists, otherwise handled above) */}
      {hasMobile && renderImage(
        mobileLight!,
        "block md:hidden dark:hidden"
      )}

      {/* Mobile Dark (only if mobileSrc exists, otherwise handled above) */}
      {hasMobile && renderImage(
        mobileDark!,
        "hidden dark:block md:hidden"
      )}
    </>
  );
}

