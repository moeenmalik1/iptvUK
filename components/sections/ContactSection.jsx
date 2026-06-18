'use client';

import { useMemo, useState } from 'react';

const contactDetails = [
  {
    title: 'Email Us',
    value: 'contact@iptvuk.it.com',
    note: 'Available 24/7',
    icon: (
      <svg className="h-7 w-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    )
  },
  {
    title: 'Call Us',
    value: '+447453598130',
    note: 'Available 24/7',
    icon: (
      <svg className="h-7 w-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.79.59 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.25a2 2 0 0 1 2.11-.45c.84.27 1.73.47 2.63.59a2 2 0 0 1 1.72 1.99Z" />
      </svg>
    )
  },
  {
    title: 'Live Chat',
    value: 'Available on our website',
    note: 'Response time: Under 5 minutes',
    icon: (
      <svg className="h-7 w-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    )
  }
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Subscription Inquiry');
  const [message, setMessage] = useState('');

  const whatsappHref = useMemo(() => {
    const whatsappMessage = `Hello, my name is ${name || '[Your Name]'}\nEmail: ${email || '[Your Email]'}\nSubject: ${subject || '[Subject]'}\nMessage: ${message || '[Your message]'}`;
    return `https://wa.me/447453598130?text=${encodeURIComponent(whatsappMessage)}`;
  }, [name, email, subject, message]);

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-4xl font-extrabold text-slate-900">Get in Touch</h2>

          <div className="mt-9 space-y-8 text-slate-700">
            {contactDetails.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-2xl">{item.value}</p>
                  <p className="mt-1 text-2xl">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-4xl font-extrabold text-slate-900">Our Hours</h3>
            <ul className="mt-4 space-y-1 text-2xl text-slate-700">
              <li>Customer Support: 24/7</li>
              <li>Sales Department: Mon-Fri, 9am-6pm GMT</li>
              <li>Technical Support: 24/7</li>
            </ul>
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-4xl font-extrabold text-slate-900">Send Us a Message (via WhatsApp)</h2>
          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="text-lg font-semibold text-slate-800">Your Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="John Smith"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg text-slate-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-lg font-semibold text-slate-800">Email Address</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg text-slate-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-lg font-semibold text-slate-800">Subject</span>
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                type="text"
                placeholder="Subscription Inquiry"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg text-slate-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-lg font-semibold text-slate-800">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your message here..."
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg text-slate-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-lg bg-orange-500 px-4 py-3 text-center text-2xl font-semibold text-white transition hover:bg-orange-600"
            >
              Send Message via WhatsApp
            </a>
          </form>
        </article>
      </div>
    </section>
  );
}
