import { getPostBySlug } from '@/lib/sanity/queries';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Basic list of crawler user agents
const CRAWLER_USER_AGENTS = [
  'Twitterbot',
  'facebookexternalhit',
  'LinkedInBot',
  'Pinterest',
  'Discordbot',
];

// Helper to check if the user agent is a crawler
function isCrawler(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return CRAWLER_USER_AGENTS.some((crawler) => userAgent.includes(crawler));
}

// Basic HTML escaping function
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop(); // Extract slug from URL path
  const userAgent = req.headers.get('user-agent');
  const host = req.headers.get('host');
  const protocol = req.headers.get('x-forwarded-proto') || 'http'; // Use 'http' as default, Vercel usually sets x-forwarded-proto

  if (!host) {
    console.error('[API Route /blog/[slug]] Missing host header');
    return new NextResponse('Internal Server Error: Missing host header', {
      status: 500,
    });
  }

  const baseIndexUrl = `${protocol}://${host}/`; // URL to fetch the main index.html

  try {
    // Fetch the base index.html content
    const indexResponse = await fetch(baseIndexUrl);
    if (!indexResponse.ok) {
      console.error(
        `[API Route /blog/[slug]] Failed to fetch index.html from ${baseIndexUrl}. Status: ${indexResponse.status}`,
      );
      // Attempt to send a generic error or fallback HTML? For now, error out.
      return new NextResponse(
        `Error fetching base HTML: ${indexResponse.statusText}`,
        { status: 500 },
      );
    }
    const indexHtml = await indexResponse.text();

    // --- Logic only for Crawlers ---
    if (slug && isCrawler(userAgent)) {
      try {
        const post = await getPostBySlug(slug);

        if (post) {
          // --- Generate Dynamic Meta Tags ---
          const title = post.title; // TODO: Add localization if needed
          const description = post.excerpt || 'Read this article on Cascade.'; // TODO: Localization
          // Use the new OG image generator API endpoint
          const ogImageUrl = `${protocol}://${host}/api/blog/og-image/${slug}`;
          const imageUrl = ogImageUrl;

          const ogTags = `
                        <meta property="og:title" content="${escapeHtml(title)}" />
                        <meta property="og:description" content="${escapeHtml(description)}" />
                        <meta property="og:image" content="${escapeHtml(imageUrl)}" />
                        <meta property="og:url" content="${protocol}://${host}${req.url}" />
                        <meta property="og:type" content="article" />
                        ${post.publishedAt ? `<meta property="article:published_time" content="${post.publishedAt}" />` : ''}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="${escapeHtml(title)}" />
                        <meta name="twitter:description" content="${escapeHtml(description)}" />
                        <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
                    `;
          // --- End Generate Dynamic Meta Tags ---

          const modifiedHtml = indexHtml.replace(
            '<!-- OG_TAGS_PLACEHOLDER -->',
            ogTags,
          );

          // Send the modified HTML back to the crawler
          return new NextResponse(modifiedHtml, {
            status: 200,
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
            },
          });
        } else {
          // Fall through to serve original index.html
        }
      } catch (postError) {
        console.error(
          `[API Route /blog/[slug]] Error fetching post data for slug ${slug}:`,
          postError,
        );
        // Fall through to serve original index.html on error
      }
    }
    // --- End Crawler Logic ---

    // For non-crawlers, or if post not found for crawler, or on error during post fetch:
    // Serve the original index.html. Client-side routing will take over.
    return new NextResponse(indexHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    console.error('[API Route /blog/[slug]] General error:', error);
    // Attempt to send the original index.html as a last resort? Or a generic error.
    // Let's try sending a generic error message for now.
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
