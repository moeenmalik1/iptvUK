import PricingCard from '../ui/PricingCard';
import SectionHeading from '../ui/SectionHeading';

const pricing = [
  {
    plan: 'Monthly',
    monthly: '14.99',
    original: '19.99',
    features: ['Choose your UK IPTV subscription plan', 'Instant delivery after checkout', 'HD, Full HD & 4K support', 'No contracts or hidden fees']
  },
  {
    plan: '3 Months',
    monthly: '24.99',
    original: '29.99',
    features: ['Great value for regular users', 'UK, USA & worldwide channels', 'Sports, movies, and VOD access', 'Fast setup assistance']
  },
  {
    plan: 'Annual',
    monthly: '49.99',
    original: '69.99',
    highlighted: true,
    features: ['Best long-term value', 'Stable UK IPTV subscription', 'Priority response support', 'Premium IPTV experience']
  }
];

export default function PricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simple Pricing & Instant Activation"
          subtitle="Buy IPTV Subscription in Minutes"
        />

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-6">
          <ol className="space-y-3 text-sm font-medium text-slate-700 sm:text-base">
            <li>1. Choose your UK IPTV subscription plan</li>
            <li>2. Complete checkout</li>
            <li>3. Receive login details instantly</li>
            <li>4. Start streaming immediately</li>
          </ol>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-700">
          No contracts. No hidden fees. Just premium IPTV.
        </div>
        <div className="mt-5 text-center">
          <button className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
            Buy IPTV Subscription Now
          </button>
        </div>
      </div>
    </section>
  );
}
