import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TbAirConditioning, TbSnowflake, TbTools, TbSettingsCog, TbSpray, TbCar } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    icon: TbAirConditioning,
    title: 'Venta e Instalación de A/C',
    desc: 'Sistemas split, mini split, inverter, multi-split, cassette, fan coil, ductos, piso-techo y centrales. Equipos residenciales y comerciales de las mejores marcas como Carrier, Cowplandt y Sanyo.',
    featured: true,
    tags: ['Split', 'Inverter', 'Cassette', 'Ductos', 'Fan Coil'],
  },
  {
    icon: TbSnowflake,
    title: 'Cuartos Fríos',
    desc: 'Diseño, construcción e instalación de cuartos fríos para restaurantes, supermercados, farmacias e industria. Incluye unidades condensadoras, compresores y aislamiento.',
    tags: ['Comercial', 'Industrial'],
  },
  {
    icon: TbTools,
    title: 'Mantenimiento y Reparación',
    desc: 'Servicio técnico especializado con mantenimiento preventivo y correctivo para equipos de hasta 24,000 BTU y más. Técnicos certificados con respuesta rápida.',
    tags: ['Preventivo', 'Correctivo'],
  },
  {
    icon: TbSpray,
    title: 'Limpieza de A/C',
    desc: 'Servicio profesional de limpieza profunda de equipos de aire acondicionado. Mejora la eficiencia energética, la calidad del aire y extiende la vida útil del equipo.',
    tags: ['Residencial', 'Comercial'],
  },
  {
    icon: TbSettingsCog,
    title: 'Repuestos y Gas Refrigerante',
    desc: 'Amplio inventario de repuestos originales para todas las marcas: capacitores, termostatos, válvulas, controles, materiales de aislamiento y gas refrigerante.',
    tags: ['Todas las marcas'],
  },
  {
    icon: TbCar,
    title: 'A/C Automotriz',
    desc: 'Repuestos, accesorios y servicio técnico para sistemas de aire acondicionado automotriz. Diagnóstico, recarga de gas y reparación de compresores vehiculares.',
    tags: ['Diagnóstico', 'Recarga'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-primary text-sm font-semibold">Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Soluciones integrales en <span className="text-accent">climatización</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Desde equipos residenciales hasta refrigeración industrial y automotriz — cubrimos los 4 sectores del mercado.
          </motion.p>
        </div>

        {/* Bento Grid — 1 featured + 5 regular */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/15 transition-all duration-500 ${
                service.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                service.featured
                  ? 'bg-accent/15 text-accent group-hover:bg-accent/25'
                  : 'bg-primary/10 text-primary group-hover:bg-primary/20'
              }`}>
                <service.icon className="text-2xl" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className={`text-white/40 leading-relaxed ${service.featured ? 'mb-6 flex-1' : 'mb-4'}`}>{service.desc}</p>

              {/* Tags */}
              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 border border-white/10 text-white/50 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {service.featured && (
                <a
                  href="https://wa.me/50765966053?text=Hola%2C%20me%20interesa%20cotizar%20un%20aire%20acondicionado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent/15 text-accent px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent/25 transition-colors"
                >
                  <FaWhatsapp />
                  Solicitar Cotización
                </a>
              )}

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                service.featured ? 'bg-accent/50' : 'bg-primary/50'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
