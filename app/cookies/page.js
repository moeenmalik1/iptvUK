import CookiesClient from './CookiesClient';
import { getSimplePageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'Cookie Policy | IPTV UK',
  description:
    'How IPTV UK uses cookies and similar technologies on this website, and how you can control them in your browser.',
  alternates: { canonical: '/cookies' },
  openGraph: openGraphFor({
    title: 'Cookie Policy | IPTV UK',
    description:
      'How IPTV UK uses cookies and similar technologies on this website, and how you can control them in your browser.',
    url: '/cookies'
  }),
  robots: { index: true, follow: true }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSimplePageSchema({
              name: 'Cookie Policy',
              path: '/cookies',
              description: 'How IPTV UK uses cookies and similar technologies on this website, and how you can control them in your browser.'
            })
          )
        }}
      />
      <CookiesClient />
    </>
  );
}
