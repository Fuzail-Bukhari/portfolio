import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Download, Award, Sparkles, Briefcase } from 'lucide-react'
import Modal from './Modal'

const CERTS = [
  {
    id: 'ibm',
    icon: <Award size={20} />,
    title: 'IBM JavaScript Backend Developer',
    issuer: 'Professional Certificate · Coursera',
    image: '/certificates/ibm-cert.jpg',
    pdf: '/certificates/ibm-cert.pdf',
    verifyUrl: 'https://coursera.org/verify/professional-cert/OGS9JR2RIGDU',
  },
  {
    id: 'genai',
    icon: <Sparkles size={20} />,
    title: 'Generative AI for UI UX Design',
    issuer: 'Specialization · Coursera',
    image: '/certificates/genai-cert.jpg',
    pdf: '/certificates/genai-cert.pdf',
    verifyUrl: 'https://coursera.org/verify/specialization/495XAQY8Z6QG',
  },
  {
    id: 'internship',
    icon: <Briefcase size={20} />,
    title: 'Internship & Training — MERN Stack Development',
    issuer: 'Elite Tech Solutions (Pvt) Limited',
    image: '/certificates/internship-cert.jpg',
    pdf: '/certificates/internship-cert.pdf',
    verifyUrl: null,
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">
            Credentials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">Certifications</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTS.map((cert) => (
            <motion.button
              key={cert.id}
              variants={item}
              whileHover={{ y: -6 }}
              onClick={() => setActive(cert)}
              className="group text-left bg-panel border border-border rounded-2xl overflow-hidden hover:border-orange/60 transition-colors"
            >
              <div className="h-40 overflow-hidden bg-panel2 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="hidden absolute inset-0 items-center justify-center text-muted text-xs px-4 text-center">
                  Certificate image not found — check that public/certificates/ was
                  uploaded.
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-3 right-3 text-[11px] font-medium bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Click to view
                </span>
              </div>
              <div className="p-5 flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-panel2 flex items-center justify-center text-orange shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm leading-snug">{cert.title}</h4>
                  <p className="text-muted text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        {active && (
          <div className="p-4 sm:p-6">
            <img
              src={active.image}
              alt={active.title}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'block'
              }}
              className="w-full h-auto rounded-lg border border-border"
            />
            <p className="hidden text-center text-muted text-sm py-12 border border-border rounded-lg">
              Couldn't load this certificate image. Try the download button below, or
              check that public/certificates/{active.id}-cert.jpg was included in
              your deployment.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange hover:bg-orangeLight transition-colors font-semibold text-sm"
                >
                  Verify on Coursera <ExternalLink size={14} />
                </a>
              )}
              <a
                href={active.pdf}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-panel2 border border-border hover:border-orange transition-colors font-semibold text-sm"
              >
                Download PDF <Download size={14} />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
