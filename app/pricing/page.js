import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

const plans = [
  {
    name: '1 Month IPTV Subscription',
    price: '14.99',
    per: 'month',
    note: 'Perfect for users who want flexibility.',
    features: [
      'Full Channel Access',
      'Sports & Entertainment',
      'Movies & Series',
      'HD & 4K Streaming',
      'Device Compatibility',
      'Customer Support'
    ]
  },
  {
    name: '3 Month IPTV Subscription',
    price: '24.99',
    per: '3 months',
    note: 'A popular option offering excellent value.',
    featured: true,
    features: [
      'Complete Channel Library',
      'Premium Sports Access',
      'Video On Demand',
      'Stable Streaming Servers',
      'Easy Setup'
    ]
  },
  {
    name: '6 Month IPTV Subscription',
    price: '34.99',
    per: '6 months',
    note: 'Ideal for regular viewers seeking long-term savings.',
    features: [
      'Full IPTV Service',
      'Live TV & Sports',
      'Updated Content Library',
      'Electronic Program Guide',
      'Multi-Device Streaming'
    ]
  },
  {
    name: '12 Month IPTV Subscription',
    price: '49.99',
    per: '12 months',
    note: 'Our best-value package.',
    promo: 'Priority Support Included',
    features: [
      'Complete IPTV Access',
      'Thousands of Channels',
      'Sports, Movies & Series',
      'Premium Streaming Quality',
      'Priority Support'
    ]
  }
];

const includedItems = [
  'Thousands of Live TV Channels',
  'UK Entertainment Channels',
  'Premium Sports Coverage',
  'Movies & TV Series',
  'Video On Demand Library',
  'HD, Full HD & 4K Streaming',
  'Electronic Program Guide (EPG)',
  'Multi-Device Support',
  'Fast Channel Loading',
  'Regular Content Updates'
];

const channelCategories = [
  'Entertainment Channels',
  'Sports Networks',
  'News Channels',
  'Kids Channels',
  'Documentary Channels',
  'Lifestyle Channels',
  'Music Channels',
  'International Channels'
];

const sports = [
  'Football',
  'Cricket',
  'Rugby',
  'Boxing',
  'UFC',
  'Formula 1',
  'Tennis',
  'Golf',
  'International Tournaments'
];

const onDemand = [
  'Latest Movie Releases',
  'Popular TV Series',
  'Action Films',
  'Comedy Movies',
  'Drama Collections',
  'Family Entertainment',
  'Documentaries'
];

const devices = [
  'Amazon Firestick',
  'Android TV',
  'Smart TVs',
  'Android Boxes',
  'MAG Devices',
  'iPhone & iPad',
  'Android Smartphones',
  'Windows PCs',
  'Mac Computers'
];

const setupSteps = [
  'Select your IPTV subscription plan.',
  'Complete your order.',
  'Receive your activation details.',
  'Install a compatible IPTV player.',
  'Start watching live TV, sports, movies, and series.'
];

const premiumBenefits = [
  'HD, FHD & 4K Streaming',
  'Electronic Program Guide',
  'Video On Demand',
  'Fast Channel Switching',
  'Stable Streaming Technology',
  'Easy Device Compatibility',
  'Regular Updates',
  'Customer Support'
];

const faqs = [
  {
    question: 'What Is IPTV Subscription UK?',
    answer:
      'An IPTV subscription provides access to television channels and on-demand content delivered over an internet connection instead of traditional broadcasting methods.'
  },
  {
    question: 'Which Devices Are Supported?',
    answer:
      'Our IPTV subscription supports Firestick, Smart TVs, Android TV, MAG devices, smartphones, tablets, Windows PCs, and Mac computers.'
  },
  {
    question: 'Do You Offer HD and 4K Streaming?',
    answer:
      'Yes. Many channels and video-on-demand titles are available in HD, Full HD, and 4K quality depending on availability.'
  },
  {
    question: 'How Quickly Will I Receive My IPTV Subscription?',
    answer: 'Activation details are typically delivered shortly after your order is completed.'
  },
  {
    question: 'Can I Watch Sports with IPTV?',
    answer:
      'Yes. IPTV subscriptions include access to a variety of sports channels covering football, cricket, boxing, UFC, Formula 1, tennis, and more.'
  },
  {
    question: 'Do I Need Technical Knowledge?',
    answer: 'No. IPTV setup is straightforward, and installation guides are available for supported devices.'
  }
];

const stats = [
  { value: '4', label: 'Plan options' },
  { value: '24hr', label: 'Activation target' },
  { value: '4K', label: 'Streaming support' },
  { value: '9+', label: 'Device types' }
];

function InfoGrid({ title, description, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-8">
      <div className="max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Streaming Library</p>
        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-orange-200">
                Pricing built for fast setup
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                IPTV Subscription UK plans with a clearer, cleaner buying experience.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Looking for a reliable IPTV Subscription UK service? IPTV UK provides premium IPTV subscriptions with
                access to thousands of live TV channels, sports networks, movies, TV series, and video-on-demand
                content. Enjoy high-quality streaming on your favourite devices with fast activation and an easy setup
                process.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Whether you want UK television channels, international entertainment, premium sports coverage, or
                family-friendly content, our IPTV subscription plans are designed to meet your viewing needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#plans"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
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

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="rounded-[1.5rem] bg-slate-950/60 p-6 ring-1 ring-white/10">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">Best value today</p>
                <p className="mt-4 text-5xl font-black text-white">£24.99</p>
                <p className="mt-1 text-sm text-slate-300">Featured 3 month subscription</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  A balanced plan for viewers who want strong value, premium sports access, and a smooth setup.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-950/20 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {[
              'Thousands of live channels',
              'Sports, movies, and series',
              'HD, FHD, and 4K quality',
              'Multi-device support'
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm font-semibold text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Subscription options</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">IPTV Subscription Plans</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Choose the package that best suits your requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-orange-500/10 sm:p-7 ${
                  plan.featured
                    ? 'border-orange-400/50 bg-gradient-to-b from-white to-orange-50 text-slate-900 ring-1 ring-orange-300/60 lg:scale-[1.03]'
                    : 'border-white/10 bg-white/95 text-slate-900'
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
                <p className="mt-3 text-xl font-black leading-tight">{plan.name}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-black tracking-tight">GBP {plan.price}</span>
                </div>
                <p className={`mt-1 text-sm ${plan.featured ? 'text-slate-600' : 'text-slate-500'}`}>Billed per {plan.per}</p>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-slate-700' : 'text-slate-600'}`}>{plan.note}</p>
                {plan.promo ? (
                  <p className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700">
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
                <button
                  className={`mt-7 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  Get Started
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-slate-950/20 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">What&apos;s included</p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">Everything you need in one subscription</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                With IPTV UK, you can enjoy uninterrupted entertainment from virtually anywhere with a stable internet
                connection.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {includedItems.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Why choose us</p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">A premium streaming experience</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Our service delivers a complete entertainment experience with a wide range of channels and on-demand
                content.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  'Fast channel loading',
                  'Stable streaming servers',
                  'Priority support on longer plans',
                  'Regular content updates'
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoGrid
              title="Live TV Channels"
              description="Our IPTV subscription includes access to a broad range of live television channels."
              items={channelCategories}
            />
            <InfoGrid
              title="Sports IPTV Coverage"
              description="Sports fans can enjoy extensive coverage of major sporting events throughout the year."
              items={sports}
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoGrid
              title="Movies & TV Shows On Demand"
              description="In addition to live television, IPTV UK provides a growing on-demand library."
              items={onDemand}
            />
            <InfoGrid
              title="Compatible Devices"
              description="Our IPTV subscription works across a wide range of devices."
              items={devices}
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Easy setup</p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Get started in a few simple steps</h2>
              <div className="mt-6 space-y-4">
                {setupSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-6 text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-slate-950/20 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">Premium benefits</p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">Built for everyday streaming</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Every subscription includes premium features designed to improve your viewing experience.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {premiumBenefits.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-slate-950/20 sm:p-8">
            <h2 className="text-center text-3xl font-black">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500 to-slate-900 p-8 text-center shadow-2xl shadow-orange-950/20 sm:p-12">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Why IPTV UK?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-orange-50 sm:text-base">
              IPTV UK is committed to providing a reliable IPTV subscription experience with extensive content options,
              broad device compatibility, and premium streaming quality. Whether you enjoy live television, sports,
              movies, or on-demand entertainment, our service offers a convenient way to access your favourite content.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-orange-50 sm:text-base">
              Choose an IPTV subscription plan today and enjoy premium entertainment designed for viewers across the
              United Kingdom.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#plans"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-50"
              >
                Choose a Plan
              </Link>
              <Link
                href="/installation-guide"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Read the Guide
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
