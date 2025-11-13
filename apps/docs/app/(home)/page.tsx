/* @proprietary license */

import { HomePageClient } from '@/components/home/home-page-client';
import { GoogleOneTap } from '@/components/home/google-one-tap';

export default function Page() {
  return (
    <>
      <GoogleOneTap />
      <HomePageClient />
    </>
  );
}
