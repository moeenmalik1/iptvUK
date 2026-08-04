import Link from 'next/link';
import { firestickFaqs as faqs } from '../../data/faqs';
import { plans } from '../../data/plans';
import { getWhatsAppLink } from '../../lib/whatsapp';

const trialHref = getWhatsAppLink(
  "Hi, I'd like to claim my 24 Hours Free Trial for my Firestick."
);
const setupHref = getWhatsAppLink('Hi, I need help setting up IPTV on my Firestick.');

const heroStats = [
  { value: '10 min', label: 'Typical setup' },
  { value: '4K', label: 'On 4K models' },
  { value: 'From £14.99', label: 'Firestick plans' },
  { value: '24hr', label: 'Free trial' }
];

const whyFirestick = [
  {
    title: 'It plugs into a TV you already own',
    body: 'Any television with a spare HDMI port becomes a streaming TV. There is no dish, no aerial, no engineer visit, and no box sitting in the cabinet.'
  },
  {
    title: 'The remote is built for live TV',
    body: 'Directional pad, back button, and dedicated volume keys map naturally onto a channel list and a programme guide, which is exactly how IPTV players are designed to be used.'
  },
  {
    title: 'It travels with you',
    body: 'A Firestick fits in a coat pocket. Take it to a holiday let, a caravan, or a relative’s house, plug it into their television, and your channels are there.'
  },
  {
    title: 'It is the cheapest way in',
    body: 'A Fire TV Stick costs less than most Android boxes, so the total cost of getting IPTV onto your television stays low even if you buy the stick new.'
  }
];

const models = [
  {
    name: 'Fire TV Stick 4K Max',
    resolution: '4K HDR',
    verdict: 'Best choice',
    note: 'The fastest stick Amazon sells. Menus stay responsive with a large channel list and Wi-Fi 6 helps on a busy home network.'
  },
  {
    name: 'Fire TV Stick 4K',
    resolution: '4K HDR',
    verdict: 'Great value',
    note: 'Handles 4K channels and big programme guides comfortably. The sweet spot for most UK households.'
  },
  {
    name: 'Fire TV Cube',
    resolution: '4K HDR',
    verdict: 'Fastest',
    note: 'The quickest Fire TV device, with an Ethernet port included. Worth it if your Wi-Fi is unreliable.'
  },
  {
    name: 'Fire TV Stick HD',
    resolution: '1080p',
    verdict: 'Budget',
    note: 'Fine for HD channels on an HD television. Large guides load more slowly than on the 4K models.'
  },
  {
    name: 'Older Fire TV Sticks',
    resolution: '1080p',
    verdict: 'Works',
    note: 'Second and third generation sticks still run the players, but expect slower menus and longer channel loading.'
  },
  {
    name: 'Fire TV built into a TV',
    resolution: 'Varies',
    verdict: 'Works',
    note: 'Televisions with Fire TV built in install the same players from the same Downloader code, with no extra hardware.'
  }
];

const setupSteps = [
  {
    title: 'Allow app installs',
    body: 'On your Firestick go to Settings → My Fire TV → Developer Options and turn on Apps from Unknown Sources. This is a standard Amazon setting. Nothing is jailbroken, rooted, or modified, and your warranty is unaffected.'
  },
  {
    title: 'Install the Downloader app',
    body: 'Search for Downloader from the Fire TV home screen and install it. It has an orange icon and comes from the official Amazon Appstore.'
  },
  {
    title: 'Enter the setup code',
    body: 'Open Downloader and enter code 6124314 to install 8K Player, the player we recommend for Fire TV. Let the install finish, then open it.'
  },
  {
    title: 'Sign in with your details',
    body: 'Enter the profile name, username, and password from your IPTV UK activation message. Leave the app open while your channels, categories, and programme guide load.'
  },
  {
    title: 'Test before you settle in',
    body: 'Open a live channel first, then a film or an episode. If both play cleanly, you are done. If not, message us before changing any settings and we will work through it with you.'
  }
];

const included = [
  'UK terrestrial and entertainment channels',
  'Premium sports networks',
  'Live football, cricket, boxing, UFC and F1',
  'Sky Cinema and film channels',
  'Kids and family channels',
  'News and documentary channels',
  'International and regional channels',
  'Films and box sets on demand',
  'Full electronic programme guide',
  'HD, Full HD and 4K where available'
];

const bufferingFixes = [
  {
    title: 'Move the stick off the back of the TV',
    body: 'A Firestick tucked behind a television is shielded by the screen itself. Use the HDMI extender in the box so the stick sits clear of the panel. This single change fixes most Wi-Fi complaints.'
  },
  {
    title: 'Go wired if you can',
    body: 'An Amazon Ethernet adapter turns a flaky wireless connection into a stable wired one. It is the most reliable upgrade you can make for live sport.'
  },
  {
    title: 'Clear the player cache',
    body: 'Settings → Applications → Manage Installed Applications → your player → Clear Cache. Programme guide data builds up over months and slows the menus down.'
  },
  {
    title: 'Close what you are not using',
    body: 'A Firestick has limited memory. Force stop apps you left running, then restart the stick from Settings → My Fire TV → Restart before a big match.'
  },
  {
    title: 'Check whether it is one channel or all of them',
    body: 'If every channel stutters, the cause is your network or the stick. If one channel misbehaves while the rest are clean, it is that stream and we can look at it for you.'
  }
];

export default function FirestickSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.28),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="transition hover:text-orange-300">
              Home
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-300">Firestick</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
                Built for Amazon Fire TV
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                IPTV Firestick Subscription UK
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Turn the Fire TV Stick you already own into a full live television service. An IPTV UK subscription
                gives you UK channels, premium sport, films, and box sets on your Firestick over your normal broadband
                connection — no dish, no aerial, no engineer, and no contract.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Setup takes about ten minutes using the standard Amazon Downloader app. Nothing needs to be jailbroken
                or modified, and your Firestick keeps every app and feature it already has.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={trialHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Claim 24hr Free Trial
                </a>
                <Link
                  href="/pricing"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  See Firestick Plans
                </Link>
                <Link
                  href="#setup"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  How Setup Works
                </Link>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_35px_100px_-45px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/firestick-iptv.svg"
                alt="Fire TV Stick plugged into a television streaming live IPTV channels"
                width={1200}
                height={630}
                className="h-auto w-full"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Firestick */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Why Firestick</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Why a Firestick IPTV subscription makes sense
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            The Fire TV Stick is the most common way UK viewers watch IPTV, and it is not just because the stick is
            cheap. It suits live television better than most streaming devices.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyFirestick.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)]"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-7 text-slate-600">
            If you are still weighing up hardware, our{' '}
            <Link
              href="/best-android-tv-box-iptv-uk"
              className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
            >
              Android TV box comparison
            </Link>{' '}
            covers the alternatives. For most people buying purely for live TV, a Fire TV Stick 4K does the job for a
            fraction of the price.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">What you get</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                What your Firestick IPTV subscription includes
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                One subscription, one player, every category in the same menu. No switching between six different apps
                to find what is on.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/channels"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Browse the full channel list
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                  <span className="leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible models */}
      <section id="devices" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Compatibility</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Which Fire TV devices does it work on?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Every current Amazon Fire TV device is supported, and most older ones are too. The difference between them
            is speed and picture quality, not whether the service runs at all.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.6)]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Fire TV device</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Max quality</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Verdict</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={model.name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="border-t border-slate-200 px-4 py-3 align-top font-semibold text-slate-900">
                      {model.name}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-3 align-top text-slate-600">{model.resolution}</td>
                    <td className="border-t border-slate-200 px-4 py-3 align-top">
                      <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-600">
                        {model.verdict}
                      </span>
                    </td>
                    <td className="border-t border-slate-200 px-4 py-3 align-top leading-6 text-slate-600">
                      {model.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Setup</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                How to install IPTV on a Firestick
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Five steps, about ten minutes, using the Downloader app from Amazon’s own Appstore. If you get stuck at
                any point, message us and we will walk you through it.
              </p>

              <ol className="mt-8 space-y-4">
                {setupSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 sm:text-base">{step.title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                Using a different device as well? The{' '}
                <Link
                  href="/installation-guide"
                  className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                >
                  full installation guide
                </Link>{' '}
                covers Smart TVs, Android boxes, MAG devices, iPhone, and Windows.
              </p>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Before you start</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600">
                  {[
                    'An Amazon Fire TV Stick or Fire TV Cube',
                    'A TV with a spare HDMI port',
                    'Broadband of roughly 10 Mbps or more',
                    'Your IPTV UK login details',
                    'About ten minutes'
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 font-bold text-emerald-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={setupHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-emerald-600"
                >
                  Get setup help
                </a>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Speed guide</p>
                <div className="mt-4 space-y-3 text-sm">
                  {[
                    ['SD channels', '5 Mbps'],
                    ['HD channels', '10 Mbps'],
                    ['4K channels', '25 Mbps'],
                    ['Two TVs at once', '35 Mbps+']
                  ].map(([label, speed]) => (
                    <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-bold text-slate-900">{speed}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-6 text-slate-500">
                  A steady connection matters more than a fast one. Live TV cannot buffer far ahead the way on-demand
                  video does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Pricing</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Firestick subscription plans
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                The same plans work on every device. Pick a length, and we send your login details.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Full pricing details →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-[0_25px_70px_-45px_rgba(249,115,22,0.6)]'
                    : 'border-slate-200 bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)]'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 right-5 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    Best value
                  </span>
                ) : null}
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{plan.per}</p>
                <p className="mt-3 text-lg font-black text-slate-900">{plan.name}</p>
                <p className="mt-4 text-4xl font-black tracking-tight text-slate-900">£{plan.price}</p>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{plan.note}</p>
                <a
                  href={getWhatsAppLink(
                    `Hi, I'd like the ${plan.name} (£${plan.price}) for my Firestick.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  Get started
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            Not ready to commit? Try it on your Firestick with a{' '}
            <a
              href={trialHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-600 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-700"
            >
              free 24-hour trial
            </a>{' '}
            first, and check the{' '}
            <Link
              href="/refund"
              className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
            >
              refund terms
            </Link>{' '}
            before paying for a longer plan.
          </p>
        </div>
      </section>

      {/* Buffering */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Troubleshooting</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Fixing IPTV buffering on a Firestick
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            A Firestick is a small device on a wireless connection, sitting behind a large metal and glass panel. Almost
            every buffering complaint traces back to one of these five things.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bufferingFixes.map((fix, index) => (
              <article key={fix.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{fix.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{fix.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Firestick IPTV: frequently asked questions
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

      {/* Other devices */}
      <section className="bg-white pb-14 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Watching on another device?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            The same subscription works across every platform we support.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'IPTV for Android TV', href: '/iptv-for-android-tv-uk' },
              { label: 'IPTV for PC', href: '/iptv-for-pc-uk' },
              { label: 'IPTV for iPhone', href: '/iptv-for-iphone-uk' },
              { label: 'All device setup', href: '/installation-guide' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_35px_100px_-50px_rgba(15,23,42,0.9)] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">Get started</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
            Try IPTV UK on your Firestick before you pay for anything
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Message us on WhatsApp for a free 24-hour trial. Set it up on the Firestick you already own, open the
            channels you actually watch, and test it during a busy evening rather than a quiet afternoon. Pay for a
            longer plan only once you know it performs on your own broadband.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Keep your login details private, and only use services authorised to provide the content you watch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={trialHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Claim 24hr Free Trial
            </a>
            <Link
              href="/pricing"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              See Plans
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read the Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
