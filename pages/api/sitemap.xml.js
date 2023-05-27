import { createReadStream } from "fs";
import { join } from "path";
import { xml } from "xmlbuilder";
import { SitemapStream, streamToPromise } from "sitemap";

export default async function handler(req, res) {
  // Set the appropriate headers for the XML response
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");

  // Generate the sitemap XML content
  const sitemap = createSitemap();

  // Stream the XML content to the response
  const stream = new SitemapStream({ hostname: "http://localhost:3000/" }); // Replace with your website's hostname
  const xmlString = await streamToPromise(
    stream.pipe(createReadStream(sitemap))
  );

  res.status(200).send(xmlString);
}

function createSitemap() {
  const root = xml.create("urlset", { encoding: "UTF-8" });
  root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  // Add your website's pages dynamically to the sitemap
  addUrlToSitemap(root, "/");
  addUrlToSitemap(root, "/resume");
  addUrlToSitemap(root, "/mernify");
  addUrlToSitemap(root, "/Rentisite");
  addUrlToSitemap(root, "/storyTech");
  addUrlToSitemap(root, "/lpFashion");

  return root.end({ pretty: true });
}

function addUrlToSitemap(root, url) {
  root.ele("url").ele("loc").txt(`http://localhost:3000${url}`); // Replace with your website's hostname
}
