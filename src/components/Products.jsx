import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineCreditCard } from 'react-icons/hi'
import { TbAirConditioning, TbSnowflake, TbTemperatureMinus, TbWind, TbGasStation, TbCar, TbPlug } from 'react-icons/tb'
import { MdOutlinePrecisionManufacturing, MdOutlineKitchen } from 'react-icons/md'
import { HiOutlineCog, HiOutlineViewGrid, HiOutlineChip, HiOutlineCube, HiOutlineLightningBolt, HiOutlineFilter } from 'react-icons/hi'

const featuredParts = [
  {
    name: 'Válvula Restrictora',
    brand: 'Cowplandt',
    specs: 'P/A.A. 24,000 y 36,000 BTUs',
    detail: 'Medidas 052 y 066 disponibles',
  },
  {
    name: 'Bomba de Condensado',
    brand: 'Cowplandt',
    specs: 'Modelo MD-TPS-15T',
    detail: '110V / 220V — Para instaladores',
  },
  {
    name: 'Cable THW Cobre',
    brand: 'Cowplandt',
    specs: 'Rollos de 100m',
    detail: 'Calibres 8, 10, 12, 14 y 16 — Rojo, blanco, negro',
  },
  {
    name: 'Filtros Deshidratadores',
    brand: 'Originales',
    specs: 'Filtro Peq-Gig con acceso',
    detail: 'Múltiples tamaños (15gr, 20gr, 30gr)',
  },
  {
    name: 'Aires Acondicionados Clark',
    brand: 'Clark',
    specs: 'Split con gas R-410A',
    detail: 'Desde 9,000 hasta 60,000 BTUs — Inverter disponibles',
  },
  {
    name: 'Compresores',
    brand: 'Múltiples marcas',
    specs: 'Para A/C y refrigeración',
    detail: 'Rotativos, scroll y reciprocantes',
  },
]

const categories = [
  { icon: TbAirConditioning, name: 'Aires Split & Inverter' },
  { icon: TbWind, name: 'Multi-Split & Cassette' },
  { icon: TbSnowflake, name: 'Cuartos Fríos' },
  { icon: MdOutlinePrecisionManufacturing, name: 'Compresores' },
  { icon: TbTemperatureMinus, name: 'Unidades Condensadoras' },
  { icon: MdOutlineKitchen, name: 'Refrigeración Comercial' },
  { icon: TbGasStation, name: 'Gas Refrigerante' },
  { icon: HiOutlineFilter, name: 'Filtros & Deshidratadores' },
  { icon: HiOutlineLightningBolt, name: 'Capacitores & Contactores' },
  { icon: HiOutlineChip, name: 'Controles & Termostatos' },
  { icon: TbPlug, name: 'Cables & Materiales Eléctricos' },
  { icon: HiOutlineCog, name: 'Válvulas & Accesorios' },
  { icon: HiOutlineCube, name: 'Bombas de Condensado' },
  { icon: HiOutlineViewGrid, name: 'Tuberías & Aislamiento' },
  { icon: TbCar, name: 'A/C Automotriz' },
  { icon: HiOutlineCog, name: 'Herramientas & Manómetros' },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const visibleCategories = showAll ? categories : categories.slice(0, 8)

  return (
    <section id="productos" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-accent text-sm font-semibold">Repuestos y Aires Acondicionados</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Equipos y <span className="text-accent">repuestos originales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            100% repuestos originales de marcas como Cowplandt, Clark, Carrier y Danfoss.
            Disponibles en nuestras 3 sucursales con envío a nivel nacional.
          </motion.p>
        </div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-6 mb-14"
        >
          {[
            { icon: HiOutlineShieldCheck, text: '100% Originales' },
            { icon: HiOutlineTruck, text: 'Envío Nacional' },
            { icon: HiOutlineCreditCard, text: '0% Interés — BAC 3, 6, 12 meses' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Icon className="text-accent" />
              <span className="text-white/60 text-sm font-medium">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Featured Parts — Catalog Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full" />
            Productos Destacados
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredParts.map((part, i) => (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading font-bold text-white">{part.name}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-md flex-shrink-0 ml-2">
                    {part.brand}
                  </span>
                </div>
                <p className="text-white/60 text-sm font-medium mb-1">{part.specs}</p>
                <p className="text-white/35 text-xs">{part.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full" />
            Todas las Categorías
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {visibleCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.04 }}
                className="group flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl px-4 py-3.5 hover:bg-white/6 hover:border-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <cat.icon className="text-primary group-hover:text-accent transition-colors text-lg" />
                </div>
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 mx-auto block text-accent text-sm font-semibold hover:text-accent-light transition-colors"
            >
              Ver las {categories.length - 8} categorías restantes +
            </button>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4">
            Aceptamos Visa y Mastercard — Financiamiento 0% con BAC Credomatic
          </p>
          <a
            href="https://wa.me/50765966053?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20repuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-navy px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Cotizar Repuesto por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
