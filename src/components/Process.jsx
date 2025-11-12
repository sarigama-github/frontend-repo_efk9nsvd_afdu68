import { Brain, PenSquare, ScissorsSquare, Send } from 'lucide-react'

const steps = [
  { icon: Brain, title: 'Discovery', desc: 'We learn your brand, offers, and audience. We analyze competitors and pull trend insights.' },
  { icon: PenSquare, title: 'Concept & Script', desc: 'We pitch hooks and angles. Once approved, we craft thumb-stopping scripts built for retention.' },
  { icon: ScissorsSquare, title: 'Produce & Edit', desc: 'UGC or studio capture, motion design, captions, and on-beat sound design. Iterations until it hits.' },
  { icon: Send, title: 'Publish & Optimize', desc: 'Platform-native delivery + posting cadence, A/B hooks, hashtags, and first-comment CTAs.' }
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How it works</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">A clear path from idea to viral-ready content.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6">
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
