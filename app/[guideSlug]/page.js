import { notFound } from 'next/navigation';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import GuideLayout from '../../components/guides/GuideLayout';
import { getGuide, getRelatedGuides, guideHref, guides } from '../../data/guides';
import { getGuideSchema } from '../../lib/schema';
import { OG_IMAGE, openGraphFor } from '../../lib/seo';

// Only the known guide slugs resolve through this root-level segment; anything
// else falls through to the 404 page instead of being caught here.
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ guideSlug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.guideSlug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: guideHref(guide.slug)
    },
    openGraph: openGraphFor({
      type: 'article',
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: guideHref(guide.slug),
      images: [OG_IMAGE],
      modifiedTime: guide.updatedIso
    })
  };
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.guideSlug);

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
