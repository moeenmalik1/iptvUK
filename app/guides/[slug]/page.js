import { notFound } from 'next/navigation';
import Footer from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import GuideLayout from '../../../components/guides/GuideLayout';
import { getGuide, getRelatedGuides, guides } from '../../../data/guides';
import { getGuideSchema } from '../../../lib/schema';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`
    },
    openGraph: {
      type: 'article',
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `/guides/${guide.slug}`,
      images: [guide.image],
      modifiedTime: guide.updatedIso
    }
  };
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getGuideSchema(guide)) }}
      />
      <Header />
      <GuideLayout guide={guide} related={getRelatedGuides(guide)} />
      <Footer />
    </main>
  );
}
