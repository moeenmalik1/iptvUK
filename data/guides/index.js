import { bestAndroidTvBox } from './best-android-tv-box';
import { howToCancelSkyTv } from './how-to-cancel-sky-tv';
import { iptvForIphone } from './iptv-for-iphone';
import { iptvVsNetflix } from './iptv-vs-netflix';
import { watchSkySportsWithoutSky } from './watch-sky-sports-without-sky';

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
export function guideHref(slug) {
  return `/${slug}`;
}

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide) {
  return (guide.related ?? [])
    .map((slug) => getGuide(slug))
    .filter(Boolean);
}
