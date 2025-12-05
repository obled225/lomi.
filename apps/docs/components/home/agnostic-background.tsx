/* @proprietary license */

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/lib/hooks/use-theme';
import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

function useIsVisible(ref: React.RefObject<HTMLDivElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}

type BackgroundVariant =
  | 'hero'
  | 'masked'
  | 'wave'
  | 'sphere'
  | 'blob'
  | 'ripple';

interface AgnosticBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
}

interface ContentAdoptionBackgroundProps {
  className?: string;
  softness?: number;
  intensity?: number;
  noise?: number;
  minPixelRatio?: number;
}

export function AgnosticBackground({
  variant = 'masked',
  className,
}: AgnosticBackgroundProps) {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(ref);

  const renderEffects = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            {/* Hero GrainGradient - fills entire container like Fumadocs */}
            <GrainGradient
              className="absolute inset-0 animate-fd-fade-in duration-800"
              colors={
                resolvedTheme === 'dark'
                  ? [
                    '#0C4A6E',
                    '#1E5A8A',
                    '#2B77E6',
                    '#4A9EF8',
                    '#7DD3FC',
                    '#E0F2FE00',
                  ]
                  : [
                    '#56A5F9',
                    '#4A9EF8',
                    '#3B82F6',
                    '#60A5FA',
                    '#7DD3FC',
                    '#93C5FD',
                    '#DBEAFE00',
                  ]
              }
              colorBack="#00000000"
              softness={1}
              intensity={0.9}
              noise={0.5}
              speed={visible ? 1 : 0}
              shape="corners"
              minPixelRatio={1}
              maxPixelCount={1920 * 1080}
            />

            {/* Hero Dithering - positioned like Fumadocs */}
            <Dithering
              width={720}
              height={720}
              colorBack="#00000000"
              colorFront="#4A9EF8"
              shape="sphere"
              type="4x4"
              scale={0.5}
              size={3}
              speed={0}
              frame={5000 * 120}
              className="absolute animate-fd-fade-in duration-400 max-lg:bottom-[-50%] max-lg:left-[-200px] lg:top-[-5%] lg:right-0"
              minPixelRatio={1}
            />
          </>
        );

      case 'masked':
        return (
          <Dithering
            colorBack="#00000000"
            colorFront="#56A5F9"
            shape="warp"
            type="8x8"
            speed={visible ? 0.4 : 0}
            className="size-full"
            minPixelRatio={0.8}
          />
        );

      case 'wave':
        // Wave style - GrainGradient with wave shape
        return (
          <GrainGradient
            className="size-full"
            colors={
              resolvedTheme === 'dark'
                ? [
                  '#0C4A6E',
                  '#1E5A8A',
                  '#2B77E6',
                  '#4A9EF8',
                  '#7DD3FC',
                  '#E0F2FE00',
                ]
                : [
                  '#56A5F9',
                  '#4A9EF8',
                  '#3B82F6',
                  '#60A5FA',
                  '#7DD3FC',
                  '#93C5FD',
                  '#DBEAFE00',
                ]
            }
            speed={visible ? 1 : 0}
            colorBack="#00000000"
            shape="wave"
            softness={0.8}
            intensity={0.9}
            noise={0.4}
            minPixelRatio={0.8}
          />
        );

      case 'sphere':
        // Sphere style - GrainGradient with sphere shape
        return (
          <GrainGradient
            className="size-full"
            colors={
              resolvedTheme === 'dark'
                ? [
                  '#0C4A6E',
                  '#1E5A8A',
                  '#2B77E6',
                  '#4A9EF8',
                  '#7DD3FC',
                  '#E0F2FE00',
                ]
                : [
                  '#56A5F9',
                  '#4A9EF8',
                  '#3B82F6',
                  '#60A5FA',
                  '#7DD3FC',
                  '#93C5FD',
                  '#DBEAFE00',
                ]
            }
            speed={visible ? 1 : 0}
            colorBack="#00000000"
            shape="sphere"
            softness={0.8}
            intensity={0.9}
            noise={0.4}
            minPixelRatio={0.8}
          />
        );

      case 'blob':
        // Blob style - GrainGradient with blob shape
        return (
          <GrainGradient
            className="size-full"
            colors={
              resolvedTheme === 'dark'
                ? [
                  '#0C4A6E',
                  '#1E5A8A',
                  '#2B77E6',
                  '#4A9EF8',
                  '#7DD3FC',
                  '#E0F2FE00',
                ]
                : [
                  '#56A5F9',
                  '#4A9EF8',
                  '#3B82F6',
                  '#60A5FA',
                  '#7DD3FC',
                  '#93C5FD',
                  '#DBEAFE00',
                ]
            }
            speed={visible ? 1 : 0}
            colorBack="#00000000"
            shape="blob"
            softness={0.8}
            intensity={0.9}
            noise={0.4}
            minPixelRatio={0.8}
          />
        );

      case 'ripple':
        // Ripple style - GrainGradient with ripple shape
        return (
          <GrainGradient
            className="size-full"
            colors={
              resolvedTheme === 'dark'
                ? [
                  '#0C4A6E',
                  '#1E5A8A',
                  '#2B77E6',
                  '#4A9EF8',
                  '#7DD3FC',
                  '#E0F2FE00',
                ]
                : [
                  '#56A5F9',
                  '#4A9EF8',
                  '#3B82F6',
                  '#60A5FA',
                  '#7DD3FC',
                  '#93C5FD',
                  '#DBEAFE00',
                ]
            }
            speed={visible ? 1 : 0}
            colorBack="#00000000"
            shape="ripple"
            softness={0.8}
            intensity={0.9}
            noise={0.4}
            minPixelRatio={0.8}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      className={`absolute inset-0 -z-1 overflow-hidden ${variant === 'masked'
          ? 'mask-[linear-gradient(to_top,white_30%,transparent_calc(100%-120px))]'
          : ''
        } ${className || ''}`}
    >
      {/* CSS gradient placeholder - shows immediately while shaders load */}
      {variant === 'hero' && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-blue-500/20 to-transparent dark:from-sky-900/40 dark:via-blue-800/30 dark:to-transparent"
          aria-hidden="true"
        />
      )}
      {renderEffects()}
    </div>
  );
}

export function ContentAdoptionBackground({
  className,
  softness = 1,
  intensity = 0.8,
  noise = 0.3,
  minPixelRatio = 1,
}: ContentAdoptionBackgroundProps) {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(ref);

  return (
    <div ref={ref} className={`absolute inset-0 -z-1 ${className || ''}`}>
      <GrainGradient
        className="size-full"
        colors={
          resolvedTheme === 'dark'
            ? [
              '#0C4A6E',
              '#1E5A8A',
              '#2B77E6',
              '#4A9EF8',
              '#7DD3FC',
              '#E0F2FE00',
            ]
            : [
              '#56A5F9',
              '#4A9EF8',
              '#3B82F6',
              '#60A5FA',
              '#7DD3FC',
              '#93C5FD',
              '#DBEAFE00',
            ]
        }
        colorBack="#00000000"
        softness={softness}
        intensity={intensity}
        noise={noise}
        speed={visible ? 1 : 0}
        shape="corners"
        minPixelRatio={minPixelRatio}
      />
    </div>
  );
}
