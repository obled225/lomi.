/* @proprietary license */

import type { MetadataRoute } from 'next';
import { readdirSync, statSync } from 'fs';
import { join, extname, relative } from 'path';

export const revalidate = false;


interface RouteConfig {
  priority: number;
  changefreq: 'monthly' | 'weekly';
}

class DocsSitemapGenerator {
  private baseUrl = "https://lomi.africa";
  private contentDir = "content/docs";

  // Files that should NOT be included in sitemap
  private excludedFiles: string[] = [
    'layout.tsx',
    'loading.tsx',
    'error.tsx',
    'not-found.tsx',
    'page.client.tsx',
    'route.ts'
  ];

  private getRouteConfig(url: string): RouteConfig {
    // Homepage gets highest priority
    if (url === `${this.baseUrl}/`) {
      return { priority: 1.0, changefreq: "monthly" };
    }

    // Important homepage routes get high priority
    const homepageRoutes = ['/pricing', '/blog', '/careers', '/faq', '/changelog'];
    const isHomepageRoute = homepageRoutes.some(route => url.includes(route));
    if (isHomepageRoute) {
      return { priority: 0.8, changefreq: "weekly" };
    }

    // Introduction and fundamentals docs
    if (url.includes("/docs/core/introduction/") || url.includes("/docs/core/fundamentals/")) {
      return { priority: 0.9, changefreq: "monthly" };
    }

    // API reference
    if (url.includes("/docs/reference/")) {
      return { priority: 0.8, changefreq: "weekly" };
    }

    // SDKs and CLI
    if (url.includes("/docs/core/sdks/") || url.includes("/docs/core/lomi-cli/")) {
      return { priority: 0.7, changefreq: "monthly" };
    }

    // Default for other docs pages
    return { priority: 0.6, changefreq: "monthly" };
  }

  // Recursively find all MDX files in the content directory
  private findMdxFiles(dir: string, baseDir: string = dir): string[] {
    const files: string[] = [];

    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (item !== 'node_modules' && item !== '.git' && item !== 'dist') {
            files.push(...this.findMdxFiles(fullPath, baseDir));
          }
        } else if (stat.isFile() && extname(item) === '.mdx') {
          // Skip index.mdx files as they don't create separate routes
          if (item === 'index.mdx') {
            continue;
          }

          // Convert file path to URL path
          const relativePath = relative(baseDir, fullPath);
          const urlPath = '/' + relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/');
          files.push(urlPath);
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${dir}:`, error);
    }

    return files;
  }

  // Find all homepage routes by scanning the app directory
  private findHomepageRoutes(dir: string, baseDir: string = dir, currentPath: string = ''): string[] {
    const routes: string[] = [];

    try {
      const items = readdirSync(dir);

      for (const item of items) {
        if (this.excludedFiles.includes(item)) {
          continue;
        }

        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip dynamic route directories (like [slug], [jobslug])
          if (item.startsWith('[') && item.endsWith(']')) {
            continue;
          }

          const newPath = currentPath ? `${currentPath}/${item}` : `/${item}`;

          // If this directory has a page.tsx, it's a route
          try {
            const pagePath = join(fullPath, 'page.tsx');
            if (statSync(pagePath, { throwIfNoEntry: false })?.isFile()) {
              routes.push(newPath);
            }
          } catch {
            // page.tsx doesn't exist, skip
          }

          // Recursively check subdirectories (but skip dynamic ones)
          routes.push(...this.findHomepageRoutes(fullPath, baseDir, newPath));
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read homepage routes:`, error);
    }

    return routes;
  }

  public generateSitemapEntries(): MetadataRoute.Sitemap {
    // Find all MDX files in the content directory
    const contentDirPath = join(process.cwd(), this.contentDir);
    const docPageUrls = this.findMdxFiles(contentDirPath);

    // Convert file paths to URL paths (add /docs prefix)
    const docUrls = docPageUrls.map(path => `/docs${path}`);

    // Find all homepage routes by scanning the app directory
    const appDirPath = join(process.cwd(), 'app/(home)');
    const homepageRoutes = this.findHomepageRoutes(appDirPath);

    // Combine homepage routes with doc pages
    const allRoutes = [...homepageRoutes, ...docUrls];

    const sitemapEntries: MetadataRoute.Sitemap = [
      // Homepage
      {
        url: `${this.baseUrl}/`,
        changeFrequency: 'monthly',
        priority: 1.0,
      },
    ];

    // Add all routes to sitemap
    for (const route of allRoutes) {
      const fullUrl = `${this.baseUrl}${route}`;
      const config = this.getRouteConfig(fullUrl);

      sitemapEntries.push({
        url: fullUrl,
        changeFrequency: config.changefreq,
        priority: config.priority,
      });
    }

    return sitemapEntries;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const generator = new DocsSitemapGenerator();
  return generator.generateSitemapEntries();
}
