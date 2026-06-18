import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">UK IPTV</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            UK IPTV – The Best IPTV Subscription in the UK
          </h1>
          <h2 className="mt-4 text-xl font-bold text-slate-800 sm:text-2xl">
            Stream UK &amp; International Channels in HD, Full HD &amp; 4K
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Welcome to UK IPTV, your trusted source for a reliable IPTV subscription in the UK. Enjoy thousands of
            live TV channels, movies, sports, and on-demand content with smooth streaming, fast activation, and full
            UK channel coverage.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Whether you’re looking for the best IPTV subscription, a stable UK IPTV subscription, or a premium 4K IPTV
            subscription UK, you’re in the right place.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-700">
            <li>✔ Instant Activation</li>
            <li>✔ UK, USA &amp; Worldwide Channels</li>
            <li>✔ Compatible with all major devices</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              Buy IPTV Subscription Today
            </button>
          </div>
        </div>
        <div className="relative">
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="UK IPTV Hero"
                className="object-cover"
                width={700} 
                height={900}
              />
            </div>
         
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-white p-4 shadow-lg">
            <p className="text-sm font-semibold text-slate-700">10,000+ Live Channels</p>
          </div>
        </div>
      </div>
    </section>
  );
}
