import SectionHeading from '../ui/SectionHeading';

const steps = [
  'Choose your IPTV subscription plan.',
  'Receive your activation details.',
  'Install your preferred IPTV player.',
  'Add your login credentials.',
  'Start enjoying live TV, sports, movies, and entertainment.'
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How IPTV UK Works" subtitle="Getting started is simple." />

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <ol className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm font-medium text-slate-600 sm:text-base">Most users can begin streaming within minutes.</p>
        </div>
      </div>
    </section>
  );
}
