import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiShieldCheck, HiClock, HiUserGroup, HiStar, HiCurrencyDollar } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

const reasons = [
  {
    icon: HiShieldCheck,
    title: 'Garantía Total',
    desc: 'Respaldamos todos nuestros trabajos y equipos con garantía escrita.',
  },
  {
    icon: HiClock,
    title: 'Respuesta Rápida',
    desc: 'Atendemos emergencias y solicitudes con tiempos de respuesta mínimos.',
  },
  {
    icon: HiUserGroup,
    title: 'Equipo Certificado',
    desc: 'Técnicos con certificaciones actualizadas de las principales marcas.',
  },
  {
    icon: HiStar,
    title: 'Marcas Premium',
    desc: 'Distribuidores autorizados de Carrier, Danfoss e Ingersoll Rand.',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Precios Competitivos',
    desc: 'Las mejores tarifas del mercado sin comprometer la calidad.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Servicio Integral',
    desc: 'Desde la cotización hasta el mantenimiento post-venta.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-navy-light" ref={ref}>
      {/* Light accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with big number */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-heading text-8xl sm:text-9xl font-black text-accent/20">28+</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 -mt-8"
          >
            ¿Por qué <span className="text-accent">elegirnos</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Con más de 28 años en el mercado panameño, ofrecemos la combinación perfecta de experiencia, calidad y servicio.
          </motion.p>
        </div>

        {/* 6 Reason Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="text-xl text-accent" />
              </div>
              <h3 className="font-heading font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
