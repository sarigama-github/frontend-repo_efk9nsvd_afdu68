const testimonials = [
  {
    quote: 'Our CPA dropped 32% in the first month. Their hooks and edits finally made our UGC perform like ads.',
    author: 'Maya Kapoor',
    role: 'Growth Lead, GlowBeauty'
  },
  {
    quote: 'We went from 4k to 120k followers in 90 days. They nailed our voice and kept us on trend.',
    author: 'Daniel Reyes',
    role: 'Founder, FitMode Apparel'
  },
  {
    quote: 'Every reel feels like a mini-launch. Our launches trend on TikTok now.',
    author: 'Aria Chen',
    role: 'CMO, ByteGadgets'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Loved by brands</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">What our clients say about partnering with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border bg-white/70 backdrop-blur p-6">
              <p className="text-neutral-800 text-lg">“{t.quote}”</p>
              <div className="mt-4 text-sm text-neutral-600">
                <p className="font-semibold text-neutral-800">{t.author}</p>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
