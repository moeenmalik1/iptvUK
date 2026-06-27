import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">UK IPTV</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            IPTV UK – Premium IPTV Subscription Service for UK Viewers
          </h1>
          <h2 className="mt-4 text-xl font-bold text-slate-800 sm:text-2xl">
            Watch Live TV, Sports, Movies &amp; Series with IPTV UK
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Welcome to IPTV UK, your destination for premium television streaming in the United Kingdom. Enjoy access
            to live TV channels, sports, movies, TV series, and on-demand entertainment through a reliable IPTV
            service designed for modern viewers.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Whether you want to watch your favourite UK channels, follow live sporting events, or explore a huge
            library of movies and series, IPTV UK provides a seamless streaming experience across multiple devices.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-700">
            <li>✔ Thousands of live TV channels</li>
            <li>✔ Sports, movies &amp; entertainment</li>
            <li>✔ Multi-device compatibility</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              Explore IPTV UK
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
            <Image src="/images/hero-image.png" alt="IPTV UK Hero" className="object-cover" width={700} height={900} />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-xl bg-white p-4 shadow-lg">
            <p className="text-sm font-semibold text-slate-700">Reliable Streaming Technology</p>
          </div>
        </div>
      </div>
    </section>
  );
}
