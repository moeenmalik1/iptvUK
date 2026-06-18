export default function PricingCard({ plan, monthly, original, features, highlighted = false }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-xl border bg-white p-6 shadow-lg ${
        highlighted ? 'border-orange-500 ring-2 ring-orange-300' : 'border-slate-200'
      }`}
    >
      {highlighted ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most Popular
        </span>
      ) : null}
      <p className="text-sm font-semibold text-slate-500">{plan}</p>
      <p className="mt-3 text-4xl font-extrabold text-slate-900">£{monthly}</p>
      <p className="mt-1 text-sm text-slate-500">Was £{original} per month</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-orange-500">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
        Get Started
      </button>
    </article>
  );
}
