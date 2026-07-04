import { motion } from 'framer-motion'
import { GraduationCap, Award, Sparkles, ExternalLink } from 'lucide-react'

const CERTS = [
  {
    icon: <Award size={18} />,
    title: 'IBM JavaScript Backend Developer',
    subtitle: 'Professional Certificate · Coursera',
    link: 'https://coursera.org/verify/professional-cert/OGS9JR2RIGDU',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Generative AI for UI UX Design',
    subtitle: 'Specialization · Coursera',
    link: 'https://coursera.org/verify/specialization/495XAQY8Z6QG',
  },
  {
    icon: <GraduationCap size={18} />,
    title: 'BS Software Engineering',
    subtitle: 'COMSATS University Islamabad, Abbottabad — Class of 2027',
    link: null,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">About</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">
            Background &amp; credentials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-muted text-[15px] leading-relaxed"
          >
            <p>
              I'm a 6th-semester BS Software Engineering student at COMSATS University Islamabad,
              Abbottabad Campus, expecting to graduate in 2027. Alongside coursework, I build
              production-style MERN projects, completed a remote MERN internship, and I'm
              currently exploring an FYP at the intersection of web development and machine
              learning.
            </p>
            <p>Based in Swabi, Pakistan — open to MERN stack developer roles, locally and abroad.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-panel border border-border rounded-2xl divide-y divide-border"
          >
            {CERTS.map((cert, i) => {
              const Wrapper = cert.link ? motion.a : motion.div
              return (
                <Wrapper
                  key={cert.title}
                  {...(cert.link
                    ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={cert.link ? { x: 4, backgroundColor: 'rgba(244,98,42,0.06)' } : {}}
                  className="flex gap-4 p-5 items-start group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-panel2 flex items-center justify-center text-orange shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium text-sm">{cert.title}</h5>
                      {cert.link && (
                        <ExternalLink
                          size={13}
                          className="text-muted group-hover:text-orange transition-colors shrink-0"
                        />
                      )}
                    </div>
                    <p className="text-muted text-sm">{cert.subtitle}</p>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
