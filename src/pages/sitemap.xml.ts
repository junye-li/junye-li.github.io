import { site } from "../../site.config.mjs";

const pages = ["/", "/data-code/", "/finai/"];

export function GET() {
  const lastmod = "2026-06-08";
  const urls = pages
    .map((path) => {
      const loc = new URL(path, site.url).toString();
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        path === "/" ? "    <priority>1.0</priority>" : "    <priority>0.6</priority>",
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      "</urlset>"
    ].join("\n"),
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
