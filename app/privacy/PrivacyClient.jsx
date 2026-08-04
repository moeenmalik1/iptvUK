'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';

export default function PrivacyClient() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-xs mb-8">Last Updated: July 9, 2026</p>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-white mb-2.5">1. Information Collection</h2>
                <p>
                  We collect basic information required to activate and manage your subscription, such as your email address and payment details. We do not store credit/debit card numbers on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">2. Use of Information</h2>
                <p>
                  Your information is solely used to deliver the IPTV service, activate your lines, process payments, and send support updates. We do not sell or share your personal data with third-party advertising companies.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">3. Data Security</h2>
                <p>
                  We use modern industry standards to protect your data. All communications between your devices and our website are encrypted using SSL technology.
                </p>
              </section>
            </div>
          </div>
        </div>

        <RelatedLinks />
        <Footer />
      </div>
    </main>
  );
}
