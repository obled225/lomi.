/* @proprietary license */

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from './logo';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const logo = <Logo />;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const linkItems: any[] = [];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: logo,
    },
    // see /docs/ui/navigation/links
    links: linkItems,
  };
}
