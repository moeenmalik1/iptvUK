import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import InstallationGuideSection from '../../components/sections/InstallationGuideSection';
import { getInstallationPageSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'IPTV Setup Guide UK | How to Install IPTV on Firestick, Smart TV & Android',
  description:
    'Step-by-step IPTV setup guide for the UK. Install IPTV on Firestick, Android TV, Smart TVs, iPhone, iPad, Windows, Mac and MAG boxes, with player recommendations and buffering fixes.',
  alternates: { canonical: '/installation-guide' },
  openGraph: openGraphFor({
    title: 'IPTV Setup Guide UK | Install IPTV on Any Device',
    description:
      'Step-by-step IPTV installation for Firestick, Android TV, Smart TVs, iPhone, Windows and MAG boxes.',
    url: '/installation-guide'
  })
};

export default function InstallationGuidePage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getInstallationPageSchema()) }}
      />
      <Header />
      <InstallationGuideSection />
      <Footer />
    </main>
  );
}
