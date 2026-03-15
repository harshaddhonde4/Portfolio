import { useRef, useEffect } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    color: '#00f5d4',
    skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'Spring Data JPA', 'RESTful APIs', 'JWT / RBAC', 'Maven', 'Socket Programming'],
  },
  {
    category: 'Frontend',
    color: '#a855f7',
    skills: ['React.js', 'Redux', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Thymeleaf', 'Java Swing'],
  },
  {
    category: 'AI & LLM',
    color: '#f97316',
    skills: ['LangChain', 'RAG Pipelines', 'Ollama (Llama 3.2)', 'ChromaDB', 'Google Gemini API', 'Streamlit', 'Python', 'Groq', 'Agno', 'Exa AI'],
  },
  {
    category: 'Databases',
    color: '#06b6d4',
    skills: ['MySQL', 'MongoDB', 'ChromaDB (Vector DB)', 'H2 (Embedded)', 'Qdrant (Vector DB)'],
  },
  {
    category: 'Tools & Platforms',
    color: '#eab308',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Apache Tomcat', 'AWS (Basic)', 'Linux'],
  },
  {
    category: 'Languages',
    color: '#ec4899',
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
]

export default function Skills() {
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

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 px-6">
      {/* bg accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6 reveal-item opacity-0 translate-y-8 transition-all duration-700">
          <span className="font-mono text-xs text-[#00f5d4] tracking-widest uppercase">02 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5d4]/30 to-transparent" />
        </div>

        <h2 className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100 font-clash font-bold text-4xl md:text-5xl text-white mb-4">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-200 font-cabinet text-white/40 mb-14 max-w-xl">
          Technologies I work with to build full-stack applications, AI pipelines, and everything in between.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <div
              key={category}
              className="reveal-item opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${200 + gi * 80}ms` }}
            >
              <div className="project-card rounded-2xl p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: color }} />
                  <span className="font-clash font-semibold text-white text-lg">{category}</span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="skill-pill text-xs font-cabinet font-medium px-3 py-1.5 rounded-full text-white/50 bg-white/3"
                      style={{ '--hover-color': color }}
                      onMouseEnter={e => {
                        e.target.style.borderColor = color
                        e.target.style.color = color
                        e.target.style.boxShadow = `0 0 16px ${color}30`
                      }}
                      onMouseLeave={e => {
                        e.target.style.borderColor = ''
                        e.target.style.color = ''
                        e.target.style.boxShadow = ''
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
