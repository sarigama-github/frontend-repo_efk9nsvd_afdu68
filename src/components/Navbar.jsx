import { useState } from 'react'
import { Menu, X, Film, Rocket, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-white/20 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white shadow">
                <Film size={20} />
              </div>
              <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                ViralReels Studio
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700/90 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 px-4 py-2 rounded-xl shadow">
                <Rocket size={16} /> Get a Quote
              </a>
            </nav>

            <button className="md:hidden p-2 rounded-lg bg-white/70 dark:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 rounded-xl">
                <Phone size={16} /> Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
