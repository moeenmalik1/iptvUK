import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const cards = [
  {
    icon: '🇬🇧',
    title: 'Optimised for UK Viewers',
    description: 'Service tuning and channel delivery designed specifically for UK local IPTV users.'
  },
  {
    icon: '📺',
    title: 'Full UK IPTV Channel Lineup',
    description: 'Comprehensive UK channels across sports, movies, entertainment, and more.'
  },
  {
    icon: '⚡',
    title: 'Stable UK-Based Streaming',
    description: 'Improved stream stability for smooth playback during prime viewing hours.'
  },
  {
    icon: '💬',
    title: 'English Support',
    description: 'Clear, friendly support focused on helping UK customers get set up quickly.'
  },
  {
    icon: '⏱️',
    title: 'Fast Response Times',
    description: 'Quick turnaround for setup help, troubleshooting, and account questions.'
  },
  {
    icon: '🎯',
    title: 'Built for the UK Market',
    description: 'If you want the best IPTV subscription UK, this is not an overloaded global service.'
  }
];

export default function PerformanceSection() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Best IPTV Subscription for the UK Market"
          subtitle="Focused on UK local IPTV users with dependable performance and support."
          light
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard key={card.title} {...card} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
