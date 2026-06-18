const deviceCards = [
  {
    title: 'Firestick / Fire TV / Fire Cube',
    apps: 'Popular Apps: IPTV Smarters Pro (APK), TiviMate (APK)...',
    icon: '◻️'
  },
  {
    title: 'Android Devices (Phones, Boxes, TVs)',
    apps: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
    icon: '📱'
  },
  {
    title: 'Smart TVs (All Brands)',
    apps: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
    icon: '📺'
  },
  {
    title: 'Windows PCs & Laptops',
    apps: 'Popular Apps: VLC Media Player, IPTV Smarters Pro...',
    icon: '🖥️'
  },
  {
    title: 'iOS (iPhones, iPads, Apple TV)',
    apps: 'Popular Apps: GSE Smart IPTV, IPTV Smarters Player...',
    icon: '🍎'
  },
  {
    title: 'macOS (MacBooks, iMacs)',
    apps: 'Popular Apps: VLC Media Player, GSE Smart IPTV...',
    icon: '💻'
  },
  {
    title: 'MAG Devices (STB, TVIP, Formuler)',
    apps: 'Popular Apps: STB Emulator, Built in MAG Portal',
    icon: '⬡'
  },
  {
    title: 'Enigma2 / ZGEMMA',
    apps: 'Popular Apps: PuTTY (Telnet/SSH), FileZilla (FTP)...',
    icon: '🛠️'
  },
  {
    title: 'Chromecast with Google TV',
    apps: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
    icon: '📡'
  }
];

const setupSteps = {
  'Firestick / Fire TV / Fire Cube': [
    'Open Settings > My Fire TV > Developer Options and enable Install Unknown Apps.',
    'Install Downloader app from the Amazon App Store.',
    'Enter the APK URL we provide and install IPTV Smarters or TiviMate.',
    'Open the app and login with Xtream Codes API or M3U URL credentials.'
  ],
  'Android Devices (Phones, Boxes, TVs)': [
    'Open Google Play Store and install IPTV Smarters Pro or TiviMate.',
    'Launch the app and choose Xtream Codes API login.',
    'Enter server URL, username and password exactly as sent.',
    'Save and wait for channels/VOD to load.'
  ],
  'Smart TVs (All Brands)': [
    'Install a compatible app from your TV app store.',
    'Choose M3U or Xtream login inside the app.',
    'Paste credentials from your welcome email.',
    'Restart app if channels do not appear immediately.'
  ],
  'Windows PCs & Laptops': [
    'Install VLC or IPTV Smarters for Windows.',
    'Open app and choose M3U playlist or Xtream API login.',
    'Enter your details and click Add User.',
    'Use category filters to browse live TV, movies and series.'
  ],
  'iOS (iPhones, iPads, Apple TV)': [
    'Install GSE Smart IPTV or IPTV Smarters Player from App Store.',
    'Choose Add Playlist or Xtream API.',
    'Enter details and tap Save.',
    'Allow app permissions for best playback support.'
  ],
  'macOS (MacBooks, iMacs)': [
    'Install VLC or IPTV Smarters macOS app.',
    'Import M3U playlist or login with Xtream API.',
    'Confirm stream format is set to HLS/TS Auto.',
    'Bookmark favorite channels for quick access.'
  ],
  'MAG Devices (STB, TVIP, Formuler)': [
    'Open System Settings > Servers > Portals.',
    'Set Portal URL exactly as provided by support.',
    'Reboot the device and let channels sync.',
    'Contact support with MAC address if activation is pending.'
  ],
  'Enigma2 / ZGEMMA': [
    'Connect to your receiver using PuTTY (SSH) and FileZilla.',
    'Upload bouquet files or run provider script.',
    'Restart Enigma2 service after upload.',
    'Refresh bouquets/channels from your remote control menu.'
  ],
  'Chromecast with Google TV': [
    'Install IPTV Smarters Pro or TiviMate from Play Store.',
    'Use Xtream Codes API credentials to sign in.',
    'Set external player to VLC if needed for compatibility.',
    'Restart device if stream buffer persists.'
  ]
};

const troubleshootingTips = [
  'Check your internet connection. A stable connection of at least 15-20 Mbps is recommended for HD streaming.',
  'Ensure your M3U URL or Xtream Codes API details are entered correctly. They are case-sensitive.',
  'Update your IPTV player app to the latest version.',
  'Restart your device and your router/modem.',
  'If using a VPN, try connecting to a different server or temporarily disabling it to test playback.',
  'Clear the cache of your IPTV player app.',
  'Some ISPs may block IPTV services. If needed, a VPN can help bypass these restrictions.'
];

export default function InstallationGuideSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Installation Guides</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Step-by-step instructions to set up iptvuk.it.com IPTV on your favorite devices. Get ready to stream in
            minutes!
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deviceCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-2xl text-orange-500">{card.icon}</p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{card.apps}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-3xl font-extrabold text-slate-900">Detailed Setup Instructions</h3>
          <div className="mt-8 space-y-3">
            {Object.entries(setupSteps).map(([device, steps]) => (
              <details key={device} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-slate-800">
                  {device}
                  <span className="text-lg text-slate-400 transition group-open:rotate-180">⌄</span>
                </summary>
                <ol className="space-y-2 border-t border-slate-100 px-6 py-4 text-sm text-slate-600">
                  {steps.map((step) => (
                    <li key={step} className="list-decimal">
                      {step}
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-center text-3xl font-extrabold text-slate-900">Troubleshooting Tips</h3>
          <ul className="mt-6 space-y-3">
            {troubleshootingTips.map((tip) => (
              <li key={tip} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
          <h3 className="text-3xl font-extrabold text-slate-900">Still need help?</h3>
          <p className="mt-3 text-slate-600">Our expert support team is ready to assist you 24/7.</p>
          <button className="mt-6 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white">
            Contact Support via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
