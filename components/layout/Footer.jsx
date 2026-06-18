const columns = {
  'IPTV UK': ['About Us', 'Service Status', 'Reviews', 'Affiliate'],
  'Quick Links': ['Pricing', 'Free Trial', 'Setup Guide', 'Contact'],
  Legal: ['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Cookies'],
  Support: ['Help Center', 'WhatsApp', 'Email Support', 'Ticket Portal']
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link}>{link}</li>
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
