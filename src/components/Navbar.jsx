import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#050810]/90 backdrop-blur-xl border-b border-white/5' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="font-clash font-bold text-xl tracking-tight">
          <span className="gradient-text">HD</span>
          <span className="text-white/20 mx-1">/</span>
          <span className="text-white/60 text-sm font-cabinet font-normal">portfolio</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="nav-link text-sm font-cabinet font-medium text-white/60 hover:text-white transition-colors"
            >
              {l}
            </button>
          ))}
          <Link
            to="/resume"
            className="inline-flex items-center gap-1.5 text-sm font-cabinet font-medium text-white/60 hover:text-[#a855f7] transition-colors"
          >
            <FileDown size={14} />
            Resume
          </Link>
          <a
            href="mailto:dhondeharshad4@gmail.com"
            className="text-sm font-cabinet font-semibold px-4 py-2 rounded-full border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4]/10 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left text-white/70 font-cabinet text-lg hover:text-[#00f5d4] transition-colors">
              {l}
            </button>
          ))}
          <Link to="/resume" className="inline-flex items-center gap-2 text-left text-[#a855f7] font-cabinet text-lg hover:text-[#a855f7]/80 transition-colors">
            <FileDown size={18} />
            Resume
          </Link>
        </div>
      )}
    </nav>
  )
}
