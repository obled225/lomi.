import { source } from '@/lib/utils/source';
import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';

export const revalidate = false;

// Extended type for Orama Cloud that includes breadcrumbs and page_id
// We override the structured field to use flat arrays instead of StructuredData objects
type ExtendedOramaDocument = Omit<OramaDocument, 'structured'> & {
  breadcrumbs: string[];
  page_id: string;
  structured: {
    headings: string[];
    contents: string[];
  };
};

export async function GET(): Promise<Response> {
  const results: ExtendedOramaDocument[] = [];
  const pages = source.getPages();
  for (const page of pages) {
    if (page.data._openapi) continue;

    const items = getBreadcrumbItems(page.url, source.pageTree, {
      includePage: false,
      includeRoot: true,
    });

    const structuredData = page.data.structuredData;
    const structured = structuredData
      ? (() => {
          // Filter and map contents, keeping headings and contents aligned
          const filtered = structuredData.contents
            .map((c) => ({
              heading: (c.heading ?? '').trim(),
              content: c.content.trim(),
            }))
            .filter((c) => c.content.length > 0);

          return {
            // Extract heading IDs (or empty string if no heading)
            headings: filtered.map((c) => c.heading),
            // Extract content strings
            contents: filtered.map((c) => c.content),
          };
        })()
      : { headings: [], contents: [] };

    results.push({
      id: page.url,
      page_id: page.url,
      structured,
      tag: page.slugs[0],
      url: page.url,
      title: page.data.title ?? 'Untitled',
      description: page.data.description,
      breadcrumbs: items
        .slice(1) // Skip root
        .map((item) => (typeof item.name === 'string' ? item.name : ''))
        .filter((name) => name.length > 0),
    });
  }

  return Response.json(results);
}