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
    files: blogPosts.map((post) => {
      const entry = post as unknown as Record<string, unknown>;
      return {
        type: 'page' as const,
        path: (entry.slug ?? entry.path ?? '') as string,
        data: (entry.data ?? post) as Record<string, unknown>,
      };
    }),
  },
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
