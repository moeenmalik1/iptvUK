import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    q: 'What is IPTV?',
    a: 'IPTV delivers live television and on-demand media over internet protocols rather than satellite or cable.'
  },
  {
    q: 'Do I need a VPN to use this IPTV service?',
    a: 'A VPN is optional in most cases but can improve privacy and connection stability depending on your ISP.'
  },
  {
    q: 'Can I use one account on multiple devices?',
    a: 'Yes. Select a plan with multi-device support to stream on more than one device at the same time.'
  },
  {
    q: 'How fast is account delivery?',
    a: 'Most accounts are delivered instantly after payment with setup details sent by email.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major debit/credit cards and selected digital payment gateways.'
  }
];

export default function FaqSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before getting started with IPTV UK service."
        />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">{faq.q}</summary>
              <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
