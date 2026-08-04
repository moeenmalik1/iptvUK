import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import DevicePage from '../../components/devices/DevicePage';
import { pcDevice as device } from '../../data/devices/pc';
import { getDevicePageSchema } from '../../lib/schema';

export const metadata = {
  title: device.metaTitle,
  description: device.metaDescription,
  alternates: {
    canonical: `/${device.slug}`
  },
  openGraph: {
    type: 'website',
    title: device.metaTitle,
    description: device.metaDescription,
    url: `/${device.slug}`,
    images: [device.image]
  }
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getDevicePageSchema(device)) }}
      />
      <Header />
      <DevicePage device={device} />
      <Footer />
    </main>
  );
}
