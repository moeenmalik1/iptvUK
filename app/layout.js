import './globals.css';

export const metadata = {
  title: 'IPTV UK | Premium IPTV Subscription UK with Live TV, Sports & 4K Streaming',
  description:
    'Discover IPTV UK with live TV channels, sports, movies, series, and 4K streaming. Easy setup, multi-device support, premium entertainment, and reliable IPTV service for UK viewers.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
