import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Github, ArrowRight } from 'lucide-react'
import projects from '../data/projectsData'

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0')
      }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-6">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6 reveal-item opacity-0 translate-y-8 transition-all duration-700">
          <span className="font-mono text-xs text-[#00f5d4] tracking-widest uppercase">03 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5d4]/30 to-transparent" />
        </div>

        <h2 className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100 font-clash font-bold text-4xl md:text-5xl text-white mb-4">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-200 font-cabinet text-white/40 mb-14 max-w-xl">
          From multi-agent AI pipelines to full-stack e-commerce platforms and systems programming — production-ready projects that solve real problems.
        </p>

        {/* Featured projects (large) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="reveal-item opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="project-card rounded-3xl p-7 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                      <Icon size={22} style={{ color: project.color }} />
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
                      <Github size={13} />
                    </a>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full self-start mb-3" style={{ color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}25` }}>
                    {project.highlight}
                  </span>

                  <h3 className="font-clash font-bold text-xl text-white mb-1">{project.title}</h3>
                  <p className="font-cabinet text-white/30 text-xs mb-3">{project.subtitle}</p>
                  <p className="font-cabinet text-white/50 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

                  {/* Details */}
                  <ul className="space-y-1.5 mb-5">
                    {project.details.slice(0, 4).map(d => (
                      <li key={d} className="flex items-start gap-2 text-xs font-cabinet text-white/40">
                        <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 5).map(s => (
                      <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md text-white/30 bg-white/4 border border-white/6">
                        {s}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[10px] font-mono px-2 py-1 rounded-md text-white/20">+{project.stack.length - 5}</span>
                    )}
                  </div>

                  {/* View Details link */}
                  <Link to={`/project/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-cabinet font-medium group pt-2 border-t border-white/5 mt-auto"
                    style={{ color: project.color }}>
                    View Details
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Other projects (smaller) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="reveal-item opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className="project-card rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
                      <Icon size={18} style={{ color: project.color }} />
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all">
                      <Github size={12} />
                    </a>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full self-start mb-2" style={{ color: project.color, background: `${project.color}10` }}>
                    {project.highlight}
                  </span>

                  <h3 className="font-clash font-bold text-lg text-white mb-1">{project.title}</h3>
                  <p className="font-cabinet text-white/30 text-xs mb-3">{project.subtitle}</p>
                  <p className="font-cabinet text-white/45 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 4).map(s => (
                      <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md text-white/30 bg-white/4 border border-white/6">
                        {s}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-1 rounded-md text-white/20">+{project.stack.length - 4}</span>
                    )}
                  </div>

                  {/* View Details link */}
                  <Link to={`/project/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-cabinet font-medium group pt-3 border-t border-white/5 mt-auto"
                    style={{ color: project.color }}>
                    View Details
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
