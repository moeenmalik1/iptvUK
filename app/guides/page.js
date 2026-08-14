import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import GuideCard from '../../components/guides/GuideCard';
import RelatedLinks from '../../components/layout/RelatedLinks';
import { guides } from '../../data/guides';
import { getGuidesIndexSchema } from '../../lib/schema';
import { openGraphFor } from '../../lib/seo';

export const metadata = {
  title: 'IPTV Guides UK | Boxes, Setup, Sport & Pay TV Costs Compared',
  description:
    'Practical IPTV guides for UK viewers: the best Android TV boxes, iPhone setup, watching Sky Sports without Sky, cancelling Sky TV, and IPTV compared with Netflix.',
  alternates: {
    canonical: '/guides'
  },
  openGraph: openGraphFor({
    title: 'IPTV Guides UK | Boxes, Setup, Sport & Pay TV Costs Compared',
    description:
      'Practical IPTV guides for UK viewers: Android TV boxes, device setup, watching Sky Sports without Sky, cancelling Sky TV and IPTV compared with Netflix.',
    url: '/guides'
  })
};

const categories = [...new Set(guides.map((guide) => guide.category))];

export default function GuidesPage() {
  const [featured, ...rest] = guides;

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getGuidesIndexSchema()) }}
      />
      <Header />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.28),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.22),_transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-300">IPTV UK Guides</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            IPTV Guides UK: straight answers before you buy a box, a plan, or another subscription.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Hardware comparisons, setup walkthroughs and honest cost breakdowns written for UK viewers. Every guide
            lists what it checked, when it was checked, and the drawback nobody puts on the product page.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              View Plans
            </Link>
            <Link
              href="/installation-guide"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Setup Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Latest guide</p>
        <div className="mt-5">
          <GuideCard guide={featured} featured />
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">All Guides</h2>
          <p className="text-sm text-slate-500">{guides.length} guides, updated for 2026</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <RelatedLinks heading="More from IPTV UK" />
      <Footer />
    </main>
  );
}
