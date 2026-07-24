import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faqs';

export default function FaqSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" subtitle="Answers to the most common questions about IPTV UK." />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">{faq.question}</summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
