import './globals.css';

// Ownership token for Search Console's "HTML tag" method. Not a secret — it
// ships in the page head. GOOGLE_SITE_VERIFICATION overrides it if the
// property is ever re-verified with a new token.
const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION || 'ZGLtQmQrhnZQHMpe74mb_VNrCieOoZaHT3qBo05SIeE';

export const metadata = {
  metadataBase: new URL('https://www.iptvuk.buzz'),
  title: 'IPTV UK | Premium IPTV Subscription UK with Live TV, Sports & 4K Streaming',
  description:
    'Discover IPTV UK with live TV channels, sports, movies, series, and 4K streaming. Easy setup, multi-device support, premium entertainment, and reliable IPTV service for UK viewers.',
  ...(googleSiteVerification && {
    verification: { google: googleSiteVerification }
  })
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
