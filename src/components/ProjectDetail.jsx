import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Heart } from 'lucide-react'
import projects from '../data/projectsData'
import Particles from './Particles'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050810] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-clash font-bold text-4xl text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#00f5d4] hover:underline font-cabinet">← Back to Home</Link>
        </div>
      </div>
    )
  }

  const Icon = project.icon

  return (
    <div className="min-h-screen bg-[#050810] relative">
      <Particles />

      {/* Top navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050810]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-[#00f5d4] transition-colors font-cabinet text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-sm font-cabinet">
              <Github size={14} />
              View Code
            </a>
            {project.githubBackend && (
              <a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-sm font-cabinet">
                <Github size={14} />
                Backend
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20">
        {/* Hero section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              <Icon size={28} style={{ color: project.color }} />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-2"
                style={{ color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}25` }}>
                {project.highlight}
              </span>
              <h1 className="font-clash font-bold text-4xl md:text-5xl text-white leading-tight">{project.title}</h1>
            </div>
          </div>
          <p className="font-cabinet text-white/40 text-lg mb-2">{project.subtitle}</p>
          <p className="font-cabinet text-white/55 text-base leading-relaxed max-w-3xl">{project.desc}</p>
        </div>

        {/* Overview & Details grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Long description */}
          <div className="lg:col-span-2">
            <div className="project-card rounded-2xl p-8">
              <h2 className="font-clash font-semibold text-xl text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full" style={{ background: project.color }} />
                Overview
              </h2>
              <div className="font-cabinet text-white/50 text-sm leading-[1.8] whitespace-pre-line">
                {project.longDesc}
              </div>
            </div>
          </div>

          {/* Tech Stack sidebar */}
          <div>
            <div className="project-card rounded-2xl p-6 mb-6">
              <h3 className="font-clash font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full" style={{ background: project.color }} />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-300 hover:scale-105"
                    style={{
                      color: `${project.color}cc`,
                      background: `${project.color}08`,
                      borderColor: `${project.color}20`
                    }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Links */}
            <div className="project-card rounded-2xl p-6">
              <h3 className="font-clash font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full" style={{ background: project.color }} />
                Links
              </h3>
              <div className="space-y-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-cabinet text-white/30">Source Code</div>
                    <div className="text-sm font-cabinet truncate max-w-[180px]">GitHub Repository</div>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-white/20" />
                </a>
                {project.githubBackend && (
                  <a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Github size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-cabinet text-white/30">Backend</div>
                      <div className="text-sm font-cabinet truncate max-w-[180px]">Backend Repository</div>
                    </div>
                    <ExternalLink size={12} className="ml-auto text-white/20" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key Features & Architecture */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Key Features */}
          <div className="project-card rounded-2xl p-8">
            <h2 className="font-clash font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full" style={{ background: project.color }} />
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3 font-cabinet text-sm text-white/50">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                    style={{ color: project.color, background: `${project.color}15` }}>
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="project-card rounded-2xl p-8">
            <h2 className="font-clash font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full" style={{ background: project.color }} />
              Architecture Flow
            </h2>
            <div className="space-y-0">
              {project.architecture.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4">
                  {/* Connector line */}
                  {i < project.architecture.length - 1 && (
                    <div className="absolute left-[11px] top-7 w-px h-[calc(100%)] opacity-20"
                      style={{ background: project.color }} />
                  )}
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 relative z-10"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                  </div>
                  {/* Text */}
                  <p className="font-cabinet text-sm text-white/50 pb-5 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Projects CTA */}
        <div className="text-center">
          <Link to="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white/60 font-cabinet font-medium text-sm hover:border-[#00f5d4]/40 hover:text-[#00f5d4] transition-all duration-300">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3">
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
  )
}
