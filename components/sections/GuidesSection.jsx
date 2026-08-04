import Link from 'next/link';
import GuideCard from '../guides/GuideCard';
import { guides } from '../../data/guides';

export default function GuidesSection() {
  return (
    <section id="guides" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Guides</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Read before you buy
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Hardware comparisons, setup walkthroughs and honest cost breakdowns for UK viewers.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            All guides →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guides.slice(0, 3).map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
