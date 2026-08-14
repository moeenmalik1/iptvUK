'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';
import { Search, Tv, Film, Trophy, Compass, Sparkles, Baby, Newspaper, Globe, Flame, Play, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { channels, categoryCopy, countByCategory } from '../../data/channels';
import { channelsFaqs } from '../../data/faqs';

const categoryIcons = {
  all: Compass,
  sports: Trophy,
  entertainment: Tv,
  movies: Film,
  documentaries: Sparkles,
  kids: Baby,
  news: Newspaper,
  international: Globe
};

const categories = [
  { id: 'all', label: 'All' },
  { id: 'sports', label: 'Sports' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'movies', label: 'Movies' },
  { id: 'documentaries', label: 'Documentaries' },
  { id: 'kids', label: 'Kids' },
  { id: 'news', label: 'News' },
  { id: 'international', label: 'International' }
];

const trialHref = getWhatsAppLink("Hi, I'd like to claim my 24 Hours Free Trial.");

export default function ChannelsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredChannels = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return channels.filter((channel) => {
      const matchesSearch =
        !query ||
        channel.name.toLowerCase().includes(query) ||
        channel.country.toLowerCase().includes(query) ||
        channel.category.toLowerCase().includes(query);
      const matchesCategory = activeCategory === 'all' || channel.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300">
              <Flame className="h-3.5 w-3.5" /> Live IPTV Channels &amp; VOD
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              IPTV UK Channel List
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every Sky Sports and TNT Sports channel, the full Sky Cinema line-up, all the UK
              terrestrial channels and thousands of films and box sets on demand. Search for the
              channel you care about below, then test it yourself on a free 24-hour trial before you
              pay anything.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={trialHref}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition"
              >
                Start Free 24-Hour Trial
              </a>
              <Link
                href="/pricing"
                className="px-5 py-3 rounded-full border border-slate-700 bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-semibold text-sm transition"
              >
                View Plans from £14.99
              </Link>
            </div>
          </div>

          {/* Search and filter controls */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <label htmlFor="channel-search" className="sr-only">
                  Search the IPTV UK channel list
                </label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  id="channel-search"
                  type="text"
                  placeholder="Search channels (e.g. Sky Sports, BBC, TNT)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-2xl text-slate-100 placeholder-slate-500 outline-none transition focus:ring-2 focus:ring-orange-500/10"
                />
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 self-center md:self-auto text-xs font-semibold uppercase tracking-wider text-slate-400">
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                  Showing: <span className="text-white font-bold">{filteredChannels.length}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                  Uptime: <span className="text-emerald-400 font-bold">99.9%</span>
                </div>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 mt-6 border-t border-slate-800/60 pt-6">
              {categories.map((cat) => {
                const IconComponent = categoryIcons[cat.id];
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isSelected
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {cat.label}
                    <span className={isSelected ? 'text-orange-100' : 'text-slate-500'}>
                      {countByCategory(cat.id)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Channels Grid */}
          {filteredChannels.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredChannels.map((channel) => (
                <div
                  key={`${channel.name}-${channel.country}`}
                  className="group relative flex items-center justify-between gap-2 p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl transition hover:-translate-y-0.5 hover:bg-slate-900/80 hover:border-slate-700/80"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white group-hover:text-orange-400 transition">
                        {channel.name}
                      </p>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                        {channel.country} • {channel.category}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                      channel.quality === '4K'
                        ? 'border-orange-500/30 bg-orange-500/10 text-orange-300'
                        : 'border-slate-700 bg-slate-950 text-slate-400'
                    }`}
                  >
                    {channel.quality}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/20 border border-dashed border-slate-800 rounded-3xl">
              <HelpCircle className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-white">No channels found</h2>
              <p className="text-slate-400 text-sm mt-1">
                Nothing here matches &quot;{searchQuery}&quot;. The list on this page is a sample
                rather than the full playlist — message us and we will confirm whether the channel is
                carried.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition"
                >
                  Reset filters
                </button>
                <a
                  href={getWhatsAppLink(
                    `Hi, do you carry this channel: ${searchQuery || '(channel name)'}?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-xl transition"
                >
                  Ask if it&apos;s carried
                </a>
              </div>
            </div>
          )}

          {/* What's in each category — the SEO body of the page */}
          <section className="mt-20">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              What&apos;s included in the IPTV UK channel list
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              The line-up is built around what UK households actually watch: the two sports packages
              that carry domestic football, the Sky Cinema channels, everything on Freeview, and the
              international channels people keep a subscription for. Below is what sits in each
              category.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {categoryCopy.map((section) => {
                const IconComponent = categoryIcons[section.id];
                return (
                  <div
                    key={section.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-white">{section.title}</h3>
                      <span className="ml-auto text-xs font-bold text-slate-500">
                        {countByCategory(section.id)} listed
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{section.body}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(section.id);
                        setSearchQuery('');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="mt-4 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
                    >
                      Browse {section.title.toLowerCase()} →
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Quality and devices */}
          <section className="mt-20 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h2 className="text-xl font-black tracking-tight text-white">
                Picture quality and what your broadband needs
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Most UK channels are carried in Full HD, with the main sports, movie and flagship
                entertainment channels available in 4K where the broadcaster provides a 4K feed.
                Quality is capped by whichever is lowest: the broadcast feed, your connection, or the
                screen you are watching on.
              </p>
              <dl className="mt-5 divide-y divide-slate-800 border-y border-slate-800 text-sm">
                {[
                  ['SD channels', '5 Mbps'],
                  ['HD channels', '10 Mbps'],
                  ['4K channels', '25 Mbps'],
                  ['Two TVs at once', '35 Mbps+']
                ].map(([label, speed]) => (
                  <div key={label} className="flex items-center justify-between py-2.5">
                    <dt className="text-slate-400">{label}</dt>
                    <dd className="font-bold text-white">{speed}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                If a channel stutters on Wi-Fi but plays cleanly over Ethernet, the network path to
                your TV is the problem rather than the stream. Our{' '}
                <Link href="/installation-guide" className="font-semibold text-orange-400 hover:text-orange-300">
                  setup guide
                </Link>{' '}
                covers the fixes, and{' '}
                <Link href="/status" className="font-semibold text-orange-400 hover:text-orange-300">
                  service status
                </Link>{' '}
                shows whether anything is wrong at our end.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h2 className="text-xl font-black tracking-tight text-white">
                Where you can watch these channels
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                The same channel list loads on every device your subscription is signed in on. Save
                your details on as many as you like — the limit is on how many play at the same time,
                which depends on your plan.
              </p>
              <ul className="mt-5 grid gap-2 text-sm">
                {[
                  ['Amazon Firestick', '/iptv-firestick-subscription-uk'],
                  ['Samsung & LG Smart TVs', '/iptv-for-smart-tv-uk'],
                  ['Android TV & Google TV', '/iptv-for-android-tv-uk'],
                  ['iPhone & iPad', '/iptv-for-iphone-uk'],
                  ['Windows PC & laptop', '/iptv-for-pc-uk'],
                  ['Mac & MacBook', '/iptv-for-mac-uk']
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-300 transition hover:border-slate-700 hover:text-white"
                    >
                      <span className="font-semibold">{label}</span>
                      <span className="text-orange-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-20">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              IPTV UK channels: frequently asked questions
            </h2>
            <div className="mt-6 space-y-3">
              {channelsFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white sm:text-base">
                    <span>{faq.question}</span>
                    <span className="text-lg text-slate-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 border-t border-slate-800 pt-4 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Promo Banner */}
          <div className="mt-16 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/20 to-slate-900 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-radial-gradient from-orange-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-300">
                Check it yourself first
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-2">
                Test your channels free for 24 hours
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Rather than take a channel list on trust, load the real guide into your own player and
                watch the channels you actually care about on your own broadband. No card details, no
                checkout, nothing that renews. Choose a plan only once it performs on a busy evening.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={trialHref}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition"
                >
                  Request Free Trial
                </a>
                <Link
                  href="/pricing"
                  className="px-5 py-3 rounded-full border border-slate-700 bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-semibold text-sm transition"
                >
                  View Plans &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        <RelatedLinks />
        <Footer />
      </div>
    </main>
  );
}
