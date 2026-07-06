import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import WhatsAppFAB from './components/WhatsAppFAB'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Toolbox from './components/Toolbox'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollProgress />
      <WhatsAppFAB />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Resume />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
