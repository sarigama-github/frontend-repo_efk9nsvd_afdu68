import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to turn views into revenue?</h3>
          <p className="mt-3 text-white/90">Tell us about your goals and we’ll send a tailored plan with pricing in 24 hours.</p>
          <form className="mt-8 grid gap-3 md:grid-cols-3 text-left">
            <input className="md:col-span-1 px-4 py-3 rounded-xl w-full text-neutral-900" placeholder="Name" required />
            <input type="email" className="md:col-span-1 px-4 py-3 rounded-xl w-full text-neutral-900" placeholder="Email" required />
            <input className="md:col-span-1 px-4 py-3 rounded-xl w-full text-neutral-900" placeholder="Brand / Company" />
            <input className="md:col-span-3 px-4 py-3 rounded-xl w-full text-neutral-900" placeholder="What do you want to achieve?" />
            <button type="submit" className="md:col-span-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90">
              Get My Plan <ArrowRight size={18} />
            </button>
          </form>
          <p className="mt-3 text-white/80 text-sm">No spam. No hard sell. Just value.</p>
        </div>
      </div>
    </section>
  )
}
