import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMapPin, HiPhone, HiEnvelope, HiClock } from 'react-icons/hi2'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

const locations = [
  {
    name: 'El Carmen — Vía Brasil',
    label: 'Sede Principal',
    address: 'Vía Brasil, Ave. Ramón Arias, frente a Power Club, El Carmen, Panamá',
    phones: ['(+507) 388-8360'],
    cells: ['6676-6507', '6725-8551'],
    whatsapp: '50762911113',
    whatsappDisplay: '(+507) 6291-1113',
    mapQuery: 'Refri+Zone+El+Carmen+Panama+Via+Brasil',
    featured: true,
  },
  {
    name: '24 de Diciembre',
    address: '24 de Diciembre, Ciudad de Panamá',
    phones: ['(+507) 375-1049'],
    cells: ['6291-1113', '6325-9964'],
    whatsapp: '50763259964',
    whatsappDisplay: '(+507) 6325-9964',
    mapQuery: 'Refri+Zone+24+de+Diciembre+Panama',
  },
  {
    name: 'Cincuentenario',
    address: 'Cincuentenario, Ciudad de Panamá',
    phones: ['(+507) 381-1876'],
    cells: ['6325-9964', '6372-9970'],
    whatsapp: '50763729970',
    whatsappDisplay: '(+507) 6372-9970',
    mapQuery: 'Refri+Zone+Cincuentenario+Panama',
  },
]

export default function LocationContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-accent text-sm font-semibold">Encuéntranos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            <span className="text-accent">3 sucursales</span> en Ciudad de Panamá
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            Visítanos en El Carmen, 24 de Diciembre o Cincuentenario. Envío a nivel nacional disponible.
          </motion.p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12 }}
              className={`bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden ${
                loc.featured ? 'border-accent/25' : 'border-white/10'
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="mb-5">
                  {loc.label && (
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1.5 block">{loc.label}</span>
                  )}
                  <h3 className="font-heading text-lg font-bold text-white">{loc.name}</h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5 mb-4">
                  <HiMapPin className="text-primary text-sm mt-0.5 flex-shrink-0" />
                  <p className="text-white/50 text-xs leading-relaxed">{loc.address}</p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5 mb-2">
                  <HiPhone className="text-primary text-sm mt-0.5 flex-shrink-0" />
                  <div>
                    {loc.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="text-white/50 text-xs hover:text-white transition-colors block">
                        Telf: {p}
                      </a>
                    ))}
                    <span className="text-white/30 text-xs">
                      Cel: {loc.cells.join(' / ')}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2.5 mb-5">
                  <FaWhatsapp className="text-green-400 text-sm flex-shrink-0" />
                  <a
                    href={`https://wa.me/${loc.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-xs hover:text-white transition-colors"
                  >
                    {loc.whatsappDisplay}
                  </a>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${loc.whatsapp}?text=Hola%2C%20me%20gustaría%20cotizar%20un%20repuesto`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-500/15 text-green-400 py-2 rounded-xl text-xs font-semibold hover:bg-green-500/25 transition-colors"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 text-white/50 py-2 rounded-xl text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <HiMapPin />
                    Mapa
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-6xl mx-auto bg-white/3 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Hours */}
          <div className="flex items-center gap-3">
            <HiClock className="text-accent text-lg" />
            <div className="text-sm">
              <span className="text-white/70 font-semibold">Lun-Vie</span>
              <span className="text-white/40"> 8:00am - 5:00pm</span>
              <span className="text-white/20 mx-2">|</span>
              <span className="text-white/70 font-semibold">Sáb</span>
              <span className="text-white/40"> 8:00am - 1:00pm</span>
            </div>
          </div>

          {/* Email + Socials */}
          <div className="flex items-center gap-4">
            <a href="mailto:ventas@refrizonepanama.com" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
              <HiEnvelope className="text-accent" />
              ventas@refrizonepanama.com
            </a>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/refrizonepanama/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/Refrizone.com.pa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
