'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RelatedLinks from '../../components/layout/RelatedLinks';
import { ShieldCheck, Server, Zap, Cpu, Activity, RefreshCw } from 'lucide-react';

const systems = [
  { name: 'UK Streaming Server Node A', type: 'Server', status: 'Operational', uptime: '99.98%' },
  { name: 'UK Streaming Server Node B', type: 'Server', status: 'Operational', uptime: '99.95%' },
  { name: 'VOD Edge Content Delivery Network', type: 'CDN', status: 'Operational', uptime: '100.00%' },
  { name: 'EPG Guide Data Synchronization', type: 'Data Feed', status: 'Operational', uptime: '99.90%' },
  { name: 'Customer Activation & Billing API', type: 'API Gateway', status: 'Operational', uptime: '99.99%' }
];

export default function StatusClient() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Activity className="h-3.5 w-3.5" /> All Systems Operational
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
              IPTV UK Service Status
            </h1>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              We monitor our IPTV streaming servers and network status around the clock. Below is a real-time status overview of our channels, VOD libraries, and gateway services.
            </p>
          </div>

          {/* Uptime Hero Card */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 rounded-3xl p-8 mb-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Uptime Last 30 Days</p>
              <h2 className="text-4xl font-black text-white mt-1">99.96%</h2>
              <p className="text-slate-400 text-xs mt-1">Monitored from 6 global locations</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl text-sm font-bold border border-emerald-500/30">
              <ShieldCheck className="h-5 w-5" /> Live Monitoring Active
            </div>
          </div>

          {/* System list */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="border-b border-slate-800 px-6 py-4 bg-slate-900/80 flex justify-between items-center">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Server className="h-4 w-4 text-orange-400" /> Monitored Components
              </h3>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <RefreshCw className="h-3 w-3 animate-spin text-slate-500" /> Live
              </span>
            </div>
            <div className="divide-y divide-slate-800/60">
              {systems.map((sys) => (
                <div key={sys.name} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-white text-sm">{sys.name}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{sys.type}</p>
                  </div>
                  <div className="flex items-center gap-6 justify-between sm:justify-end">
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Uptime</p>
                      <p className="text-sm font-bold text-white">{sys.uptime}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {sys.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <RelatedLinks dark />
        <Footer />
      </div>
    </main>
  );
}
