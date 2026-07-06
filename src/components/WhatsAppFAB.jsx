import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/923492423177"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-card"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <WhatsAppIcon size={26} className="text-white relative" />

      <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-panel border border-border text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
    </motion.a>
  )
}
