import './globals.css';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/seo';

// Ownership token for Search Console's "HTML tag" method. Not a secret — it
// ships in the page head. GOOGLE_SITE_VERIFICATION overrides it if the
// property is ever re-verified with a new token.
const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION || 'ZGLtQmQrhnZQHMpe74mb_VNrCieOoZaHT3qBo05SIeE';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'IPTV UK | Premium IPTV Subscription UK with Live TV, Sports & 4K Streaming',
  description:
    'Discover IPTV UK with live TV channels, sports, movies, series, and 4K streaming. Easy setup, multi-device support, premium entertainment, and reliable IPTV service for UK viewers.',
  applicationName: SITE_NAME,
  // Defaults for any page that does not declare its own `openGraph`. Next.js
  // replaces the object wholesale rather than merging it, so pages that do set
  // Open Graph fields build theirs with `openGraphFor` from lib/seo.js.
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE]
  },
  ...(googleSiteVerification && {
    verification: { google: googleSiteVerification }
  })
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
