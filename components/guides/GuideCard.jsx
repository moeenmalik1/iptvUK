import Link from 'next/link';
import { guideHref } from '../../data/guides/nav';

export default function GuideCard({ guide, featured = false }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-45px_rgba(15,23,42,0.55)] ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      <Link href={guideHref(guide.slug)} className={`block shrink-0 bg-slate-950 ${featured ? 'md:w-1/2' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={guide.image}
          alt={guide.imageAlt}
          width={1200}
          height={630}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.16em]">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-orange-600">{guide.category}</span>
          <span className="text-slate-400">{guide.readingTime}</span>
        </div>

        <h3 className={`mt-4 font-black leading-tight text-slate-900 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          <Link href={guideHref(guide.slug)} className="transition hover:text-orange-600">
            {guide.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{guide.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-400">Updated {guide.updatedLabel}</span>
          <Link
            href={guideHref(guide.slug)}
            className="text-sm font-semibold text-orange-600 transition group-hover:text-orange-700"
          >
            Read guide →
          </Link>
        </div>
      </div>
    </article>
  );
}
