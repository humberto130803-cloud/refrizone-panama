import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowDown, HiShieldCheck, HiClock, HiLocationMarker } from 'react-icons/hi'
import { TbSnowflake } from 'react-icons/tb'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
      style={{
        background: '#253d8c',
      }}
    >
      {/* Decorative overlays */}
      <div className="absolute inset-0">
        {/* Radial center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        {/* Frost particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-accent/40 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-40 left-[20%] w-1 h-1 bg-primary/20 rounded-full animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-primary/15 rounded-full animate-[float_9s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-1/3 right-[10%] w-1.5 h-1.5 bg-accent/25 rounded-full animate-[float_5s_ease-in-out_infinite_3s]" />
        <div className="absolute top-[60%] left-[40%] w-1 h-1 bg-primary/25 rounded-full animate-[float_10s_ease-in-out_infinite_4s]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8"
        >
          <TbSnowflake className="text-primary animate-[spin_8s_linear_infinite]" />
          <span className="text-accent text-sm font-semibold">Desde 1996 — Más de 28 años enfriando Panamá</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
        >
          Aire acondicionado,{' '}
          <span className="relative inline-block">
            <span className="text-accent">refrigeración</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 rounded-full origin-left"
            />
          </span>
          <br />
          y cuartos fríos
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Venta, instalación, mantenimiento y repuestos originales para sistemas de climatización
          residencial, comercial, industrial y automotriz. Distribuidores de Carrier, Clark,
          Cowplandt y Danfoss — con 3 sucursales en Ciudad de Panamá.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/50765966053?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20equipo%20de%20aire%20acondicionado"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-gradient-to-r from-accent to-accent-dark text-navy px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            <span>Cotizar Ahora</span>
          </a>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
          >
            Nuestros Servicios
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {[
            { icon: HiShieldCheck, text: '100% Repuestos Originales' },
            { icon: HiClock, text: 'Lun-Vie 8am-5pm · Sáb 8am-1pm' },
            { icon: HiLocationMarker, text: '3 Sucursales en Panamá' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/30">
              <Icon className="text-primary text-lg" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Descubrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="text-xl" />
        </motion.div>
      </motion.a>
    </section>
  )
}
