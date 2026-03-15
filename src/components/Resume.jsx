import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Loader2 } from 'lucide-react'

const resumeData = {
  name: 'Harshad Dhonde',
  title: 'Computer Engineering Student | Full-Stack Developer | AI Builder',
  phone: '+91-9975513869',
  email: 'dhondeharshad4@gmail.com',
  github: 'harshaddhonde4',
  linkedin: 'harshaddhonde4',
  location: 'Pimpri-Chinchwad, Pune',
  summary:
    'Motivated Computer Engineering student (CGPA: 9.29/10) with hands-on experience in full-stack development using Java, Spring Boot, and React. Proven ability to build secure web applications with JWT authentication, RESTful APIs, and AI/RAG integration. Built 9+ production-grade projects spanning e-commerce platforms, multi-agent AI pipelines, and systems programming. Eager to apply and enhance technical skills in a growth-oriented software development role.',
  education: [
    {
      institution: 'Dr. D.Y. Patil College of Engineering, Akurdi',
      degree: 'Bachelor of Engineering — Computer Engineering',
      score: 'CGPA: 9.29 (Till 5th Sem — 3rd Year)',
      status: 'Pursuing',
    },
    {
      institution: 'Cambridge High International School & Junior College, Shrirampur',
      degree: 'Higher Secondary Certificate (HSC) — Maharashtra State Board',
      score: 'Percentage: 83.83%',
      status: 'Distinction',
    },
    {
      institution: 'New English School, Shrirampur',
      degree: 'Secondary School Certificate (SSC) — Maharashtra State Board',
      score: 'Percentage: 92.40%',
      status: 'Distinction',
    },
  ],
  skills: [
    { category: 'Languages', items: 'C, C++, Java (DSA), JavaScript, Python' },
    { category: 'Frontend', items: 'HTML5, CSS3, React.js, Redux, Tailwind CSS, Thymeleaf' },
    { category: 'Backend', items: 'Spring Boot, Spring MVC, Spring Core, Spring Data JPA, Hibernate, RESTful APIs' },
    { category: 'Security & Auth', items: 'Spring Security, JWT (JSON Web Tokens), Role-Based Access Control (RBAC)' },
    { category: 'AI & LLM', items: 'LangChain, RAG, Ollama, Google Gemini API, Groq, Agno, Qdrant, Exa AI' },
    { category: 'Databases', items: 'MySQL, MongoDB, ChromaDB (Vector DB), Qdrant (Vector DB)' },
    { category: 'Tools & Platforms', items: 'Git, GitHub, Maven, IntelliJ IDEA, VS Code, Apache Tomcat, AWS (Basic), Vercel' },
  ],
  projects: [
    {
      name: 'Gemini Agentic RAG — Multi-Agent RAG Pipeline',
      tech: 'Python, Google Gemini, Qdrant, Exa AI, Agno Framework',
      github: 'https://github.com/harshaddhonde4/Gemini_Agentic_RAG',
      points: [
        'Built a production-ready multi-agent RAG pipeline with Query Rewriter → Retriever → RAG Agent orchestration',
        'Integrated PDF and URL ingestion with automatic chunking and Qdrant vector DB for semantic search',
        'Implemented Exa AI web search fallback for unanswered queries with auto-retry mechanism',
      ],
    },
    {
      name: 'LlamaLocal with RAG — Chat with Any Webpage',
      tech: 'Python, Streamlit, LangChain, Ollama (Llama 3.2), ChromaDB',
      github: 'https://github.com/harshaddhonde4/llamalocalwithRAG',
      points: [
        'Built complete RAG pipeline: webpage fetching, chunk splitting, local embedding generation, and ChromaDB storage',
        'Integrated Llama 3.2 via Ollama for fully on-device LLM inference — no API keys, zero data leaves the machine',
        'Implemented per-URL isolated ChromaDB collections and Streamlit UI with persistent chat history',
      ],
    },
    {
      name: 'StickyVibe — Full-Stack E-Commerce Platform',
      tech: 'React, Redux, Tailwind CSS, Spring Boot, Spring Security, JWT, MySQL, Stripe API',
      github: 'https://github.com/harshaddhonde4/StickyVibe-UI',
      points: [
        'Built responsive React SPA with Redux state management; implemented JWT-based authentication with Spring Security',
        'Integrated Stripe payment gateway for secure checkout; developed RESTful APIs with Spring Boot and MySQL',
      ],
    },
    {
      name: 'Groq Finance Agent — AI Financial Analyst',
      tech: 'Python, Groq Cloud, Llama 3.1 70B, YFinance, Agno Framework',
      github: 'https://github.com/harshaddhonde4/Groq_finance_agent',
      points: [
        'Built an AI-powered financial analysis agent using Groq ultra-fast inference with Llama 3.1 70B',
        'Integrated YFinance for real-time market data including stock prices, analyst recommendations, and company news',
      ],
    },
    {
      name: 'EazySchool — School Management Web Application',
      tech: 'Spring Boot, Spring MVC, Thymeleaf, Spring Security, MySQL, Spring Data JPA',
      github: 'https://github.com/harshaddhonde4/EazySchool-Web-Application',
      points: [
        'Implemented RBAC for students, teachers, and admins; designed timetable, results, and announcements modules',
        'Optimized database operations using JPA with MySQL; built responsive Thymeleaf UI with secure backend',
      ],
    },
    {
      name: 'Smart Crop Advisory System',
      tech: 'Spring Boot, Spring MVC, Thymeleaf, Java, Maven, Google Gemini API',
      github: 'https://github.com/harshaddhonde4/Smart-Crop-Advisory-System',
      points: [
        'Integrated Google Gemini API for real-time AI-driven crop recommendations based on region and soil data',
        'Built modules for multi-cropping strategies, irrigation planning, and cost-based advisory',
      ],
    },
  ],
  achievements: [
    'Secured 3rd Rank in College — Higher Secondary Certificate (HSC) Examinations',
    'Achieved 3rd Place — Interdepartmental Project-Based Learning (PBL) Competition for innovative project execution',
  ],
}

export default function Resume() {
  const resumeRef = useRef(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownload = () => {
    setDownloading(true)

    // Temporarily add a class to body for print-specific overrides
    document.body.classList.add('printing-resume')

    // Small delay to let the class apply, then print
    setTimeout(() => {
      window.print()
      document.body.classList.remove('printing-resume')
      setDownloading(false)
    }, 100)
  }

  return (
    <>
      {/* Screen-only top bar */}
      <div className="print-hide fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-[#00f5d4] transition-colors font-cabinet text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00f5d4] text-[#050810] font-cabinet font-bold text-sm hover:shadow-lg hover:shadow-[#00f5d4]/25 transition-all disabled:opacity-60"
        >
          {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {downloading ? 'Generating...' : 'Download PDF'}
        </button>
      </div>

      {/* Resume wrapper — white background for screen viewing */}
      <div className="min-h-screen bg-[#f0f2f5] pt-16 pb-10 print:bg-white print:pt-0 print:pb-0">
        {/* A4 paper container */}
        <div
          ref={resumeRef}
          id="resume-root"
          className="resume-sheet"
        >
          {/* ──── HEADER ──── */}
          <div className="resume-header">
            <h1>{resumeData.name}</h1>
            <p className="resume-subtitle">{resumeData.title}</p>
            <div className="resume-contact">
              <span>📞 {resumeData.phone}</span>
              <span className="resume-sep">|</span>
              <span>✉ {resumeData.email}</span>
              <span className="resume-sep">|</span>
              <span>🔗 <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer">github.com/{resumeData.github}</a></span>
              <span className="resume-sep">|</span>
              <span>🔗 <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer">linkedin.com/in/{resumeData.linkedin}</a></span>
              <span className="resume-sep">|</span>
              <span>📍 {resumeData.location}</span>
            </div>
          </div>

          {/* ──── SUMMARY ──── */}
          <div className="resume-section">
            <h2>SUMMARY</h2>
            <p>{resumeData.summary}</p>
          </div>

          {/* ──── EDUCATION ──── */}
          <div className="resume-section">
            <h2>EDUCATION</h2>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="resume-entry">
                <div className="resume-entry-header">
                  <strong>{edu.institution}</strong>
                  <span className="resume-date">{edu.status}</span>
                </div>
                <div className="resume-entry-sub">
                  <em>{edu.degree}</em>
                  <span>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ──── TECHNICAL SKILLS ──── */}
          <div className="resume-section">
            <h2>TECHNICAL SKILLS</h2>
            <div className="resume-skills">
              {resumeData.skills.map((s, i) => (
                <div key={i} className="resume-skill-row">
                  <span className="resume-skill-cat">{s.category}:</span>
                  <span>{s.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ──── PROJECTS ──── */}
          <div className="resume-section">
            <h2>PROJECTS</h2>
            {resumeData.projects.map((p, i) => (
              <div key={i} className="resume-project">
                <div className="resume-entry-header">
                  <strong>{p.name}</strong>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="resume-github">GitHub ↗</a>
                </div>
                <em className="resume-tech">{p.tech}</em>
                <ul>
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ──── ACHIEVEMENTS ──── */}
          <div className="resume-section">
            <h2>ACHIEVEMENTS</h2>
            <ul>
              {resumeData.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
