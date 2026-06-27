import SectionHeading from '../ui/SectionHeading';

const highlights = [
  'Reliable streaming performance',
  'Extensive content libraries',
  'UK-focused entertainment',
  'Device flexibility',
  'User-friendly setup',
  'Excellent viewing quality'
];

export default function TrustAndTestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Start Streaming with IPTV UK Today"
          subtitle="Experience premium live TV, sports, movies, and on-demand entertainment with IPTV UK."
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Enjoy reliable streaming, extensive content choices, and support for your favourite devices.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                ✓ {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you are looking for UK television channels, international programming, sports coverage, or
              family entertainment, IPTV UK provides a modern way to watch television online.
            </p>
            <button className="mt-5 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
