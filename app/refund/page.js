import RefundClient from './RefundClient';
import { getSimplePageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'Refund Policy | IPTV UK Subscription Refunds',
  description:
    'The IPTV UK refund policy, including the refund window, what qualifies, and how to request a refund on your IPTV subscription.',
  alternates: { canonical: '/refund' },
  openGraph: openGraphFor({
    title: 'Refund Policy | IPTV UK Subscription Refunds',
    description:
      'The IPTV UK refund policy, including the refund window, what qualifies, and how to request a refund on your IPTV subscription.',
    url: '/refund'
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
              name: 'Refund Policy',
              path: '/refund',
              description: 'The IPTV UK refund policy, including the refund window, what qualifies, and how to request a refund on your IPTV subscription.'
            })
          )
        }}
      />
      <RefundClient />
    </>
  );
}
