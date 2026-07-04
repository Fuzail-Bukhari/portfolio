import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'BidVerse',
    tag: 'Real-time Auctions',
    description:
      'A real-time auction platform where bids update instantly across every connected client, built with Socket.io.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://bidverse-frontend.vercel.app/',
    gradient: 'from-orange/25 to-panel2',
  },
  {
    title: 'MediCore',
    tag: 'Healthcare Platform',
    description:
      'A healthcare management portal with dedicated Doctor, Patient, and Admin experiences — appointments, records, and role-based access.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'MongoDB'],
    link: 'https://medi-script-two.vercel.app/',
    gradient: 'from-panel2 to-orange/20',
  },
  {
    title: "Bukhari's Store",
    tag: 'E-Commerce',
    description:
      'A full-featured e-commerce storefront with product browsing, cart management, and a streamlined checkout flow.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://bukhari-s-store-huz5.vercel.app/',
    gradient: 'from-orange/20 to-panel2',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wide">
            Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2">
            Projects I've shipped
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group bg-panel border border-border rounded-2xl overflow-hidden hover:border-orange/60 transition-colors flex flex-col"
            >
              <div
                className={`h-40 flex items-center justify-center bg-gradient-to-br ${p.gradient} relative`}
              >
                <span className="font-display font-bold text-2xl">{p.title}</span>
                <ArrowUpRight
                  size={20}
                  className="absolute top-4 right-4 text-white/70 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-orange text-xs font-semibold uppercase tracking-wide mb-2">
                  {p.tag}
                </span>
                <p className="text-muted text-sm mb-5 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-panel2 border border-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
