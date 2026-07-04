import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Toolbox from './components/Toolbox'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Projects />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
