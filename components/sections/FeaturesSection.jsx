import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const mainFeatures = [
  { icon: '📺', title: '10,000+ Live TV Channels', description: 'Extensive channel lineup for UK and international viewers.' },
  { icon: '🎬', title: 'Movies & TV Series (VOD)', description: 'On-demand content library with popular movies and series.' },
  { icon: '⚽', title: 'UK Sports Channels & PPV Events', description: 'Follow live sports and pay-per-view events in one place.' },
  { icon: '⏪', title: 'IPTV Catch-Up App Support', description: 'Replay missed shows and stay flexible with your schedule.' },
  { icon: '📡', title: 'HD, Full HD & 4K Streaming', description: 'High-quality streams designed for smooth and clear playback.' },
  { icon: '🌍', title: 'UK, Europe, USA & International Channels', description: 'Wide regional coverage for local and global entertainment.' }
];

const supported = ['MAG Box', 'Android TV', 'Android Phones', 'Amazon Firestick', 'Fire TV', 'Samsung & LG Smart TVs', 'Windows & Mac', 'iOS Devices'];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What’s Included in Our IPTV Subscription?"
          subtitle="Everything You Expect from the Best IPTV Service"
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Perfect for users searching to buy IPTV subscription that actually works long-term.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Device & App Compatibility</p>
          <h3 className="mt-3 text-xl font-bold text-slate-900">Works on All Popular IPTV Devices</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {supported.map((label) => (
              <span key={label} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                {label}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600">
            No matter your setup, UK IPTV makes installation quick and easy with full support.
          </p>
        </div>
      </div>
    </section>
  );
}
