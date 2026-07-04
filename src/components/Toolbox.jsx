import { motion } from 'framer-motion'

const CATEGORIES = [
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Socket.io'] },
  { title: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'CloudFront', 'GitHub Actions'] },
  { title: 'Tools', items: ['Git & GitHub', 'Postman', 'MongoDB Atlas', 'Figma'] },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const cardVariant = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const chipVariant = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }

export default function Toolbox() {
  return (
    <section id="toolbox" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">Stack</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">My toolbox</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="bg-panel border border-border rounded-2xl p-6"
            >
              <h4 className="font-semibold text-sm uppercase tracking-wide text-orange mb-4">
                {cat.title}
              </h4>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-2.5"
              >
                {cat.items.map((chip) => (
                  <motion.span
                    key={chip}
                    variants={chipVariant}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
