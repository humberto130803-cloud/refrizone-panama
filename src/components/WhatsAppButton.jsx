import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTooltip(true), 4000)
      const hideTimer = setTimeout(() => setShowTooltip(false), 9000)
      return () => { clearTimeout(timer); clearTimeout(hideTimer) }
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="bg-white text-gray-800 px-4 py-2.5 rounded-xl shadow-xl text-sm font-medium max-w-[200px]"
          >
            <span>¿Necesitas climatización? </span>
            <span className="text-green-600 font-bold">Escríbenos</span>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/50762911113?text=Hola%2C%20me%20gustar%C3%ADa%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
      >
        <FaWhatsapp className="text-white text-3xl" />
        {/* Ping ring */}
        <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-20" />
      </motion.a>
    </div>
  )
}
