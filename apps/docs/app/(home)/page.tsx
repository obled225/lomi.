/* @proprietary license */

import { cookies } from 'next/headers';
import { HomePageClient } from '@/components/home/home-page-client';
import { GoogleOneTap } from '@/components/home/google-one-tap';

export default async function Page() {
  // Read title index and language from cookies
  const cookieStore = await cookies();
  const titleIndexCookie = cookieStore.get('hero-title-index');
  const languageCookie = cookieStore.get('lomi.language');

  const titleIndex = titleIndexCookie?.value
    ? parseInt(titleIndexCookie.value, 10)
    : null;

  const currentLanguage = languageCookie?.value || 'en';

  // Calculate default images based on server-side language
  // This matches the logic in useHomePageInit but runs on server
  let defaultDashboardImage = {
    light: '/company/dashboard/main-en-l.webp',
    dark: '/company/dashboard/main-en-d.webp',
  };

  if (currentLanguage === 'es') {
    defaultDashboardImage = {
      light: '/company/dashboard/main-es-l.webp',
      dark: '/company/dashboard/main-es-d.webp',
    };
  } else if (currentLanguage === 'zh') {
    defaultDashboardImage = {
      light: '/company/dashboard/main-zh-l.webp',
      dark: '/company/dashboard/main-zh-d.webp',
    };
  } else if (currentLanguage === 'fr') {
    defaultDashboardImage = {
      light: '/company/dashboard/main-fr-l.webp',
      dark: '/company/dashboard/main-fr-d.webp',
    };
  }

  const defaultMobileDashboardImage = '/company/dashboard/mobile.webp';

  // Validate the index is in range (0-4), otherwise use null for random
  const validTitleIndex =
    titleIndex !== null && titleIndex >= 0 && titleIndex <= 4
      ? titleIndex
      : null;

  return (
    <>
      <GoogleOneTap />
      <HomePageClient
        initialTitleIndex={validTitleIndex}
        defaultDashboardImage={defaultDashboardImage}
        defaultMobileDashboardImage={defaultMobileDashboardImage}
      />
    </>
  );
}
