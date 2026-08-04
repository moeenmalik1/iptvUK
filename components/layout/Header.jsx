'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { deviceNav } from '../../data/devices/nav';
import { guideHref, guideNav } from '../../data/guides/nav';

// Five top-level tabs, each grouping its own sub-items. Keeping the bar short
// is what stops it wrapping onto two lines at tablet and laptop widths. The
// logo doubles as the Home link.
const deviceGuides = ['best-android-tv-box-iptv-uk', 'iptv-for-iphone-uk'];
const deviceNavHrefs = new Set(deviceNav.map((item) => item.href));

const links = [
  { label: 'Channels', href: '/channels' },
  {
    label: 'Devices',
    href: '/installation-guide',
    children: [
      ...deviceNav,
      ...guideNav
        .filter((item) => deviceGuides.includes(item.slug))
        .map((item) => ({ label: item.label, href: guideHref(item.slug) }))
        .filter((item) => !deviceNavHrefs.has(item.href)),
      { label: 'All device setup', href: '/installation-guide' }
    ]
  },
  {
    label: 'Guides',
    href: '/guides',
    children: [
      ...guideNav
        .filter((item) => !deviceGuides.includes(item.slug))
        .map((item) => ({ label: item.label, href: guideHref(item.slug) })),
      { label: 'All guides', href: '/guides' }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    children: [
      { label: 'Plans & pricing', href: '/pricing' },
      { label: 'Free 24hr trial', href: '/iptv-uk-free-trial' },
      { label: 'Refund policy', href: '/refund' }
    ]
  },
  {
    label: 'Support',
    href: '/#contact',
    children: [
      { label: 'Contact us', href: '/#contact' },
      { label: 'FAQs', href: '/#faq' },
      { label: 'Service status', href: '/status' }
    ]
  }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resolveHref = (href) => {
    if (href.startsWith('/#')) {
      return href;
    }

    if (href.startsWith('#')) {
      return pathname === '/' ? `/${href}` : `${pathname}${href}`;
    }

    return href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-orange-300" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">IPTV UK</p>
            <p className="text-sm font-extrabold text-slate-900">STREAMING</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-600 md:flex lg:gap-4">
          {links.map((link) =>
            link.children ? (
              // Opens on hover and on keyboard focus, so the submenu is reachable
              // without JavaScript state.
              <div key={link.label} className="group relative">
                <Link
                  href={resolveHref(link.href)}
                  className="flex items-center gap-1 whitespace-nowrap transition hover:text-orange-500 group-hover:text-orange-500"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={resolveHref(link.href)}
                className="whitespace-nowrap transition hover:text-orange-500"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Action Buttons */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            href="/iptv-uk-free-trial"
            className="hidden whitespace-nowrap rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 lg:inline-block"
          >
            24hr Free Trial
          </Link>
          <Link 
            href="/pricing" 
            className="whitespace-nowrap rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <div key={link.label} className="flex flex-col">
                <Link
                  href={resolveHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-orange-500 py-1"
                >
                  {link.label}
                </Link>

                {link.children ? (
                  <div className="mt-2 flex flex-col gap-2 border-l-2 border-orange-100 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] text-slate-500 transition hover:text-orange-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <Link
                href="/iptv-uk-free-trial"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-emerald-300 bg-emerald-50 py-2.5 text-center text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                24hr Free Trial
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md bg-orange-500 py-2.5 text-center text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
