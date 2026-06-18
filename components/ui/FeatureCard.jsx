export default function FeatureCard({ icon, title, description, dark = false }) {
  return (
    <article
      className={`rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        dark
          ? 'border-slate-700 bg-slate-800/80 shadow-black/20'
          : 'border-slate-200 bg-white shadow-slate-200/80'
      }`}
    >
      <div
        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
          dark ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-500'
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-base font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
        {description}
      </p>
    </article>
  );
}
