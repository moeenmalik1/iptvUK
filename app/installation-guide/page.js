import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import InstallationGuideSection from '../../components/sections/InstallationGuideSection';

export default function InstallationGuidePage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <InstallationGuideSection />
      <Footer />
    </main>
  );
}
