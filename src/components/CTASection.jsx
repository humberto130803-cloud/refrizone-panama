import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiPhone } from 'react-icons/hi'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-light" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-accent text-sm font-semibold">Estamos disponibles</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para mejorar tu{' '}
          <span className="text-accent">climatización</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/40 text-lg mb-10 max-w-2xl mx-auto"
        >
          Contáctanos hoy para una cotización sin compromiso. Nuestro equipo de expertos
          está listo para ayudarte a encontrar la solución perfecta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/50762911113?text=Hola%2C%20me%20gustar%C3%ADa%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="tel:+5073888360"
            className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <HiPhone className="text-2xl text-accent" />
            (+507) 388-8360
          </a>
        </motion.div>
      </div>
    </section>
  )
}
