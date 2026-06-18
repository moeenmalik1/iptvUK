import './globals.css';

export const metadata = {
  title: 'Premium UK IPTV Service | IPTV UK LTD',
  description:
    'Premium UK IPTV service with live channels, sports, movies, and instant setup. Compatible with all major devices.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
