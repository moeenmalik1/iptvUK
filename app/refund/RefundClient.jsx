'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';

export default function RefundClient() {
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
              Refund Policy
            </h1>
            <p className="text-slate-400 text-xs mb-8">Last Updated: July 9, 2026</p>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-white mb-2.5">1. Free Trial Eligibility</h2>
                <p>
                  We offer a 24-hour free trial for new users to test server performance and channel lists on their devices. We recommend utilizing the trial before placing a paid subscription order.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">2. Refund Window</h2>
                <p>
                  If you experience persistent technical difficulties that our support team cannot resolve, you are eligible to request a refund within 7 days of your initial purchase.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-white mb-2.5">3. Non-Refundable Cases</h2>
                <p>
                  Refunds will not be issued for account suspensions due to abuse (e.g. sharing your subscription credentials or dual-connections on single-connection accounts).
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
