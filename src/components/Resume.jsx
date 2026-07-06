import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Eye } from 'lucide-react'
import Modal from './Modal'

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">
            Resume
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">
            View or download my resume
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-panel border border-border rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-48 h-48 sm:w-72 sm:h-72 bg-orange/10 blur-[60px] sm:blur-[100px] rounded-full" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-panel2 border border-border flex items-center justify-center mx-auto mb-6 relative"
          >
            <FileText size={28} className="text-orange" />
          </motion.div>

          <p className="text-muted mb-8 relative max-w-md mx-auto">
            A one-page MERN-focused resume covering projects, certifications, and technical
            skills.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-panel2 border border-border hover:border-orange transition-colors font-semibold text-sm"
            >
              <Eye size={16} /> View Resume
            </button>
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 rounded-full bg-orange blur-md"
                animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.95, 1.15, 0.95] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              <a
                href="/resume.pdf"
                download
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange hover:bg-orangeLight transition-colors font-semibold text-sm"
              >
                <Download size={16} /> Download Resume
              </a>
            </span>
          </div>
        </motion.div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Resume">
        <div className="p-2 sm:p-4">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-[70vh] rounded-lg border border-border bg-white"
          />
          <p className="text-muted text-xs text-center mt-3">
            Preview not loading? Use the download button on the page instead.
          </p>
        </div>
      </Modal>
    </section>
  )
}
