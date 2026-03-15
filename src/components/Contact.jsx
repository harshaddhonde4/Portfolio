import { useRef, useEffect } from 'react'
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0')
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const links = [
    { icon: Mail, label: 'Email', value: 'dhondeharshad4@gmail.com', href: 'mailto:dhondeharshad4@gmail.com', color: '#00f5d4' },
    { icon: Github, label: 'GitHub', value: 'github.com/harshaddhonde4', href: 'https://github.com/harshaddhonde4', color: '#a855f7' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/harshaddhonde4', href: 'https://linkedin.com/in/harshaddhonde4', color: '#06b6d4' },
    { icon: Phone, label: 'Phone', value: '+91 9975513869', href: 'tel:+919975513869', color: '#f97316' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#00f5d4]/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6 reveal-item opacity-0 translate-y-8 transition-all duration-700">
          <span className="font-mono text-xs text-[#00f5d4] tracking-widest uppercase">04 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5d4]/30 to-transparent" />
        </div>

        <div className="text-center mb-16">
          <h2 className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100 font-clash font-bold text-4xl md:text-6xl text-white mb-4">
            Let's Build<br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-200 font-cabinet text-white/40 max-w-md mx-auto">
            Open to opportunities, collaborations, and interesting conversations. 
            Don't hesitate to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {links.map(({ icon: Icon, label, value, href, color }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-item opacity-0 translate-y-8 transition-all duration-700 project-card rounded-2xl p-5 flex items-center gap-4 group"
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-cabinet text-xs text-white/30 uppercase tracking-widest">{label}</div>
                <div className="font-cabinet text-sm text-white/70 truncate group-hover:text-white transition-colors">{value}</div>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-700 flex items-center justify-center gap-2 text-white/20 font-cabinet text-sm mb-16">
          <MapPin size={12} className="text-[#00f5d4]" />
          Pimpri-Chinchwad, Pune, Maharashtra, India
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-8 pb-4">
          <div className="flex flex-col items-center gap-3">
            <div className="font-clash font-bold text-lg">
              <span className="gradient-text">HD</span>
              <span className="text-white/20 mx-1">/</span>
              <span className="text-white/30 text-sm font-cabinet font-normal">Harshad Dhonde</span>
            </div>
            <p className="font-cabinet text-sm text-white/30 flex items-center gap-1.5">
              Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Harshad
            </p>
            <p className="font-cabinet text-xs text-white/15">
              © 2026 Harshad Dhonde
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}
