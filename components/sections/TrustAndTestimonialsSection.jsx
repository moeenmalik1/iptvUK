'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';

const searches = ['Best IPTV', 'UK IPTV subscription', 'IPTV subscription Reddit UK', '4K IPTV subscription UK'];

const reviews = [
  { name: 'James Parker', rating: '★★★★★', text: 'Great quality and very stable streams. Setup took less than 10 minutes.' },
  { name: 'Sara Morgan', rating: '★★★★★', text: 'Excellent channel selection and customer support replies instantly.' },
  { name: 'Paul Clark', rating: '★★★★★', text: 'Works perfectly on my Firestick and Samsung TV. Highly recommended.' },
  { name: 'Laura Brown', rating: '★★★★★', text: 'Best value I found for UK sports and entertainment channels.' }
];

export default function TrustAndTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted IPTV Provider in the UK"
          subtitle="A Reliable Alternative to Cable & Satellite"
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Thousands of users across the UK trust UK IPTV as their main IPTV provider. You’ve found a service that
          delivers quality, not hype.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {searches.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
              • {item}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {reviews.map((review, idx) => (
                  <div key={`${review.name}-${idx}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 h-full">
                      <p className="text-lg font-bold text-orange-500">{review.rating}</p>
                      <h4 className="mt-3 text-sm font-bold text-slate-900">{review.name}</h4>
                      <p className="mt-3 text-sm text-slate-600">{review.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 p-2 text-white transition-colors hover:bg-orange-600 lg:-left-6 z-10"
              aria-label="Previous reviews"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 p-2 text-white transition-colors hover:bg-orange-600 lg:-right-6 z-10"
              aria-label="Next reviews"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
