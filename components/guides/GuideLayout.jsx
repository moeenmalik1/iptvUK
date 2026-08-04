import Link from 'next/link';
import GuideBlocks from './GuideBlocks';
import GuideCard from './GuideCard';
import { getWhatsAppLink } from '../../lib/whatsapp';

export default function GuideLayout({ guide, related }) {
  const contents = guide.blocks.filter((block) => block.type === 'h2' && block.id);
  const trialHref = getWhatsAppLink(guide.cta?.trialMessage ?? "Hi, I'd like to claim my 24 Hours Free Trial.");

  return (
    <article className="bg-white">
      {/* Hero */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="transition hover:text-orange-300">
              Home
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <Link href="/guides" className="transition hover:text-orange-300">
              Guides
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-300">{guide.category}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
                {guide.category}
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">{guide.heading ?? guide.title}</h1>
              {guide.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                <span>{guide.readingTime}</span>
                <span className="text-slate-600">•</span>
                <span>
                  Updated <time dateTime={guide.updatedIso}>{guide.updatedLabel}</time>
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {guide.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_35px_100px_-45px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={guide.image}
                alt={guide.imageAlt}
                width={1200}
                height={630}
                className="h-auto w-full"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-14">
          <div className="min-w-0">
            <GuideBlocks blocks={guide.blocks} />

            {/* FAQs */}
            <section id="faq" className="mt-14 scroll-mt-24">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-3">
                {guide.faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 sm:text-base">
                      <span>{faq.question}</span>
                      <span className="text-lg text-slate-400 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Closing CTA */}
            {guide.cta ? (
              <section className="mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 text-white shadow-[0_35px_100px_-50px_rgba(15,23,42,0.9)] sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">Next step</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">{guide.cta.title}</h2>
                {guide.cta.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-7 flex flex-wrap gap-3">
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
                    See Plans &amp; Pricing
                  </Link>
                  <Link
                    href="/channels"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Browse Channels
                  </Link>
                </div>
              </section>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {contents.length ? (
              <nav className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">On this page</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-slate-600 transition hover:text-orange-600">
                        {item.text}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="text-slate-600 transition hover:text-orange-600">
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </nav>
            ) : null}

            <div className="mt-5 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Try before you commit</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Test IPTV UK on your own broadband with a free 24-hour trial before choosing a longer plan.
              </p>
              <a
                href={trialHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-emerald-600"
              >
                Start free trial
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Useful links</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { label: 'Plans and pricing', href: '/pricing' },
                  { label: 'Full channel list', href: '/channels' },
                  { label: 'Device setup guide', href: '/installation-guide' },
                  { label: 'Service status', href: '/status' },
                  { label: 'All guides', href: '/guides' }
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-600 transition hover:text-orange-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Related guides */}
        {related.length ? (
          <section className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Related Guides</h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">Keep reading before you decide what to buy.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <GuideCard key={item.slug} guide={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
