import PrivacyClient from './PrivacyClient';
import { getSimplePageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'Privacy Policy | How IPTV UK Handles Your Data',
  description:
    'How IPTV UK collects, uses and protects your personal data, including what we store when you order a subscription or contact support.',
  alternates: { canonical: '/privacy' },
  openGraph: openGraphFor({
    title: 'Privacy Policy | How IPTV UK Handles Your Data',
    description:
      'How IPTV UK collects, uses and protects your personal data, including what we store when you order a subscription or contact support.',
    url: '/privacy'
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
              name: 'Privacy Policy',
              path: '/privacy',
              description: 'How IPTV UK collects, uses and protects your personal data, including what we store when you order a subscription or contact support.'
            })
          )
        }}
      />
      <PrivacyClient />
    </>
  );
}
