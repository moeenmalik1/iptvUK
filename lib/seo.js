// Shared metadata helpers.
//
// Next.js shallow-merges the `metadata` export: a page that declares its own
// `openGraph` replaces the root layout's object outright rather than extending
// it, so siteName, locale and images have to be repeated on every page that
// sets any Open Graph field. `openGraphFor` keeps that repetition in one place.

// The canonical origin, and the single source of truth for it. Canonicals,
// Open Graph urls, sitemap entries, robots.txt and every absolute URL in the
// structured data are all built from this, so the site cannot end up half
// pointing at one host and half at another.
//
// Apex, not www: the host that does NOT redirect must be the one named here.
// Vercel's domain settings decide which way the 308 goes, so if the primary
// domain is ever switched in the dashboard, this constant has to move with it.
export const SITE_URL = 'https://iptvuk.buzz';

// Social previews need a raster image. Facebook, X, WhatsApp and LinkedIn all
// ignore SVG for og:image, so pages whose on-page artwork is a vector still
// point their preview at a PNG.
export const OG_IMAGE = '/images/hero-image.png';

export const SITE_NAME = 'IPTV UK';

export function openGraphFor({ title, description, url, images = [OG_IMAGE], type = 'website', ...rest }) {
  return {
    type,
    siteName: SITE_NAME,
    locale: 'en_GB',
    title,
    description,
    url,
    images,
    ...rest
  };
}
