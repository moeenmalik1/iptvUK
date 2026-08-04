import Link from 'next/link';

// Keyword-bearing internal links for pages that would otherwise be dead ends.
// Anchor text is the search phrase people actually use, not "click here".
const groups = [
  {
    title: 'Get started',
    links: [
      { label: 'IPTV UK free trial', href: '/iptv-uk-free-trial' },
      { label: 'IPTV subscription prices', href: '/pricing' },
      { label: 'IPTV channel list', href: '/channels' },
      { label: 'IPTV setup guide', href: '/installation-guide' }
    ]
  },
  {
    title: 'By device',
    links: [
      { label: 'IPTV for Firestick', href: '/iptv-firestick-subscription-uk' },
      { label: 'IPTV for Android TV', href: '/iptv-for-android-tv-uk' },
      { label: 'IPTV for PC', href: '/iptv-for-pc-uk' },
      { label: 'IPTV for iPhone', href: '/iptv-for-iphone-uk' }
    ]
  },
  {
    title: 'Guides',
    links: [
      { label: 'Best Android TV box for IPTV', href: '/best-android-tv-box-iptv-uk' },
      { label: 'IPTV vs Netflix', href: '/iptv-vs-netflix-uk' },
      { label: 'Watch Sky Sports without Sky', href: '/how-to-watch-sky-sports-without-sky-tv' },
      { label: 'How to cancel Sky TV', href: '/how-to-cancel-sky-tv-uk' }
    ]
  }
];

export default function RelatedLinks({ dark = false, heading = 'Explore IPTV UK' }) {
  return (
    <section className={dark ? 'bg-slate-950 py-14 text-white' : 'bg-slate-50 py-14 text-slate-900'}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl font-black tracking-tight sm:text-3xl ${dark ? 'text-white' : 'text-slate-900'}`}>
          {heading}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition hover:text-orange-500 ${
                        dark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
