import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from '@/lib/og/mono';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
  });
}

export function generateStaticParams(): {
  slug: string[];
}[] {
  const params = source.generateParams();
  const paramsArray = Array.isArray(params) ? params : [];
  return paramsArray.map((page) => ({
    ...page,
    slug: [...page.slug, 'image.png'],
  }));
}
