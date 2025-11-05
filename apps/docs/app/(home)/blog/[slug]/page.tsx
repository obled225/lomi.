import type { Metadata } from 'next';
import BlogPostClient from '@/components/blog/blog-post-client';
import { client } from '@/lib/sanity/client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  const slugsArray = Array.isArray(slugs) ? slugs : [];
  return slugsArray.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        "imageUrl": mainImage.asset->url
      }`,
      { slug },
    );

    if (post) {
      return {
        title: `${post.title} | lomi.`,
        description: post.excerpt || 'Read our latest blog post',
        openGraph: {
          title: `${post.title} | lomi.`,
          description: post.excerpt || 'Read our latest blog post',
          images: post.imageUrl
            ? [
                {
                  url: post.imageUrl,
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ]
            : [
                {
                  url: '/banner.webp',
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ],
        },
      };
    }
  } catch (error) {
    console.error('Error fetching post metadata:', error);
  }

  return {
    title: 'lomi. | Blog post',
  };
}

// Server component that renders the client component
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  return (
    <main className="flex-1 pt-0">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,var(--background)_75%)]"></div>

        <BlogPostClient slug={slug} />
      </div>
    </main>
  );
}
