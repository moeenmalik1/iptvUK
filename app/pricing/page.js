import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

const plans = [
  {
    name: 'Monthly',
    price: '14.99',
    per: 'month',
    note: 'Perfect for trying out our service',
    features: [
      '10,000+ Live TV Channels',
      'Full HD & 4K Quality',
      '7-Day Catch Up',
      'Premium VOD Library (50,000+)',
      'Works on Firestick & Smart TVs',
      '24/7 Support via WhatsApp'
    ]
  },
  {
    name: '3 Months',
    price: '24.99',
    per: '3 months',
    note: 'Great value for short term',
    features: [
      '20,000+ Live TV Channels',
      'Full HD & 4K Quality',
      '7-Day Catch Up',
      'Premium VOD Library (Unlocked)',
      'Login on 2 devices',
      'Save over 20% monthly'
    ]
  },
  {
    name: 'Annual',
    price: '49.99',
    per: 'year',
    note: 'Best value for loyal customers',
    featured: true,
    promo: '12 Months + 2 Months FREE',
    features: [
      '26,500+ Live TV Channels',
      'Full HD & 4K Quality',
      '7-Day Catch Up + Recording',
      'Premium VOD Library (Movies + Series)',
      'Login on 3 devices',
      'VIP 24/7 Support',
      'Save over 40% monthly'
    ]
  },
  {
    name: 'Quarterly',
    price: '34.99',
    per: 'quarter',
    note: 'Popular choice for commitment',
    features: [
      '10,000+ Live TV Channels',
      'Full HD & 4K Quality',
      '7-Day Catch Up & Recording',
      'Premium VOD Library (Updated Daily)',
      'Login on 2 devices',
      'Family-safe support'
    ]
  }
];

const reasons = [
  {
    title: 'NO IPTV FREEZING, NO IPTV BUFFERING',
    body: 'Tired of interruptions? Our anti-freeze streaming and robust UK/EU servers keep your channels stable even at peak times.'
  },
  {
    title: 'Best IPTV UK Subscription',
    body: 'Enjoy UK, US and international channels with movies, sports and kids content. Built for smooth daily use.'
  },
  {
    title: 'Why Choose Premium IPTV Services UK?',
    body: 'We combine quality streaming, fast setup and reliable support, backed by a transparent 30-day guarantee.'
  },
  {
    title: 'Best IPTV UK Subscription Provider for Firestick 2024 & More',
    body: 'Firestick, Android, Smart TV and MAG support included. Setup takes minutes and you can start instantly.'
  },
  {
    title: 'Top Quality Support',
    body: 'Need help with setup? Our team is available 24/7 through WhatsApp and live chat to keep things running.'
  },
  {
    title: 'VPN Usage & Channel Coverage',
    body: 'Watch securely with VPN-friendly streams and broad international channel support for sports, movies and news.'
  }
];

export default function PricingPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-black sm:text-4xl">No-Hidden-Cost Pricing</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Choose the plan that works best for you. All plans include our 30-Day Money-Back Guarantee.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-xl bg-gradient-to-r from-red-500 to-orange-500 p-5 text-center text-white shadow-lg">
          <p className="text-xl font-extrabold">⏰ Limited Time Flash Sale!</p>
          <p className="mt-2 text-sm">Prices will return to normal after this timer ends.</p>
          <p className="mt-2 text-3xl font-black tracking-widest">03 : 59 : 48</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-xl border bg-white p-6 shadow-md ${
                plan.featured ? 'border-orange-500 ring-2 ring-orange-300' : 'border-slate-200'
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  Popular
                </span>
              ) : null}
              <p className="text-lg font-bold text-slate-800">{plan.name}</p>
              <p className="mt-2 text-4xl font-black">£{plan.price}</p>
              <p className="text-sm text-slate-500">per {plan.per}</p>
              <p className="mt-4 text-sm text-slate-500">{plan.note}</p>
              {plan.promo ? (
                <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                  {plan.promo}
                </p>
              ) : null}
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                {plan.features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
                Get Started
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-emerald-200 bg-white p-5 text-center shadow-sm">
          <p className="font-semibold text-emerald-700">Secure Payment Options</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <span>💳 Card Payments</span>
            <span>🅿️ PayPal</span>
            <span>🏦 Bank Transfer</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Hardware Solutions</p>
          <h2 className="mt-2 text-3xl font-black">Fully Loaded 4K Amazon Firestick</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Don&apos;t have a smart TV? Get our all-in-one hardware bundle delivered to your door, pre-configured and
            ready to stream in minutes.
          </p>
          <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-100 p-4">⚡ 4K Ultra HD Streaming + Wi-Fi Optimized</div>
            <div className="rounded-lg bg-slate-100 p-4">🎬 Premium Movies, Sports, and Entertainment Packs</div>
            <div className="rounded-lg bg-slate-100 p-4">🚚 Fast UK Delivery + Setup Guide Included</div>
            <div className="rounded-lg bg-slate-100 p-4">🔒 Secure Payment + Free Delivery Offer</div>
          </div>
          <button className="mt-6 rounded-md bg-slate-900 px-5 py-2 text-sm font-semibold text-white">Order Now - Free Delivery</button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-black">Ready for a Longer Test Drive?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-blue-100">
            Experience the full power of IPTV with our exclusive 24-hour free trial. Access live channels, VOD, and
            premium features with no obligation.
          </p>
          <button className="mt-6 rounded-md bg-white px-5 py-2 text-sm font-semibold text-blue-700">Request 24Hr Trial Now</button>
        </div>
      </section>

      <section className="bg-orange-500 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black">Our 30-Day Money-Back Guarantee</h2>
          <p className="mt-4 text-orange-50">
            We are confident you will love our IPTV. However, if you are not completely satisfied within the first 30
            days, we&apos;ll give you a full refund. No hidden terms. Your satisfaction is our priority.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-slate-200 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black text-white">Experience Unmatched IPTV Performance</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-400">
            Discover why premium IPTV is the preferred choice for viewers across the UK. We are committed to delivering
            a smooth, high-quality streaming experience.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
