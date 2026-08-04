import { bestAndroidTvBox } from './best-android-tv-box';
import { howToCancelSkyTv } from './how-to-cancel-sky-tv';
import { iptvForIphone } from './iptv-for-iphone';
import { iptvVsNetflix } from './iptv-vs-netflix';
import { watchSkySportsWithoutSky } from './watch-sky-sports-without-sky';
import { guideHref, guideNav } from './nav';

// Ordered as they appear on /guides. Add a new guide module here and it picks up
// its own route, sitemap entry, structured data and related-guide links.
export const guides = [
  bestAndroidTvBox,
  iptvForIphone,
  howToCancelSkyTv,
  iptvVsNetflix,
  watchSkySportsWithoutSky
];

// Guides live at the site root (/best-android-tv-box-iptv-uk), matching the
// flat URLs used by /channels, /pricing and /installation-guide.
export { guideHref, guideNav };

// The header menu reads its labels from nav.js. Fail the build rather than ship
// a menu entry pointing at a guide that does not exist, or a guide missing from
// the menu.
const slugs = new Set(guides.map((guide) => guide.slug));
const navSlugs = new Set(guideNav.map((item) => item.slug));

guideNav.forEach((item) => {
  if (!slugs.has(item.slug)) {
    throw new Error(`guideNav lists "${item.slug}", which is not a guide in data/guides/index.js`);
  }
});

guides.forEach((guide) => {
  if (!navSlugs.has(guide.slug)) {
    throw new Error(`Guide "${guide.slug}" is missing a menu entry in data/guides/nav.js`);
  }
});

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide) {
  return (guide.related ?? [])
    .map((slug) => getGuide(slug))
    .filter(Boolean);
}
