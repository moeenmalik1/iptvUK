export const macDevice = {
  slug: 'iptv-for-mac-uk',
  navLabel: 'IPTV for Mac',
  breadcrumb: 'Mac',
  title: 'IPTV for Mac',
  heading: 'IPTV for Mac and MacBook',
  badge: 'macOS · Apple Silicon & Intel',
  metaTitle: 'IPTV for Mac UK | Watch Live TV on macOS, MacBook & iMac',
  metaDescription:
    'Watch IPTV on your Mac in the UK. Best macOS players including IINA and VLC, M3U and Xtream setup, AirPlay from Mac to Apple TV, Apple Silicon support and fixes for stuttering playback.',
  image: '/images/devices/iptv-mac.svg',
  imageAlt: 'MacBook playing a live IPTV channel and streaming it to a television over AirPlay',
  trialMessage: "Hi, I'd like to claim my 24 Hours Free Trial for my Mac.",
  setupMessage: 'Hi, I need help setting up IPTV on my Mac.',
  planContext: 'my Mac',
  plansTitle: 'IPTV plans for Mac',
  faqTitle: 'IPTV on Mac: frequently asked questions',

  intro: [
    'A Mac makes an excellent IPTV player. There is nothing to sideload, no developer setting to unlock, and a proper keyboard for pasting long server addresses — which is where most setup errors actually happen.',
    'IPTV UK works on macOS through free players such as IINA and VLC, on both Apple Silicon and Intel machines. Send the picture to a television with AirPlay or an HDMI adapter when you want the big screen, and use the same subscription on your other devices.'
  ],
  stats: [
    { value: 'macOS', label: 'Native players' },
    { value: 'M1–M4', label: 'Apple Silicon' },
    { value: 'AirPlay', label: 'To your TV' },
    { value: 'From £14.99', label: 'Plans' }
  ],

  why: {
    eyebrow: 'Why a Mac',
    title: 'Why watching IPTV on a Mac works well',
    intro:
      'macOS has fewer dedicated IPTV apps than Windows, but the ones it has are excellent, and the hardware handles high-bitrate streams without breaking a sweat.',
    items: [
      {
        title: 'Apple Silicon decodes video efficiently',
        body: 'M-series chips include dedicated media engines, so a 4K stream plays smoothly while barely touching the battery. An older Intel MacBook will run the fan; an M1 or newer usually stays silent.'
      },
      {
        title: 'Nothing needs unlocking',
        body: 'IINA and VLC are ordinary Mac applications from their own official websites. There is no sideloading, no unknown-sources toggle, and nothing that modifies macOS or affects your warranty.'
      },
      {
        title: 'AirPlay is built in',
        body: 'Send playback straight to an Apple TV or an AirPlay 2 television from the menu bar, with no cable and no extra hardware. Your Mac keeps working while the stream plays on the TV.'
      },
      {
        title: 'It is the best place to check your details',
        body: 'Copy and paste removes typing mistakes entirely. If your login works on the Mac but not on your Firestick, you have proved the account is fine and the problem is the other device.'
      }
    ]
  },

  table: {
    eyebrow: 'Players',
    title: 'Best IPTV players for macOS',
    intro:
      'There are fewer television-style IPTV apps on macOS than on Windows, so most Mac users run a strong general-purpose player. All of the options below are free to download.',
    headers: ['Player', 'Cost', 'Best for', 'Notes'],
    rows: [
      [
        'IINA',
        'Free',
        'Most Mac users',
        'A modern, open-source player built for macOS on the same engine as VLC. Native Apple Silicon build, proper dark mode, trackpad gestures and Picture in Picture. Opens M3U playlists from the URL dialog.'
      ],
      [
        'VLC',
        'Free',
        'Reliability',
        'Plays essentially anything and runs natively on Apple Silicon and Intel. No programme guide or channel categories, but if a stream works anywhere it works in VLC. The best first test.'
      ],
      [
        'Elmedia Player',
        'Free with paid extras',
        'AirPlay and casting',
        'A polished macOS player with strong AirPlay, Chromecast and DLNA support. Useful when you mainly want to push the stream to a television.'
      ],
      [
        'Browser playback',
        'Free',
        'A quick check',
        'Some streams play directly in a Safari or Chrome tab with nothing installed. Handy for confirming your subscription works before setting anything else up.'
      ],
      [
        'Kodi with a PVR add-on',
        'Free',
        'A full TV interface',
        'The closest thing to a set-top box on macOS, with a proper channel list and programme guide. More setup than the others, so try it once the basics work.'
      ]
    ]
  },

  setup: {
    title: 'How to set up IPTV on a Mac',
    intro:
      'About five minutes. We suggest starting with VLC or IINA to confirm your details work, then moving to Kodi later if you want a full programme guide.',
    steps: [
      {
        title: 'Copy your login details',
        body: 'Open the WhatsApp message we sent. You will have either one M3U playlist link, or a server URL, username and password. Copy them exactly, including http:// or https:// and any port number. A single missing character stops the account loading.'
      },
      {
        title: 'Install IINA or VLC',
        body: 'Download IINA from iina.io or VLC from videolan.org, then drag the app into your Applications folder. Both have native Apple Silicon builds, so choose the Apple Silicon download if you have an M-series Mac.'
      },
      {
        title: 'Approve it on first launch if macOS asks',
        body: 'macOS may say the app is from an unidentified developer. Right-click the app icon and choose Open, then confirm. This is standard Gatekeeper behaviour for apps downloaded outside the App Store and only happens once.'
      },
      {
        title: 'Open your playlist',
        body: 'In VLC choose File → Open Network, and in IINA choose File → Open URL, then paste your M3U link. The channel list loads into the playlist window.'
      },
      {
        title: 'Test live and on demand',
        body: 'Play one live channel, then a film or an episode. If both work you are set. If only one does, tell us which — that difference tells us exactly where to look.'
      }
    ],
    requirements: [
      'A Mac running a recent macOS version',
      'Broadband of roughly 10 Mbps or more',
      'Your IPTV UK login details',
      'IINA or VLC, both free',
      'An Apple TV or HDMI adapter for the big screen'
    ],
    speeds: [
      ['SD channels', '5 Mbps'],
      ['HD channels', '10 Mbps'],
      ['4K channels', '25 Mbps'],
      ['Wired Ethernet', 'Recommended']
    ]
  },

  troubleshoot: {
    title: 'Fixing IPTV playback problems on a Mac',
    intro:
      'Mac problems are usually the app build, the audio output, or the Wi-Fi band rather than the stream itself. Work through these before assuming the service is at fault.',
    items: [
      {
        title: 'macOS refuses to open the player',
        body: 'If you see "cannot be opened because it is from an unidentified developer", right-click the app and choose Open rather than double-clicking. You can also allow it under System Settings → Privacy & Security. This is normal for apps installed outside the App Store.'
      },
      {
        title: 'Playback stutters on an Intel Mac',
        body: 'Older Intel machines lean on the CPU for decoding. In VLC, turn on hardware decoding under Settings → Input/Codecs, and close Chrome tabs and other heavy apps. On Apple Silicon this is rarely an issue.'
      },
      {
        title: 'Video plays but there is no sound',
        body: 'macOS often switches output after you connect HDMI or headphones. Check System Settings → Sound → Output, then the player\'s own audio track menu, since some channels carry more than one audio track.'
      },
      {
        title: 'AirPlay will not find the TV',
        body: 'Both devices must be on the same Wi-Fi network and awake. Turn off any VPN temporarily, and make sure AirPlay is enabled on the Apple TV or television. If it still fails, use an HDMI adapter, which is more stable for a full match anyway.'
      },
      {
        title: 'Buffering only on Wi-Fi',
        body: 'MacBooks often join the congested 2.4 GHz band. Switch to your 5 GHz network, move closer to the router, or use an Ethernet adapter. This fixes far more buffering than any player setting.'
      },
      {
        title: 'The playlist will not load at all',
        body: 'Paste the link into Safari. If it downloads a file, your details are fine and the player is the problem. If it errors, re-check the URL for a missing character or an expired subscription and message us.'
      }
    ]
  },

  faqs: [
    {
      question: 'Can I watch IPTV on a Mac?',
      answer:
        'Yes. macOS runs several capable IPTV players. IINA and VLC are both free, both have native Apple Silicon builds, and both open M3U playlists. There is no sideloading and nothing that modifies macOS.'
    },
    {
      question: 'What is the best IPTV player for Mac?',
      answer:
        'IINA for most people — it is built specifically for macOS, handles M3U playlists, and supports Picture in Picture and trackpad gestures. VLC is the most reliable fallback and the best way to test whether a stream works at all. Elmedia is worth a look if AirPlay is your priority.'
    },
    {
      question: 'Does IPTV work on Apple Silicon Macs?',
      answer:
        'Yes. IINA and VLC both ship native builds for M1, M2, M3 and M4 Macs, so there is no Rosetta translation involved. Apple Silicon handles high-bitrate and 4K streams noticeably better than older Intel machines, and usually without the fans spinning up.'
    },
    {
      question: 'Is IPTV Smarters available for Mac?',
      answer:
        'Availability of IPTV Smarters on macOS has changed over time and it is not something we rely on. We recommend IINA or VLC instead, since both are free, actively maintained and available directly from their official websites.'
    },
    {
      question: 'How do I watch IPTV from my Mac on my TV?',
      answer:
        'Use AirPlay from the menu bar to send playback to an Apple TV or an AirPlay 2 television, or connect an HDMI adapter for a wired link. HDMI is more stable for a full match or film because nothing depends on your Wi-Fi holding up.'
    },
    {
      question: 'Why does macOS say the player cannot be opened?',
      answer:
        'That is Gatekeeper, the standard macOS check on apps downloaded outside the App Store. Right-click the app and choose Open, then confirm, or allow it under System Settings → Privacy & Security. It only happens on first launch and does not mean anything is wrong.'
    },
    {
      question: 'Do I need a VPN to watch IPTV on a Mac?',
      answer:
        'No. Our service works on standard UK broadband without one. Some customers use a VPN for general privacy, but it can slow playback or route you through a congested server, so try without it first if you are troubleshooting a problem.'
    },
    {
      question: 'Can I use the same subscription on my Mac and my iPhone?',
      answer:
        'You can save your details on both. How many can play at the same time depends on the connection limit in your plan, so message us on WhatsApp and we will tell you what yours allows.'
    }
  ],

  cta: {
    title: 'Try IPTV UK on your Mac before you pay',
    body: 'Start with a free 24-hour trial. Install IINA or VLC, paste in your details, and test a live channel and a film during a busy evening. Choose a plan only once you know it performs on your own connection.'
  }
};
