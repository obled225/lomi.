/* @proprietary license */

// import { createMDXSource } from 'fumadocs-mdx';
import type {
  InferMetaType,
  InferPageType,
  Source,
} from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { transformerOpenAPI } from 'fumadocs-openapi/server';
import { createElement } from 'react';
import { blog as blogPosts, docs } from '@/.source/server';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  source: docs.toFumadocsSource() as Source,
  pageTree: {
    transformers: [transformerOpenAPI()],
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: {
    files: blogPosts.map((post) => ({
      type: 'page',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      path: (post as any).slug || (post as any).path,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: (post as any).data || post,
    })),
  },
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
