import TermsClient from './TermsClient';
import { getSimplePageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'Terms & Conditions | IPTV UK Subscription Terms',
  description:
    'The terms and conditions covering your IPTV UK subscription, including account use, device limits, payment and acceptable use.',
  alternates: { canonical: '/terms' },
  openGraph: openGraphFor({
    title: 'Terms & Conditions | IPTV UK Subscription Terms',
    description:
      'The terms and conditions covering your IPTV UK subscription, including account use, device limits, payment and acceptable use.',
    url: '/terms'
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
              name: 'Terms & Conditions',
              path: '/terms',
              description: 'The terms and conditions covering your IPTV UK subscription, including account use, device limits, payment and acceptable use.'
            })
          )
        }}
      />
      <TermsClient />
    </>
  );
}
