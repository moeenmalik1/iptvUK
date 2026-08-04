import Link from 'next/link';
import { getGuide } from '../../data/guides';

// Compact cross-link strip for non-guide pages (setup guide, pricing, channels).
export default function GuideLinkStrip({ slugs, title = 'Keep reading', description, dark = false }) {
  const items = slugs.map((slug) => getGuide(slug)).filter(Boolean);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className={`rounded-[1.75rem] border p-6 sm:p-8 ${
        dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.35)]'
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Guides</p>
      <h2 className={`mt-3 text-2xl font-black sm:text-3xl ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {description ? (
        <p className={`mt-3 text-sm leading-6 sm:text-base ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className={`group rounded-2xl border p-4 transition ${
              dark
                ? 'border-white/10 bg-slate-950/40 hover:border-orange-400/40'
                : 'border-slate-200 bg-slate-50 hover:border-orange-300'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-500">{guide.category}</span>
            <p className={`mt-2 text-sm font-bold leading-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              {guide.title}
            </p>
            <p className={`mt-2 text-xs leading-5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{guide.excerpt}</p>
            <span className="mt-3 inline-block text-xs font-semibold text-orange-600 transition group-hover:text-orange-700">
              Read guide →
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/guides"
        className={`mt-6 inline-flex rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
          dark ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        View all guides
      </Link>
    </div>
  );
}
