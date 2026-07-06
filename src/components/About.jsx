import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Rocket } from 'lucide-react'

const FACTS = [
  { icon: <GraduationCap size={18} />, label: 'Degree', value: 'BS Software Engineering' },
  { icon: <Calendar size={18} />, label: 'Status', value: '6th Semester · Class of 2027' },
  { icon: <MapPin size={18} />, label: 'Based in', value: 'Swabi, Pakistan' },
  { icon: <Rocket size={18} />, label: 'Currently', value: 'Open to MERN roles' },
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
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">Background</h2>
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
              production-style MERN projects, completed a MERN internship at Elite Tech Solutions,
              and I'm currently exploring an FYP at the intersection of web development and
              machine learning.
            </p>
            <p>Based in Swabi, Pakistan — open to MERN stack developer roles, locally and abroad.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-panel border border-border rounded-xl p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-panel2 flex items-center justify-center text-orange mb-3">
                  {fact.icon}
                </div>
                <p className="text-[11px] text-muted uppercase tracking-wide mb-1">{fact.label}</p>
                <p className="font-medium text-sm">{fact.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
