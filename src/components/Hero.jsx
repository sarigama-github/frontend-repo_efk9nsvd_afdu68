import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 drop-shadow-sm">
              Go Viral with Scroll-stopping Reels
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700/90 max-w-xl">
              We craft high-converting, trend-driven short videos that boost reach, engagement, and sales across Instagram, TikTok, YouTube Shorts, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
              <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 shadow hover:opacity-95 transition">
                Get Pricing
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white/80 backdrop-blur border border-white/40 text-neutral-900 hover:bg-white transition">
                See Our Work
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-neutral-700/90">
              {[
                'Concept & Scripting',
                'Editing & Motion',
                'Hooks that Convert',
                'Platform-native Captions',
              ].map((item) => (
                <div key={item} className="backdrop-blur bg-white/70 border border-white/30 rounded-xl px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90"></div>
    </section>
  )
}
