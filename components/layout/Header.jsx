'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

const trialWhatsAppHref = getWhatsAppLink("Hi, I'd like to claim my 24 Hours Free Trial.");

const links = [
  { label: 'Home', href: '/' },
  { label: 'Channels', href: '/channels' },
  { label: 'Installation Guide', href: '/installation-guide' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/#contact' }
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
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-orange-300" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">IPTV UK</p>
            <p className="text-sm font-extrabold text-slate-900">STREAMING</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={resolveHref(link.href)} className="transition hover:text-orange-500">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={trialWhatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition"
          >
            24hr Free Trial
          </a>
          <Link 
            href="/pricing" 
            className="rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
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
              <Link
                key={link.label}
                href={resolveHref(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-orange-500 py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <a
                href={trialWhatsAppHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-emerald-300 bg-emerald-50 py-2.5 text-center text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition"
              >
                24hr Free Trial
              </a>
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
