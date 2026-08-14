import StatusClient from './StatusClient';
import { getSimplePageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'IPTV UK Service Status | Live Server Uptime & Streaming Health',
  description:
    'Live IPTV UK service status. Check streaming server uptime, CDN health, EPG guide data and activation API before contacting support about buffering or playback problems.',
  alternates: { canonical: '/status' },
  openGraph: openGraphFor({
    title: 'IPTV UK Service Status',
    description: 'Live streaming server, CDN, EPG and activation API status for IPTV UK.',
    url: '/status'
  })
};

export default function StatusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSimplePageSchema({
              name: 'IPTV UK Service Status',
              path: '/status',
              description: 'Live streaming server, CDN, EPG and activation API status for IPTV UK.'
            })
          )
        }}
      />
      <StatusClient />
    </>
  );
}
