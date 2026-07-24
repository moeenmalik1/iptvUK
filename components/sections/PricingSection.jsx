import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import { plans } from '../../data/plans';

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="IPTV Subscription Plans" subtitle="Choose the package that best suits your requirements." />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 ${
                plan.featured
                  ? 'border-orange-400 bg-gradient-to-b from-white to-orange-50 ring-1 ring-orange-300'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 right-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-orange-500/30">
                  Popular
                </span>
              ) : null}
              <p className={`text-xs font-bold uppercase tracking-[0.24em] ${plan.featured ? 'text-orange-600' : 'text-slate-500'}`}>
                {plan.per}
              </p>
              <p className="mt-3 text-lg font-black leading-tight text-slate-900">{plan.name}</p>
              <p className="mt-5 text-4xl font-black tracking-tight text-slate-900">GBP {plan.price}</p>
              <p className="mt-1 text-sm text-slate-500">Billed per {plan.per}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{plan.note}</p>
              {plan.promo ? (
                <p className="mt-4 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700">
                  {plan.promo}
                </p>
              ) : null}
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                {plan.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
