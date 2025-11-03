import { promises as fs } from "fs";
import * as path from "path";
import { client } from "@/lib/sanity/client";

interface RouteConfig {
  priority: string;
  changefreq: string;
}

interface RouteConfigMap {
  [key: string]: RouteConfig;
}

class SitemapGenerator {
  private baseUrl: string;
  private srcDir: string;
  private outputDir: string;
  private routeConfig: RouteConfigMap;
  private excludeRoutes: string[];

  constructor() {
    this.baseUrl = "https://viacascade.com";
    this.srcDir = "src/app"; // Directory containing Next.js pages
    this.outputDir = "public";

    // Priority and change frequency mappings
    this.routeConfig = {
      "": {
        // Homepage
        priority: "1.0",
        changefreq: "daily",
      },
      blog: {
        priority: "0.8",
        changefreq: "weekly",
      },
      about: {
        priority: "0.7",
        changefreq: "monthly",
      },
      login: {
        priority: "0.6",
        changefreq: "monthly",
      },
      signup: {
        priority: "0.6",
        changefreq: "monthly",
      },
      "forgot-password": {
        priority: "0.5",
        changefreq: "monthly",
      },
      terms: {
        priority: "0.5",
        changefreq: "monthly",
      },
      privacy: {
        priority: "0.5",
        changefreq: "monthly",
      },
      default: {
        priority: "0.5",
        changefreq: "weekly",
      },
    };

    // Routes to exclude from sitemap
    this.excludeRoutes = [
      "api/",
      "callback",
      "dashboard",
      "verify",
      "accept-invite",
      "welcome",
      "workspace",
    ];
  }

  private cleanRoute(route: string): string {
    // Handle (group) directory structure
    if (route.includes("(")) {
      const parts = route.split("/");
      const cleanedParts: string[] = [];
      for (const part of parts) {
        if (part.includes("(") || part.includes(")")) {
          continue;
        }
        cleanedParts.push(part);
      }
      route = cleanedParts.join("/");
    }

    // Clean up the route
    if (route.endsWith("/page")) {
      route = route.slice(0, -5); // Remove '/page'
    } else if (route.endsWith("page")) {
      route = route.slice(0, -4); // Remove 'page'
    }

    // Handle index files
    if (route.endsWith("/index")) {
      route = route.slice(0, -6); // Remove '/index'
    } else if (route === "index") {
      route = ""; // Homepage
    }

    while (route.includes("//")) {
      route = route.replace("//", "/");
    }

    // Remove leading/trailing slashes
    return route.replace(/^\/+|\/+$/g, "");
  }

  private async getBlogSlugs(): Promise<string[]> {
    try {
      const query = `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;
      const slugs = await client.fetch<{ slug: string }[]>(query);
      return slugs.map((item) => `blog/${item.slug}`);
    } catch (error) {
      console.error("Error fetching blog slugs from Sanity:", error);
      return [];
    }
  }

  private async getRoutePaths(): Promise<string[]> {
    const routes: string[] = [];
    const srcDirPath = path.resolve(this.srcDir);

    const scanDirectory = async (dir: string): Promise<void> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await scanDirectory(fullPath);
        } else if (entry.isFile() && entry.name === "page.tsx") {
          // Remove src directory and file extension
          const relativePath = path.relative(srcDirPath, fullPath);
          let route = relativePath.replace(/\.tsx$/, "");

          // Convert path separators to URL format
          route = route.replace(/\\/g, "/");

          // Skip dynamic routes
          if (route.includes("[") || route.includes("]")) {
            continue;
          }

          // Clean the route
          route = this.cleanRoute(route);

          // Skip excluded routes
          if (
            this.excludeRoutes.some((excluded: string) =>
              route.startsWith(excluded),
            )
          ) {
            continue;
          }

          // Add route if it's not already added
          if (!routes.includes(route)) {
            routes.push(route);
          }
        }
      }
    };

    await scanDirectory(srcDirPath);

    // Get blog slugs from Sanity
    const blogRoutes = await this.getBlogSlugs();
    routes.push(...blogRoutes);

    // Make sure homepage is included
    if (!routes.includes("")) {
      routes.push("");
    }

    return routes.sort();
  }

  private getRouteConfig(route: string): RouteConfig {
    // Empty route is homepage
    if (route === "") {
      return this.routeConfig[""];
    }

    // Try exact match first
    if (route in this.routeConfig) {
      return this.routeConfig[route];
    }

    // Try prefix match
    for (const [key, config] of Object.entries(this.routeConfig)) {
      if (key && route.startsWith(key)) {
        return config;
      }
    }

    return this.routeConfig["default"];
  }

  private formatXml(xml: string): string {
    // Simple XML formatting - add indentation
    let formatted = "";
    let indent = 0;
    const lines = xml.split("\n");

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      if (trimmed.startsWith("</")) {
        indent -= 2;
      }

      formatted += " ".repeat(Math.max(0, indent)) + trimmed + "\n";

      if (
        trimmed.startsWith("<") &&
        !trimmed.startsWith("</") &&
        !trimmed.endsWith("/>") &&
        !trimmed.includes("<url>")
      ) {
        indent += 2;
      }
    }

    return formatted;
  }

  public async generateRobotsTxt(): Promise<void> {
    const content = `User-agent: *
# Disallow API routes
Disallow: /api/

# Disallow authentication and admin routes
Disallow: /callback
Disallow: /workspace
Disallow: /verify
Disallow: /admin
Disallow: /_next/

# Disallow Next.js internal routes
Disallow: /*.json$

# Allow sitemap
Allow: /sitemap.xml

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml`;

    try {
      await fs.mkdir(this.outputDir, { recursive: true });
      const outputPath = path.join(this.outputDir, "robots.txt");
      await fs.writeFile(outputPath, content, "utf-8");
    } catch (error) {
      console.error(`Error generating robots.txt: ${error}`);
      throw error;
    }
  }

  public async generateSitemap(): Promise<void> {
    try {
      // Create urlset XML
      let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xmlContent +=
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

      // Get all routes
      const routes = await this.getRoutePaths();

      // Add each route to sitemap
      for (const route of routes) {
        const fullUrl = new URL(route || "", this.baseUrl).toString();
        const config = this.getRouteConfig(route);
        const lastmod = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

        xmlContent += "  <url>\n";
        xmlContent += `    <loc>${fullUrl}</loc>\n`;
        xmlContent += `    <lastmod>${lastmod}</lastmod>\n`;
        xmlContent += `    <changefreq>${config.changefreq}</changefreq>\n`;
        xmlContent += `    <priority>${config.priority}</priority>\n`;
        xmlContent += "  </url>\n";
      }

      xmlContent += "</urlset>";

      // Create output directory if it doesn't exist
      await fs.mkdir(this.outputDir, { recursive: true });

      // Write the sitemap file
      const outputPath = path.join(this.outputDir, "sitemap.xml");
      await fs.writeFile(outputPath, xmlContent, "utf-8");
    } catch (error) {
      console.error(`Error generating sitemap: ${error}`);
      throw error;
    }
  }

  public async generate(): Promise<void> {
    console.log("Generating sitemap...");
    await this.generateSitemap();
    console.log("Sitemap generated successfully.");

    console.log("Generating robots.txt...");
    await this.generateRobotsTxt();
    console.log("robots.txt generated successfully.");
  }
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

export default SitemapGenerator;
