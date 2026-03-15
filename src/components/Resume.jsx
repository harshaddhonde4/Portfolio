import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react'

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
        'Built a complete RAG pipeline: webpage fetching, chunk splitting (500-char, 50 overlap), local embedding generation, and ChromaDB storage',
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
        'Designed architecture for sticker catalog, shopping cart, and order processing system',
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
        'Integrated Google Gemini API for real-time, AI-driven crop recommendations based on region and soil data',
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownload = () => {
    window.print()
  }

  return (
    <>
      {/* Screen-only nav bar */}
      <nav className="print-hide fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#050810]/90 backdrop-blur border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-[#00f5d4] transition-colors font-cabinet text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00f5d4] text-[#050810] font-cabinet font-semibold text-sm hover:bg-[#00f5d4]/90 transition-all"
        >
          <Download size={16} /> Download PDF
        </button>
      </nav>

      {/* Resume content */}
      <div className="resume-page min-h-screen bg-white text-gray-900 pt-20 pb-16 print:pt-0 print:pb-0">
        <div className="max-w-[850px] mx-auto px-8 print:px-0 print:max-w-none">

          {/* Header */}
          <header className="mb-5 border-b-2 border-gray-800 pb-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 print:text-2xl">{resumeData.name}</h1>
            <p className="text-sm text-gray-600 mt-0.5 font-medium">{resumeData.title}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-xs text-gray-600">
              <a href={`tel:${resumeData.phone}`} className="flex items-center gap-1 hover:text-blue-700 print:text-gray-700">
                <Phone size={11} /> {resumeData.phone}
              </a>
              <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1 hover:text-blue-700 print:text-gray-700">
                <Mail size={11} /> {resumeData.email}
              </a>
              <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-700 print:text-gray-700">
                <Github size={11} /> {resumeData.github}
              </a>
              <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-700 print:text-gray-700">
                <Linkedin size={11} /> {resumeData.linkedin}
              </a>
              <span className="flex items-center gap-1">
                <MapPin size={11} /> {resumeData.location}
              </span>
            </div>
          </header>

          {/* Summary */}
          <Section title="Summary">
            <p className="text-[13px] leading-relaxed text-gray-700">{resumeData.summary}</p>
          </Section>

          {/* Education */}
          <Section title="Education">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="mb-2.5 last:mb-0">
                <div className="flex justify-between items-baseline flex-wrap gap-x-2">
                  <h3 className="text-sm font-semibold text-gray-900">{edu.institution}</h3>
                  <span className="text-xs text-gray-500 font-medium">{edu.status}</span>
                </div>
                <p className="text-xs text-gray-600 italic">{edu.degree}</p>
                <p className="text-xs text-gray-500">{edu.score}</p>
              </div>
            ))}
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <div className="space-y-1">
              {resumeData.skills.map((s, i) => (
                <div key={i} className="text-[13px] leading-snug">
                  <span className="font-semibold text-gray-900">{s.category}: </span>
                  <span className="text-gray-700">{s.items}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Projects">
            {resumeData.projects.map((p, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="flex justify-between items-baseline flex-wrap gap-x-2">
                  <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 hover:underline print:text-gray-600 flex-shrink-0">
                    GitHub ↗
                  </a>
                </div>
                <p className="text-xs italic text-gray-500 mb-1">{p.tech}</p>
                <ul className="list-disc list-outside ml-4 space-y-0.5">
                  {p.points.map((pt, j) => (
                    <li key={j} className="text-[12.5px] leading-snug text-gray-700">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* Achievements */}
          <Section title="Achievements">
            <ul className="list-disc list-outside ml-4 space-y-1">
              {resumeData.achievements.map((a, i) => (
                <li key={i} className="text-[13px] text-gray-700">{a}</li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </>
  )
}

function Section({ title, children }) {
  return (
    <section className="mb-4">
      <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-0.5 mb-2">
        {title}
      </h2>
      {children}
    </section>
  )
}
