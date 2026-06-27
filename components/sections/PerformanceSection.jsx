import { BadgeCheck, BookOpen, Globe2, MonitorSmartphone, Sparkles, Trophy } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const cards = [
  {
    icon: BadgeCheck,
    title: 'Reliable streaming performance',
    description: 'Enjoy a smooth viewing experience designed for dependable playback.'
  },
  {
    icon: BookOpen,
    title: 'Extensive content libraries',
    description: 'Find live TV, sports, movies, series, and on-demand entertainment in one place.'
  },
  {
    icon: Globe2,
    title: 'UK-focused entertainment',
    description: 'Built around the needs of viewers who want a UK-first service.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Device flexibility',
    description: 'Works across phones, TVs, boxes, and computers.'
  },
  {
    icon: Sparkles,
    title: 'User-friendly setup',
    description: 'Simple activation and straightforward installation steps.'
  },
  {
    icon: Trophy,
    title: 'Excellent viewing quality',
    description: 'Experience HD, Full HD, and 4K playback across supported content.'
  }
];

export default function PerformanceSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Viewers Choose IPTV UK"
          subtitle="Thousands of viewers choose IPTV UK because of:"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
