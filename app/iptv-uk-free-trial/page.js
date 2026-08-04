import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import FreeTrialSection from '../../components/sections/FreeTrialSection';
import { getFreeTrialPageSchema } from '../../lib/schema';

export const metadata = {
  title: 'IPTV UK Free Trial | 24 Hours Free, No Card Required',
  description:
    'Get a free 24-hour IPTV UK trial with no credit card and no auto-renewal. Full live channels, sport, films and programme guide on Firestick, Smart TV, Android, iPhone and more.',
  alternates: {
    canonical: '/iptv-uk-free-trial'
  },
  openGraph: {
    type: 'website',
    title: 'IPTV UK Free Trial | 24 Hours Free, No Card Required',
    description:
      'Try IPTV UK free for 24 hours before you pay anything. No card details, no checkout, nothing that renews.',
    url: '/iptv-uk-free-trial'
  }
};

export default function FreeTrialPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFreeTrialPageSchema()) }}
      />
      <Header />
      <FreeTrialSection />
      <Footer />
    </main>
  );
}
