import Link from 'next/link';
import { freeTrialFaqs as faqs } from '../../data/faqs';
import { plans } from '../../data/plans';
import { getWhatsAppLink } from '../../lib/whatsapp';

const trialHref = getWhatsAppLink("Hi, I'd like to claim my 24 Hours Free Trial.");

const trialFacts = [
  { value: '24 hrs', label: 'Trial length' },
  { value: '£0', label: 'Cost' },
  { value: 'No card', label: 'Required' },
  { value: 'Minutes', label: 'To activate' }
];

const included = [
  'The same live channels paying customers get',
  'Premium sports coverage',
  'Films and box sets on demand',
  'The full electronic programme guide',
  'HD, Full HD and 4K where available',
  'Support on WhatsApp while you set it up'
];

const steps = [
  {
    title: 'Message us on WhatsApp',
    body: 'Tap the button on this page. It opens WhatsApp with a message already written. Tell us which device you will be watching on so we can send the right setup steps.'
  },
  {
    title: 'Receive your login details',
    body: 'We reply with your trial username, password, and server details, usually within a few minutes during normal hours. No card form, no checkout, no account to create.'
  },
  {
    title: 'Install a player and sign in',
    body: 'Enter your details into a compatible player on your device. Most people are watching within about ten minutes. Message us if you get stuck at any point — that is what the support is there for.'
  }
];

const testChecklist = [
  {
    title: 'Watch during your busy hours',
    body: 'A stream that is flawless at 2pm on a Tuesday tells you very little. Test between 7pm and 10pm, and during a live match if you can. That is when networks are loaded and problems show up.'
  },
  {
    title: 'Open the channels you actually watch',
    body: 'Not the impressive-sounding ones. Go to the handful your household turns on every week. A large channel count is meaningless if your five favourites are unreliable.'
  },
  {
    title: 'Check the programme guide',
    body: 'Does the EPG load, is it accurate, and does it match what is actually playing? A guide that is empty or wrong makes live television frustrating to navigate.'
  },
  {
    title: 'Test channel switching',
    body: 'Flick between several channels in a row. Slow switching is one of the most common day-to-day annoyances and you will only notice it by doing it.'
  },
  {
    title: 'Try a film as well as live TV',
    body: 'On-demand playback behaves differently from live streams. Test both so you know the whole service works, not just half of it.'
  },
  {
    title: 'Ask support a real question',
    body: 'Send us something you genuinely want to know and see how fast and how clearly we answer. Response quality when things go wrong matters more than anything on a feature list.'
  }
];

const honestPoints = [
  {
    title: 'It cannot predict every evening',
    body: 'Twenty-four hours is a good sample, not a guarantee. Broadband congestion, a busy fixture list, and your own home network all vary from day to day.'
  },
  {
    title: 'Your Wi-Fi is part of the test',
    body: 'If the trial buffers, the cause is often the connection between your router and your device rather than the service. Try a wired connection or move the device closer before you write it off.'
  },
  {
    title: 'One device at a time',
    body: 'The trial is a single connection. If your household needs several screens playing at once, ask us about the connection limits on the paid plans before you decide.'
  }
];

export default function FreeTrialSection() {
  const cheapest = [...plans].sort((a, b) => Number(a.price) - Number(b.price))[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.28),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.22),_transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="transition hover:text-orange-300">
              Home
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-300">Free Trial</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
              No card required
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">IPTV UK Free Trial</h1>
            <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
              Try IPTV UK free for 24 hours before you pay anything. No card details, no checkout, and nothing that
              renews — because there is no payment method on file to charge. Message us on WhatsApp and we send your
              login details, usually within a few minutes.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              You get the same live channels, sport, films and programme guide our paying customers use, on the device
              you actually plan to watch on. Test it properly, then decide.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={trialHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Start My Free Trial
              </a>
              <Link
                href="#what-to-test"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                What to Test
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Plans
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              {trialFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xl font-black text-white">{fact.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included + how to get it */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">What you get</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                A real trial, not a demo
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Some free trials hand you a stripped-back preview that tells you nothing about the actual service. Ours
                does not. What you watch during the trial is what you would be paying for.
              </p>
              <ul className="mt-7 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                    <span className="mt-1 font-bold text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">How it works</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Three steps to get watching
              </h2>
              <ol className="mt-7 space-y-4">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 sm:text-base">{step.title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Setting up on a specific device? We have step-by-step guides for{' '}
                <Link
                  href="/iptv-firestick-subscription-uk"
                  className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                >
                  Firestick
                </Link>
                ,{' '}
                <Link
                  href="/iptv-for-iphone-uk"
                  className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                >
                  iPhone
                </Link>
                , and{' '}
                <Link
                  href="/installation-guide"
                  className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                >
                  every other supported device
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to test */}
      <section id="what-to-test" className="scroll-mt-24 bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">Make it count</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How to test an IPTV free trial properly
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Most people open a few channels for ten minutes and call it a test. That is how you end up disappointed a
            month later. Here is what actually tells you whether a service is worth paying for.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testChecklist.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Honest limits */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Worth knowing</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            What a 24-hour trial can and cannot tell you
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            We would rather you knew the limits up front than found them out after paying.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {honestPoints.map((point) => (
              <article key={point.title} className="rounded-[1.5rem] border border-amber-200 bg-amber-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trial vs plans */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">After the trial</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Free trial vs a paid plan
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            If the trial goes well, plans start at £{cheapest.price} for {cheapest.per}. Nothing carries over
            automatically — we issue fresh login details when you choose one.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-50px_rgba(15,23,42,0.6)]">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">&nbsp;</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Free trial</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Paid plan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free', `From £${cheapest.price}`],
                  ['Length', '24 hours', '1, 3, 6 or 12 months'],
                  ['Card details', 'Not required', 'Required to pay'],
                  ['Channels and VOD', 'Full access', 'Full access'],
                  ['Programme guide', 'Included', 'Included'],
                  ['Support', 'WhatsApp', 'WhatsApp, priority on longer plans'],
                  ['Auto-renewal', 'None', 'None — you choose to renew']
                ].map(([label, trial, paid], index) => (
                  <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="border-t border-slate-200 px-4 py-3 font-semibold text-slate-900">{label}</td>
                    <td className="border-t border-slate-200 px-4 py-3 text-slate-600">{trial}</td>
                    <td className="border-t border-slate-200 px-4 py-3 text-slate-600">{paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Compare all plans
            </Link>
            <Link
              href="/refund"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Read the refund policy
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            IPTV free trial: frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-lg text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 p-8 text-white shadow-[0_35px_100px_-50px_rgba(6,78,59,0.9)] sm:p-12">
          <h2 className="max-w-3xl text-3xl font-black sm:text-4xl">Start your free 24-hour trial</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-50 sm:text-base">
            One WhatsApp message is all it takes. No card, no checkout, nothing to cancel. Set it up on the device you
            actually watch on, test it during a busy evening, and only pay for a plan if it earns it.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-100/80">
            Keep your login details private, and only use services authorised to provide the content you watch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={trialHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Start My Free Trial
            </a>
            <Link
              href="/channels"
              className="rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              See What You Can Watch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
