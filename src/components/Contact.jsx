import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">
            Get in touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">
            Let's build something
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-panel border border-border rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange/10 blur-[60px] sm:blur-[100px] rounded-full" />

          <h3 className="font-display font-bold text-2xl mb-3 relative">
            Open to MERN developer roles &amp; collaborations
          </h3>
          <p className="text-muted mb-8 relative">Reach out any way that's convenient.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative">
            <a
              href="mailto:bukharifuzail58@gmail.com"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-panel2 border border-border hover:border-orange transition-colors group"
            >
              <Mail size={20} className="text-orange" />
              <span className="text-xs break-all">bukharifuzail58@gmail.com</span>
            </a>
            <a
              href="tel:+923492423177"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-panel2 border border-border hover:border-orange transition-colors group"
            >
              <Phone size={20} className="text-orange" />
              <span className="text-xs">0349 2423177</span>
            </a>
            <a
              href="https://wa.me/923492423177"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-panel2 border border-border hover:border-[#25D366] transition-colors group"
            >
              <WhatsAppIcon size={20} className="text-[#25D366]" />
              <span className="text-xs">Chat on WhatsApp</span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-panel2 border border-border">
              <MapPin size={20} className="text-orange" />
              <span className="text-xs">Swabi, Pakistan</span>
            </div>
          </div>

          <span className="relative inline-block">
            <motion.span
              className="absolute inset-0 rounded-full bg-orange blur-md"
              animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.95, 1.15, 0.95] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <a
              href="mailto:bukharifuzail58@gmail.com"
              className="relative inline-block px-8 py-3 rounded-full bg-orange hover:bg-orangeLight transition-colors font-semibold text-sm"
            >
              Say hello →
            </a>
          </span>

          <div className="flex justify-center gap-4 mt-8 relative">
            <a
              href="https://github.com/Fuzail-Bukhari"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-panel2 border border-border flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-fuzail-bukhari-a77305372"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-panel2 border border-border flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
