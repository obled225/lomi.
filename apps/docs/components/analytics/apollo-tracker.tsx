/* @proprietary license */

import Script from 'next/script';

/**
 * Apollo Website Tracker Component
 *
 * Tracks company visits using Apollo's IP matching algorithm.
 * This reveals the identities of organizations that visit the website
 * and provides visualized analytics.
 *
 * @see https://www.apollo.io
 */
export function ApolloTracker() {
  return (
    <Script
      id="apollo-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function initApollo(){
            var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"692efef05ae97d00152084cc"})},
            document.head.appendChild(o)
          }
          initApollo();
        `,
      }}
    />
  );
}
