'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';

export default function TermsClient() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-400 text-xs mb-8">Last Updated: July 9, 2026</p>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-white mb-2.5">1. Acceptance of Terms</h2>
                <p>
                  By accessing and subscribing to IPTV UK services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before starting your subscription.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">2. Service Provision</h2>
                <p>
                  We strive to offer consistent, high-quality streams. However, service availability may be affected by maintenance, server load, and factors outside our control, such as your local internet provider.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">3. Subscription Use</h2>
                <p>
                  Subscriptions are for personal, non-commercial use only. Sharing your account credentials or streaming links with third parties is strictly prohibited and will result in instant termination of your account without refund.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">4. Payment &amp; Renewal</h2>
                <p>
                  Payments are processed securely. Subscriptions do not auto-renew unless you manually opt for recurring payments. All prices are stated in British Pounds (GBP).
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
