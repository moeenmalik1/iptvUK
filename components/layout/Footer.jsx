import Link from 'next/link';
import { guideHref, guideNav } from '../../data/guides/nav';
import { getWhatsAppLink } from '../../lib/whatsapp';

const columns = [
  {
    title: 'IPTV UK',
    links: [
      { label: 'About Us', href: '/#services' },
      { label: 'Service Status', href: '/status' },
      { label: 'Reviews', href: '/#reviews' }
    ]
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Free 24hr Trial', href: '/iptv-uk-free-trial' },
      { label: 'Channels', href: '/channels' },
      { label: 'IPTV for Firestick', href: '/iptv-firestick-subscription-uk' },
      { label: 'Setup Guide', href: '/installation-guide' },
      { label: 'Contact', href: '/#contact' }
    ]
  },
  {
    title: 'Guides',
    links: [
      ...guideNav.map((guide) => ({ label: guide.title, href: guideHref(guide.slug) })),
      { label: 'All Guides', href: '/guides' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Cookies', href: '/cookies' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/#faq' },
      { label: 'WhatsApp', href: getWhatsAppLink() },
      { label: 'Email Support', href: 'mailto:contact@iptvuk.it.com' },
      { label: 'Ticket Portal', href: '/#contact' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{column.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                      <a 
                        href={link.href} 
                        target={link.href.startsWith('http') ? '_blank' : undefined} 
                        rel="noreferrer"
                        className="transition hover:text-orange-400"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="transition hover:text-orange-400">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} IPTV UK LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
