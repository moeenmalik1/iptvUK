'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { label: 'Home', href: '/' },
  { label: 'Installation Guide', href: '/installation-guide' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-orange-300" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">IPTV UK</p>
            <p className="text-sm font-extrabold text-slate-900">STREAMING</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-orange-500">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
            24hr Free Trial
          </button>
          <button className="rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white">Get Started</button>
        </div>
      </div>
    </header>
  );
}
