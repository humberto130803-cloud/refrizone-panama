import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  'Carrier', 'Cowplandt', 'Danfoss', 'Sanyo', 'Clark', 'Nidec', 'Ingersoll Rand', 'Khaled',
]

// Duplicate for seamless marquee loop
const marqueeItems = [...brands, ...brands]

export default function Brands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="marcas" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-primary text-sm font-semibold">Marcas que Trabajamos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Distribuidores <span className="text-accent">autorizados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Trabajamos exclusivamente con marcas líderes mundiales en climatización y refrigeración, garantizando calidad, respaldo y repuestos originales.
          </motion.p>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-[marquee_30s_linear_infinite]">
            {marqueeItems.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <span className="font-heading font-bold text-white/70 text-lg whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Brand detail note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="text-center text-white/20 text-sm mt-8 max-w-lg mx-auto px-4"
      >
        Repuestos originales y equipos certificados. Consulte disponibilidad de marcas adicionales.
      </motion.p>
    </section>
  )
}
