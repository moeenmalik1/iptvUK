import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import FirestickSection from '../../components/sections/FirestickSection';
import { getFirestickPageSchema } from '../../lib/schema';

export const metadata = {
  title: 'IPTV Firestick Subscription UK | Live TV, Sports & 4K on Amazon Fire TV',
  description:
    'IPTV Firestick subscription UK from £14.99. Live UK channels, premium sport, films and 4K streaming on any Amazon Fire TV Stick. Setup in about 10 minutes, no dish, no contract, free 24-hour trial.',
  alternates: {
    canonical: '/iptv-firestick-subscription-uk'
  },
  openGraph: {
    type: 'website',
    title: 'IPTV Firestick Subscription UK | Live TV, Sports & 4K on Amazon Fire TV',
    description:
      'Turn the Fire TV Stick you already own into a full live television service. UK channels, sport, films and box sets from £14.99, with a free 24-hour trial.',
    url: '/iptv-firestick-subscription-uk',
    images: ['/images/firestick-iptv.svg']
  }
};

export default function FirestickPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFirestickPageSchema()) }}
      />
      <Header />
      <FirestickSection />
      <Footer />
    </main>
  );
}
