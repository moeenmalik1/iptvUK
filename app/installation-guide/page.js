import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import InstallationGuideSection from '../../components/sections/InstallationGuideSection';

export const metadata = {
  title: 'Setting IPTV UK | IPTV Setup Guide for Firestick, Smart TV, Android & iPhone',
  description:
    'Learn how to set up IPTV UK on Firestick, Smart TV, Android, iPhone, Windows, and Mac. Complete IPTV setup guide with apps, troubleshooting, and streaming tips.'
};

export default function InstallationGuidePage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <InstallationGuideSection />
      <Footer />
    </main>
  );
}
