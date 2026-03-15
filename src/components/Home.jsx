import Cursor from './Cursor'
import Particles from './Particles'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050810]">
      <Cursor />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
