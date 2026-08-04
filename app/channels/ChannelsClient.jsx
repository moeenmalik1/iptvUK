'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';
import { Search, Tv, Film, Trophy, Compass, Sparkles, Check, Flame, MessageSquare, Play, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

const categories = [
  { id: 'all', label: 'All Channels', icon: Compass },
  { id: 'sports', label: 'Sports', icon: Trophy },
  { id: 'entertainment', label: 'Entertainment', icon: Tv },
  { id: 'movies', label: 'Movies & VOD', icon: Film },
  { id: 'documentaries', label: 'Documentaries', icon: Sparkles }
];

const channelsData = [
  // Sports
  { name: 'Sky Sports Main Event HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports Premier League HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports Football HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports Cricket HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports F1 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports Golf HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Sports Arena HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'TNT Sports 1 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'TNT Sports 2 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'TNT Sports 3 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'TNT Sports 4 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Eurosport 1 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Eurosport 2 HD', category: 'sports', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Premiere HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Select HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Action HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Comedy HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Drama HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Sci-Fi HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Thriller HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Sky Cinema Greats HD', category: 'movies', country: 'UK', status: 'Online' },
  { name: 'Film4 HD', category: 'movies', country: 'UK', status: 'Online' },
  
  // Entertainment
  { name: 'BBC One HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'BBC Two HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'ITV1 HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Channel 4 HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Channel 5 HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Sky Max HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Sky Showcase HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Sky Comedy HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Sky Witness HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Gold HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Dave HD', category: 'entertainment', country: 'UK', status: 'Online' },
  { name: 'Alibi HD', category: 'entertainment', country: 'UK', status: 'Online' },
  
  // Documentaries
  { name: 'Discovery Channel HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'National Geographic HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'Nat Geo Wild HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'History Channel HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'Animal Planet HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'Smithsonian Channel HD', category: 'documentaries', country: 'UK', status: 'Online' },
  { name: 'Crime & Investigation HD', category: 'documentaries', country: 'UK', status: 'Online' }
];

export default function ChannelsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredChannels = useMemo(() => {
    return channelsData.filter((channel) => {
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            channel.country.toLowerCase().includes(searchQuery.toLowerCase());
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
              <Flame className="h-3.5 w-3.5" /> Live IPTV Channels & VOD
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Browse Available Channels
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the channels available with your IPTV UK subscription. Type a channel name or browse by category. Enjoy premium streaming with 99.9% uptime.
            </p>
          </div>

          {/* Search and filter controls */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search channels (e.g. Sky Sports, BBC, HBO)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-2xl text-slate-100 placeholder-slate-500 outline-none transition focus:ring-2 focus:ring-orange-500/10"
                />
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 self-center md:self-auto text-xs font-semibold uppercase tracking-wider text-slate-400">
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                  Total listed: <span className="text-white font-bold">{channelsData.length}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                  Uptime: <span className="text-emerald-400 font-bold">99.9%</span>
                </div>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 mt-6 border-t border-slate-800/60 pt-6">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isSelected
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Channels Grid */}
          {filteredChannels.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredChannels.map((channel, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center justify-between p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl transition hover:-translate-y-0.5 hover:bg-slate-900/80 hover:border-slate-700/80"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-orange-400 transition">
                        {channel.name}
                      </p>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                        {channel.country} • {channel.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {channel.status}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/20 border border-dashed border-slate-800 rounded-3xl">
              <HelpCircle className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white">No Channels Found</h3>
              <p className="text-slate-400 text-sm mt-1">
                We couldn&apos;t find any channels matching &quot;{searchQuery}&quot; in this category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-xl transition"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* CTA Promo Banner */}
          <div className="mt-16 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/20 to-slate-900 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-radial-gradient from-orange-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-300">Get Instant Access</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-2">
                Watch all these channels and 20,000+ VODs today!
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Unlock instant access to sports, movies, documentaries, and live TV channels on all your devices. Quick setup, stable server connection, and 24/7 technical support included.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition"
                >
                  View Plans & Pricing
                </Link>
                <a
                  href={getWhatsAppLink("Hi, I'd like to claim my 24 Hours Free Trial.")}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full border border-slate-700 bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-semibold text-sm transition"
                >
                  Request Free Trial
                </a>
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
