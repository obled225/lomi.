import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  // // Performance optimizations for better navigation
  experimental: {
    optimizeServerReact: true,
    optimizeCss: process.env.NODE_ENV === "production",
  },
  // Configure server external packages for Sanity and build tools
  serverExternalPackages: ["sanity", "prettier"],
  // Optimize prefetching for better navigation
  async headers() {
    // In development, don't set aggressive cache headers
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "X-DNS-Prefetch-Control",
              value: "on",
            },
          ],
        },
      ];
    }

    // Production cache headers
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mdswvokxrnfggrujsfjd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "mdswvokxrnfggrujsfjd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/**",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Output configuration for Vercel
  outputFileTracingIncludes: {
    "/studio/[[...tool]]": ["./node_modules/sanity/**/*"],
  },
};

export default withMDX(config);
