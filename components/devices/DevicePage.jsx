import Link from 'next/link';
import { deviceNav } from '../../data/devices/nav';
import { plans } from '../../data/plans';
import { getWhatsAppLink } from '../../lib/whatsapp';

// Shared layout for the per-device landing pages (/iptv-for-pc-uk,
// /iptv-for-android-tv-uk, ...). Each page supplies a data module; the markup
// lives here so the pages stay consistent as more devices are added.
export default function DevicePage({ device }) {
  const trialHref = getWhatsAppLink(device.trialMessage);
  const setupHref = getWhatsAppLink(device.setupMessage);

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
            <Link href="/installation-guide" className="transition hover:text-orange-300">
              Devices
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-300">{device.breadcrumb}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
                {device.badge}
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{device.heading}</h1>
              {device.intro.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={
                    index === 0
                      ? 'mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg'
                      : 'mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base'
                  }
                >
                  {paragraph}
                </p>
              ))}

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
                  href="#setup"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  How Setup Works
                </Link>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-4">
                {device.stats.map((stat) => (
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
                src={device.image}
                alt={device.imageAlt}
                width={1200}
                height={630}
                className="h-auto w-full"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why this device */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">{device.why.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{device.why.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{device.why.intro}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {device.why.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)]"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Apps / compatibility table */}
      <section id="apps" className="scroll-mt-24 bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">{device.table.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{device.table.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{device.table.intro}</p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/10">
                  {device.table.headers.map((header) => (
                    <th key={header} className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {device.table.rows.map((row, rowIndex) => (
                  <tr key={row[0]} className={rowIndex % 2 === 0 ? 'bg-white/[0.03]' : ''}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${row[0]}-${cellIndex}`}
                        className={`border-t border-white/10 px-4 py-3 align-top leading-6 ${
                          cellIndex === 0 ? 'font-semibold text-white' : 'text-slate-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
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
                {device.setup.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{device.setup.intro}</p>

              <ol className="mt-8 space-y-4">
                {device.setup.steps.map((step, index) => (
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
                Watching on more than one device? The{' '}
                <Link
                  href="/installation-guide"
                  className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                >
                  full installation guide
                </Link>{' '}
                covers every platform we support.
              </p>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Before you start</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600">
                  {device.setup.requirements.map((item) => (
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
                  {device.setup.speeds.map(([label, speed]) => (
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
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{device.plansTitle}</h2>
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
                    `Hi, I'd like the ${plan.name} (£${plan.price}) for ${device.planContext}.`
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
            Not ready to commit? Start with the{' '}
            <Link
              href="/iptv-uk-free-trial"
              className="font-semibold text-emerald-600 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-700"
            >
              free 24-hour trial
            </Link>{' '}
            and check the{' '}
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

      {/* Troubleshooting */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Troubleshooting</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {device.troubleshoot.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{device.troubleshoot.intro}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {device.troubleshoot.items.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{device.faqTitle}</h2>
          <div className="mt-8 space-y-3">
            {device.faqs.map((faq) => (
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
            The same subscription works across every platform we support. These pages cover setup, compatible players
            and troubleshooting for each one.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {deviceNav
              .filter((item) => item.href !== `/${device.slug}`)
              .concat([{ label: 'All device setup', href: '/installation-guide' }])
              .map((item) => (
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
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">{device.cta.title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{device.cta.body}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Keep your login details private, and only use services authorised to provide the content you watch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/iptv-uk-free-trial"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              See Plans
            </Link>
            <Link
              href="/channels"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Channels
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
