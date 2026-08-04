const SITE_URL = 'https://www.iptvuk.buzz';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Nothing here is private; these just keep crawl budget on real pages.
        disallow: ['/api/', '/_next/static/chunks/']
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
