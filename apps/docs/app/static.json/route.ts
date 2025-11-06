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

      return {
        id: page.url,
        page_id: page.url,
        structured: page.data.structuredData ?? { headings: [], contents: [] },
        tag: page.slugs[0],
        url: page.url,
        title: page.data.title ?? 'Untitled',
        description: page.data.description,
        breadcrumbs,
      };
    });

  return NextResponse.json(results);
}
