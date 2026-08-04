import { guideHref, guides } from '../data/guides';

const SITE_URL = 'https://www.iptvuk.buzz';

const staticRoutes = [
  { path: '', priority: 1 },
  { path: '/pricing', priority: 0.9 },
  { path: '/iptv-firestick-subscription-uk', priority: 0.9 },
  { path: '/iptv-uk-free-trial', priority: 0.9 },
  { path: '/channels', priority: 0.8 },
  { path: '/installation-guide', priority: 0.8 },
  { path: '/guides', priority: 0.8 },
  { path: '/status', priority: 0.5 },
  { path: '/terms', priority: 0.3 },
  { path: '/privacy', priority: 0.3 },
  { path: '/refund', priority: 0.3 },
  { path: '/cookies', priority: 0.3 }
];

export default function sitemap() {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: route.priority
    })),
    ...guides.map((guide) => ({
      url: `${SITE_URL}${guideHref(guide.slug)}`,
      lastModified: new Date(guide.updatedIso),
      changeFrequency: 'monthly',
      priority: 0.7
    }))
  ];
}
