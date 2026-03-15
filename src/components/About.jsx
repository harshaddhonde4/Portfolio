import { useEffect, useRef } from 'react'
import { MapPin, Code2, Brain, Zap } from 'lucide-react'

const traits = [
  { icon: Code2, label: 'Full-Stack', desc: 'Java · Spring Boot · React · Redux · MySQL' },
  { icon: Brain, label: 'AI Builder', desc: 'RAG · LangChain · Gemini · Groq · Qdrant' },
  { icon: Zap, label: 'Security', desc: 'JWT · Spring Security · RBAC · Stripe' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0')
      }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal-item')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 reveal-item opacity-0 translate-y-8 transition-all duration-700">
          <span className="font-mono text-xs text-[#00f5d4] tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5d4]/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            <h2 className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100 font-clash font-bold text-4xl md:text-5xl text-white leading-tight">
              Building things that<br />
              <span className="gradient-text">actually work.</span>
            </h2>

            <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-200 font-cabinet text-white/50 leading-relaxed text-base">
              I'm a Computer Engineering student at Dr. D.Y. Patil College of Engineering, Akurdi — 
              currently in my 3rd year with a CGPA of 9.29. Based in Pune, Maharashtra.
            </p>

            <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-300 font-cabinet text-white/50 leading-relaxed text-base">
              I build full-stack web applications using <span className="text-[#00f5d4]">Spring Boot</span> and <span className="text-[#00f5d4]">React</span>, 
              with a strong focus on security (JWT, RBAC) and clean architecture. I also build 
              privacy-first <span className="text-[#a855f7]">AI & RAG pipelines</span> that run entirely on-device — no data leakage, no API keys.
            </p>

            <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-[400ms] font-cabinet text-white/50 leading-relaxed text-base">
              My goal is to contribute to innovative solutions that make a meaningful impact. 
              Open for opportunities and meaningful collaborations.
            </p>

            <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-500 flex items-center gap-2 text-white/30 font-cabinet text-sm pt-2">
              <MapPin size={13} className="text-[#00f5d4]" />
              Pimpri-Chinchwad, Pune, Maharashtra 🇮🇳
            </div>
          </div>

          {/* Right — trait cards */}
          <div className="space-y-4">
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`reveal-item opacity-0 translate-y-8 transition-all duration-700`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="project-card rounded-2xl p-6 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#00f5d4]" />
                  </div>
                  <div>
                    <div className="font-clash font-semibold text-white text-lg">{label}</div>
                    <div className="font-cabinet text-white/40 text-sm mt-0.5">{desc}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Terminal card */}
            <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-700">
              <div className="rounded-2xl border border-white/06 bg-white/2 p-5 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-white/20 ml-2 text-[10px]">harshad@portfolio ~ </span>
                </div>
                <div className="text-white/30">$ <span className="text-[#00f5d4]">cat</span> about.yaml</div>
                <div className="mt-2 space-y-1 text-[11px]">
                  <div><span className="text-[#a855f7]">role</span><span className="text-white/30">:</span> <span className="text-white/60">Full-Stack Developer & AI Enthusiast</span></div>
                  <div><span className="text-[#a855f7]">status</span><span className="text-white/30">:</span> <span className="text-[#00f5d4]">open_for_opportunities</span></div>
                  <div><span className="text-[#a855f7]">location</span><span className="text-white/30">:</span> <span className="text-white/60">Pune, India</span></div>
                  <div><span className="text-[#a855f7]">fun_fact</span><span className="text-white/30">:</span> <span className="text-white/60">I build AI that never leaves your machine</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
