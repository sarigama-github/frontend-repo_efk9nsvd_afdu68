import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} ViralReels Studio. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#cta" className="hover:underline">Get a Quote</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
