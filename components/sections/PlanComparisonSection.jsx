import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { plans } from '../../data/plans';

export default function PlanComparisonSection() {
  return (
    <section id="compare-plans" className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Compare IPTV Plans" subtitle="See how our plans stack up so you can pick the right one." />

        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="w-56 px-5 py-4 font-bold text-slate-900">Plan</th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-5 py-4 font-bold ${plan.featured ? 'bg-orange-50 text-orange-700' : 'text-slate-900'}`}
                  >
                    {plan.name}
                    {plan.featured ? (
                      <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Popular
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200">
                <th className="px-5 py-4 font-semibold text-slate-700">Price</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`px-5 py-4 font-black text-slate-900 ${plan.featured ? 'bg-orange-50/60' : ''}`}>
                    GBP {plan.price}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-slate-200">
                <th className="px-5 py-4 font-semibold text-slate-700">Billing period</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`px-5 py-4 text-slate-600 ${plan.featured ? 'bg-orange-50/60' : ''}`}>
                    Every {plan.per}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-slate-200">
                <th className="px-5 py-4 font-semibold text-slate-700">Best for</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`px-5 py-4 text-slate-600 ${plan.featured ? 'bg-orange-50/60' : ''}`}>
                    {plan.note}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-slate-200 align-top">
                <th className="px-5 py-4 font-semibold text-slate-700">Included features</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`px-5 py-4 ${plan.featured ? 'bg-orange-50/60' : ''}`}>
                    <ul className="space-y-2 text-slate-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
