'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl mb-6">
              Cookie Policy
            </h1>
            <p className="text-slate-400 text-xs mb-8">Last Updated: July 9, 2026</p>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-white mb-2.5">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">2. How We Use Cookies</h2>
                <p>
                  We use cookies strictly to improve your browsing experience. This includes keeping you logged into your support area and remembering your checkout selection. We do not use cross-site tracking or advertising cookies.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">3. Managing Cookies</h2>
                <p>
                  You can configure your browser to reject cookies or notify you when cookies are sent. However, some sections of our website may not function correctly if you disable cookies completely.
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
