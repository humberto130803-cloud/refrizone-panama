import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCalendar, HiUserGroup, HiCheckCircle, HiStar, HiOfficeBuilding, HiGlobe } from 'react-icons/hi'

const stats = [
  { icon: HiCalendar, value: '1996', label: 'Fundados', desc: 'En Ciudad Bolívar, Venezuela' },
  { icon: HiStar, value: '28+', label: 'Años', desc: 'De experiencia en el sector' },
  { icon: HiOfficeBuilding, value: '3', label: 'Sucursales', desc: 'El Carmen, 24 de Dic. y Cincuentenario' },
  { icon: HiGlobe, value: '4', label: 'Sectores', desc: 'Residencial, comercial, industrial y automotriz' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-accent text-sm font-semibold">Nuestra Historia</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              De Venezuela a Panamá:{' '}
              <span className="text-accent">28+ años</span> de frío
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-white/50 leading-relaxed"
            >
              <p>
                <strong className="text-white/70">Refri-Zone</strong> nació en 1996 en Ciudad Bolívar, Venezuela,
                fundada por la familia Naim con la visión de llevar soluciones de climatización de primer nivel
                al mercado latinoamericano. Lo que comenzó como un emprendimiento familiar se ha convertido en
                una de las empresas de referencia en aire acondicionado y refrigeración en Panamá.
              </p>
              <p>
                Operando bajo <strong className="text-white/70">Corporation Cold World Inc. S.A.</strong>, hoy contamos
                con tres sucursales en Ciudad de Panamá — El Carmen, 24 de Diciembre y Cincuentenario — atendiendo sectores
                residenciales, comerciales, industriales y automotrices. Somos distribuidores autorizados de
                Carrier, Danfoss, Ingersoll Rand y más, respaldados por un equipo técnico certificado que
                garantiza instalaciones profesionales y mantenimiento de primera.
              </p>
            </motion.div>

            {/* Google rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mt-6"
            >
              <div className="flex gap-0.5 text-accent">
                {[...Array(4)].map((_, i) => (
                  <HiStar key={i} className="text-sm" />
                ))}
                <HiStar className="text-sm opacity-50" />
              </div>
              <span className="text-white/50 text-sm">4.3/5 en Google Reviews</span>
            </motion.div>
          </div>

          {/* Right — Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/15 transition-all duration-300 group"
              >
                <stat.icon className="text-accent text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-white/70 mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
