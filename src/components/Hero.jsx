import { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (el) el.setAttribute('data-text', 'Harshad Dhonde')
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5d4]/20 bg-[#00f5d4]/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
          <span className="text-[#00f5d4] text-xs font-mono tracking-widest uppercase">Open for Opportunities</span>
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="glitch-text font-clash font-bold text-5xl sm:text-7xl md:text-8xl text-white mb-4 leading-none tracking-tight"
          data-text="Harshad Dhonde"
        >
          Harshad Dhonde
        </h1>

        {/* Role line */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <span className="font-cabinet text-lg md:text-xl text-white/50">Full-Stack Engineer</span>
          <span className="text-[#00f5d4]/40">×</span>
          <span className="font-cabinet text-lg md:text-xl text-white/50">AI & RAG Builder</span>
          <span className="text-[#00f5d4]/40">×</span>
          <span className="font-cabinet text-lg md:text-xl text-white/50">Spring Boot · React</span>
        </div>

        {/* Description */}
        <p className="font-cabinet text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Computer Engineering student from Pune building secure, production-ready web apps
          and privacy-first AI pipelines. I write code that ships.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-14 flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full bg-[#00f5d4] text-[#050810] font-cabinet font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] transition-all duration-300"
          >
            View Projects
          </button>
          <a
            href="mailto:dhondeharshad4@gmail.com"
            className="px-8 py-3.5 rounded-full border border-white/15 text-white/70 font-cabinet font-medium text-sm hover:border-[#00f5d4]/40 hover:text-[#00f5d4] transition-all duration-300"
          >
            Get In Touch
          </a>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#a855f7]/30 text-[#a855f7] font-cabinet font-medium text-sm hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50 transition-all duration-300"
          >
            <FileDown size={16} />
            Resume
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {[
            { icon: Github, href: 'https://github.com/harshaddhonde4', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/harshaddhonde4', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:dhondeharshad4@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto border-t border-white/5 pt-8">
          {[
            { val: '9.29', label: 'CGPA' },
            { val: '9+', label: 'Projects' },
            { val: '15+', label: 'Technologies' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-clash font-bold text-2xl gradient-text">{val}</div>
              <div className="font-cabinet text-xs text-white/30 uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}
