/* @proprietary license */

import { cookies } from 'next/headers';
import { HomePageClient } from '@/components/home/home-page-client';
import { GoogleOneTap } from '@/components/home/google-one-tap';

export default async function Page() {
  // Read title index from cookie on server to prevent hydration mismatch
  const cookieStore = await cookies();
  const titleIndexCookie = cookieStore.get('hero-title-index');
  const titleIndex = titleIndexCookie?.value
    ? parseInt(titleIndexCookie.value, 10)
    : null;

  // Validate the index is in range (0-4), otherwise use null for random
  const validTitleIndex =
    titleIndex !== null && titleIndex >= 0 && titleIndex <= 4
      ? titleIndex
      : null;

  return (
    <>
      <GoogleOneTap />
      <HomePageClient initialTitleIndex={validTitleIndex} />
    </>
  );
}
