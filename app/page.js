import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ContactSection from '../components/sections/ContactSection';
import DevicesBanner from '../components/sections/DevicesBanner';
import FaqSection from '../components/sections/FaqSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import HeroSection from '../components/sections/HeroSection';
import PerformanceSection from '../components/sections/PerformanceSection';
import TrustAndTestimonialsSection from '../components/sections/TrustAndTestimonialsSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <DevicesBanner />
      <FeaturesSection />
      <HowItWorksSection />
      <PerformanceSection />
      <FaqSection />
      <TrustAndTestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
