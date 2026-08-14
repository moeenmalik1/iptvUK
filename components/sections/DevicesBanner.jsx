import Link from 'next/link';

const devices = [
  { label: 'Amazon Firestick', href: '/iptv-firestick-subscription-uk' },
  { label: 'Android TV', href: '/iptv-for-android-tv-uk' },
  { label: 'Smart TVs', href: '/installation-guide' },
  { label: 'Android Boxes', href: '/best-android-tv-box-iptv-uk' },
  { label: 'MAG Devices', href: '/installation-guide' },
  { label: 'iPhone & iPad', href: '/iptv-for-iphone-uk' },
  { label: 'Android Smartphones', href: '/installation-guide' },
  { label: 'Windows PCs', href: '/iptv-for-pc-uk' },
  { label: 'Mac Computers', href: '/iptv-for-mac-uk' }
];

export default function DevicesBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-slate-900 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-extrabold sm:text-3xl">Supported Devices</h3>
        <p className="max-w-3xl text-center text-sm text-white/80 sm:text-base">
          IPTV UK works across a wide range of devices so you can stream your favourite content wherever and whenever
          you choose.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {devices.map((device) => (
            <Link
              key={device.label}
              href={device.href}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition hover:border-white/50 hover:bg-white/25"
            >
              {device.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
