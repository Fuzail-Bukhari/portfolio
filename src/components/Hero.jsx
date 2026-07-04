import { motion } from 'framer-motion'
import { Linkedin, Github, ArrowUpRight, Mail } from 'lucide-react'
import useCountUp from '../hooks/useCountUp'

function StatBadge({ target, label, className, delay }) {
  const [ref, value] = useCountUp(target)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute bg-panel2 border border-border rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-card animate-floaty scale-75 sm:scale-100 ${className}`}
    >
      <p className="font-display font-bold text-sm sm:text-lg leading-none">{value}+</p>
      <p className="text-[9px] sm:text-[11px] text-muted mt-1 whitespace-nowrap">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 px-6 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange/10 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full relative">
        {/* left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-5xl sm:text-6xl text-white mb-1"
          >
            Hello,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-orange mb-2"
          >
            I'm Fuzail
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold text-3xl sm:text-4xl mb-6"
          >
            A MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-lg max-w-md mb-8"
          >
            Let's build something real — every project is a chance to turn an idea into a fast,
            reliable product using the MERN stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 rounded-full bg-orange hover:bg-orangeLight transition-colors font-semibold text-sm"
            >
              Discover More
            </button>
            <span className="w-11 h-11 rounded-full border border-orange flex items-center justify-center text-orange">
              <ArrowUpRight size={18} />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-muted">Follow me</span>
            <a
              href="https://www.linkedin.com/in/syed-fuzail-bukhari-a77305372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-panel2 border border-border flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/Fuzail-Bukhari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-panel2 border border-border flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="mailto:bukharifuzail58@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-panel2 border border-border flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
            >
              <Mail size={15} />
            </a>
          </motion.div>
        </div>

        {/* right column: photo with rings + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]"
        >
          <div className="absolute inset-0 rounded-full border border-orange/20 animate-spinSlow" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-orange/30 animate-spinSlowReverse" />
          <div className="absolute inset-12 rounded-full bg-orange/15" />

          <img
            src="/profile.jpg"
            alt="Fuzail"
            className="absolute inset-[18%] w-[64%] h-[64%] object-cover rounded-full shadow-glow"
          />

          <StatBadge target={3} label="Projects Built" className="top-2 -right-2 sm:right-0" delay={0.6} />
          <StatBadge target={1} label="MERN Internship" className="left-0 top-1/2 -translate-y-1/2 -translate-x-2" delay={0.75} />
          <StatBadge target={2} label="Certifications" className="bottom-2 right-6" delay={0.9} />
        </motion.div>
      </div>
    </section>
  )
}
