import ChannelsClient from './ChannelsClient';
import { getChannelsPageSchema } from '../../lib/schema';

const schemaCategories = [
  'UK entertainment channels',
  'Sky Sports and TNT Sports',
  'Sky Cinema and movie channels',
  'Documentary channels',
  'Kids and family channels',
  'News channels',
  'International channels',
  'Movies and series on demand'
];

export const metadata = {
  title: 'IPTV UK Channel List | Live Sports, Movies & Entertainment Channels',
  description:
    'Browse the full IPTV UK channel list. Sky Sports, TNT Sports, Sky Cinema, UK entertainment, news, kids and international channels in HD, Full HD and 4K, plus movies and series on demand.',
  alternates: { canonical: '/channels' },
  openGraph: {
    type: 'website',
    title: 'IPTV UK Channel List | Live Sports, Movies & Entertainment Channels',
    description:
      'Every live TV, sports, movie and entertainment channel included with an IPTV UK subscription.',
    url: '/channels'
  }
};

export default function ChannelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getChannelsPageSchema(schemaCategories)) }}
      />
      <ChannelsClient />
    </>
  );
}
