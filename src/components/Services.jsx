import { Scissors, Sparkles, TrendingUp, PenTool } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Viral Concept & Scripting',
    desc: 'Hook-first ideas tailored to your brand and audience. We script for retention and shareability.'
  },
  {
    icon: Scissors,
    title: 'Editing & Motion Design',
    desc: 'Snappy, platform-native edits with captions, effects, transitions, and sound design.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    desc: 'Trends, timing, and positioning to grow views and followers consistently.'
  },
  {
    icon: PenTool,
    title: 'UGC & Studio Production',
    desc: 'On-brand shooting options: UGC creators or in-studio setups to match your vibe.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What we do</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">End-to-end reels production designed to drive reach and revenue. We handle everything from concept to publish.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
