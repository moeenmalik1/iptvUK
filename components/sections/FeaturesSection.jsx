import { Clock3, MonitorSmartphone, PlaySquare, Radio, ShieldCheck, Smartphone, Sparkles, Tv2, Video, Zap } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const liveTV = [
  {
    icon: Tv2,
    title: 'Live Television',
    description:
      'Watch news, entertainment, documentaries, lifestyle content, and family programming from the UK and around the world.'
  },
  {
    icon: Radio,
    title: 'Sports Streaming',
    description:
      'Follow major sporting events including football, cricket, rugby, boxing, UFC, Formula 1, tennis, and golf.'
  },
  {
    icon: PlaySquare,
    title: 'Movies & Series',
    description:
      'Browse a growing collection of latest movies, popular TV shows, drama series, action films, family entertainment, and documentaries.'
  }
];

const includedFeatures = [
  'High-Quality HD Streaming',
  'Full HD & 4K Content',
  'Electronic Program Guide',
  'Video On Demand',
  'Stable IPTV Servers',
  'Fast Activation',
  'Regular Content Updates',
  'Easy Installation',
  'Multi-Screen Compatibility'
];

const supported = ['Amazon Firestick', 'Android TV', 'Smart TVs', 'Android Boxes', 'MAG Devices', 'iPhone & iPad', 'Android Smartphones', 'Windows PCs', 'Mac Computers'];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Premium IPTV Service Built for the UK"
          subtitle="Live television, sports streaming, movies, and on-demand entertainment."
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          IPTV UK offers a complete entertainment solution for households looking for flexibility and convenience.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {liveTV.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Included Features</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 shrink-0 text-orange-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Device Compatibility</p>
          <h3 className="mt-3 text-xl font-bold text-slate-900">Compatible Devices</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {supported.map((label) => (
              <span key={label} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                {label}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600">Stream your favourite content wherever and whenever you choose.</p>
        </div>
      </div>
    </section>
  );
}
