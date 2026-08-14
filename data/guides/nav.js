// Nav-only metadata, kept separate from the article modules on purpose.
// Header.jsx is a client component, so importing data/guides there would ship
// every article's full body text into the client bundle. This module holds just
// the slugs and the short menu labels. data/guides/index.js asserts that every
// slug here matches a real guide, so the two cannot drift apart.

export function guideHref(slug) {
  return `/${slug}`;
}

// `label` is the short form used in the header dropdown; `title` is the full
// article title used where there is room for it, such as the footer column.
export const guideNav = [
  { slug: 'best-iptv-uk', label: 'Best IPTV UK', title: 'How to Choose the Best IPTV Service in the UK' },
  { slug: 'iptv-sky-sports-uk', label: 'Sky Sports on IPTV', title: 'Sky Sports and TNT Sports on IPTV' },
  { slug: 'best-android-tv-box-iptv-uk', label: 'Best Android TV Box', title: 'Best Android TV Box for IPTV UK' },
  { slug: 'iptv-for-iphone-uk', label: 'IPTV for iPhone', title: 'IPTV for iPhone UK' },
  { slug: 'how-to-cancel-sky-tv-uk', label: 'How to Cancel Sky TV', title: 'How to Cancel Sky TV UK' },
  { slug: 'iptv-vs-netflix-uk', label: 'IPTV vs Netflix', title: 'IPTV vs Netflix UK' },
  {
    slug: 'how-to-watch-sky-sports-without-sky-tv',
    label: 'Sky Sports Without Sky',
    title: 'How to Watch Sky Sports Without Sky TV'
  },
  { slug: 'iptv-buffering-fix-uk', label: 'Fix Buffering', title: 'IPTV Buffering, Freezing and Lag: How to Fix It' }
];
