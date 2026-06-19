import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

const items = [
  {
    icon: '🏆',
    title: 'One of the best IPTV subscriptions for UK users',
    description: 'Built for the viewers who want dependable service quality and a premium watching experience.'
  },
  {
    icon: '🛰️',
    title: 'Dedicated UK & European servers',
    description: 'Optimized infrastructure helps deliver stable streams with less buffering and downtime.'
  },
  {
    icon: '🎯',
    title: 'Sports, movies, kids & entertainment channels',
    description: 'Enjoy broad content coverage for every member of your household.'
  },
  {
    icon: '📡',
    title: 'UK Catch-Up & TV Guide (EPG)',
    description: 'Catch missed content and browse channels quickly with structured guide support.'
  },
  {
    icon: '📱',
    title: 'Works with IPTV Smarters Pro, MAG 256, MAG 322, and more',
    description: 'Simple setup across popular IPTV apps and hardware devices.'
  },
  {
    icon: '🤝',
    title: 'Focused on quality, stability, and customer satisfaction',
    description: 'A hassle-free IPTV subscription service in the UK for long-term reliability.'
  }
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose UK IPTV?"
          subtitle="A Premium IPTV Subscription Service in the UK"
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          If you’ve searched Reddit for IPTV subscription Reddit UK or best IPTV subscription Reddit, you’ll know how
          hard it is to find a reliable provider — that’s exactly the problem we solve.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
