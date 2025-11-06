import { NextResponse } from 'next/server';
import { source } from '@/lib/utils/source';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';

export const revalidate = false;

export async function GET(): Promise<Response> {
  const pages = source.getPages();
  const pagesArray = Array.isArray(pages) ? pages : [];
  const results = pagesArray
    .filter((page) => page.slugs[0] !== 'openapi')
    .map((page) => {
      const breadcrumbs = getBreadcrumbItems(page.url, source.pageTree).map(
        (item) => item.name,
      );

      // Transform structured data from fumadocs format to flat arrays for Orama
      const structuredData = page.data.structuredData;
      const structured = structuredData?.contents
        ? {
            headings: structuredData.contents.map((item) => item.heading ?? ''),
            contents: structuredData.contents.map((item) => item.content ?? ''),
          }
        : { headings: [], contents: [] };

      return {
        id: page.url,
        page_id: page.url,
        structured,
        tag: page.slugs[0],
        url: page.url,
        title: page.data.title ?? 'Untitled',
        description: page.data.description,
        breadcrumbs,
      };
    });

  return NextResponse.json(results);
}
