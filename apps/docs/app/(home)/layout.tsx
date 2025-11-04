import type { ReactNode } from 'react';

interface LayoutProps<T extends string> {
  children: ReactNode;
  params: Promise<{ slug?: T[] }>;
}

export default function Layout({ children }: LayoutProps<'/'>) {
  // The home pages already have their own complete layout in HomePageClient
  // No need for HomeLayout wrapper which adds an extra header
  return <>{children}</>;
}
