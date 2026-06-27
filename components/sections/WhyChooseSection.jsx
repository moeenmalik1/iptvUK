import { BadgeCheck, CirclePlay, Clock3, Cog, MonitorSmartphone, Smartphone, Sparkles, Tv2, Video, Volume2 } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const items = [
  {
    icon: Tv2,
    title: 'Thousands of Live TV Channels',
    description: 'Enjoy a huge selection of live channels for UK and international viewing.'
  },
  {
    icon: Video,
    title: 'HD, Full HD & 4K Streaming',
    description: 'Watch with crisp picture quality across supported devices.'
  },
  {
    icon: CirclePlay,
    title: 'Sports, Movies & Entertainment',
    description: 'Follow live sports and enjoy movies, series, and family content.'
  },
  {
    icon: Sparkles,
    title: 'Video On Demand Library',
    description: 'Browse a growing library of on-demand content.'
  },
  {
    icon: Clock3,
    title: 'Electronic Program Guide (EPG)',
    description: 'Browse channels quickly with a structured TV guide.'
  },
  {
    icon: Volume2,
    title: 'Fast Channel Switching',
    description: 'Move through channels quickly for a smoother viewing experience.'
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Compatibility',
    description: 'Stream on TVs, phones, tablets, boxes, and computers.'
  },
  {
    icon: Cog,
    title: 'Reliable Streaming Technology',
    description: 'Built to provide stable performance and easy setup.'
  },
  {
    icon: BadgeCheck,
    title: 'Easy Setup & Activation',
    description: 'Get started quickly with simple activation steps.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Customer Support',
    description: 'Friendly support when you need help getting started.'
  }
];

export default function WhyChooseSection() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose UK IPTV?" subtitle="Why viewers choose IPTV UK for live TV, sports, movies, and more." />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          IPTV UK delivers a premium entertainment experience with the flexibility, quality, and convenience modern
          viewers expect.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
