import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    q: 'What Is IPTV UK?',
    a: 'IPTV UK refers to Internet Protocol Television services available to viewers in the United Kingdom. IPTV delivers television content over an internet connection, allowing users to stream live TV channels, movies, series, and on-demand content on compatible devices.'
  },
  {
    q: 'Is IPTV Legal in UK?',
    a: 'IPTV technology itself is legal in the UK. Many legitimate television providers use IPTV technology to deliver content over the internet. The legality depends on whether the service has the proper rights and licenses to distribute the content it offers.'
  },
  {
    q: 'Is IPTV Legal UK?',
    a: 'Yes, IPTV as a technology is legal in the UK. Legal IPTV services operate with the necessary permissions and content distribution rights.'
  },
  {
    q: 'Is IPTV Legal in the UK?',
    a: 'Internet Protocol Television is legal in the UK when content is distributed by authorized providers that have obtained the required broadcasting and licensing agreements.'
  },
  {
    q: 'Is IPTV Illegal in UK?',
    a: 'IPTV technology is not illegal. However, services that distribute copyrighted content without authorization may violate applicable laws and regulations.'
  },
  {
    q: 'Is IPTV Illegal UK?',
    a: 'The legality depends on the source of the content being streamed. Users should ensure they use services that comply with applicable copyright and licensing requirements.'
  },
  {
    q: 'Is IPTV Blocked in UK?',
    a: 'IPTV services are not generally blocked in the UK. Access to specific services may depend on internet providers, content rights, regional restrictions, or compliance with local regulations.'
  },
  {
    q: 'How to Setup IPTV UK?',
    a: 'Choose an IPTV subscription, install a compatible IPTV player, enter your playlist URL or login credentials, load channels and content, and start streaming on your preferred device. Most setups can be completed within a few minutes.'
  },
  {
    q: 'How to Fix IPTV Buffering UK?',
    a: 'Check your internet connection speed, restart your router, use a wired Ethernet connection when possible, close unnecessary background applications, update your IPTV application, restart your streaming device, and ensure your IPTV player is properly configured.'
  }
];

export default function FaqSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" subtitle="Answers to the most common questions about IPTV UK." />
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
