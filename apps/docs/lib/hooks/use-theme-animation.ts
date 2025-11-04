import { useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from './use-theme';

export function useThemeAnimation() {
  const { setTheme, theme } = useTheme();
  const themeButtonRef = useRef<HTMLDivElement>(null);

  const toggleTheme = useCallback(async () => {
    if (!themeButtonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      });
    }).ready;

    const { top, left, width, height } =
      themeButtonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  }, [theme, setTheme]);

  return {
    toggleTheme,
    themeButtonRef,
  };
}
