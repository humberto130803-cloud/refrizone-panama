import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Productos', href: '#productos' },
  { name: 'Marcas', href: '#marcas' },
  { name: 'Contacto', href: '#contacto' },
]

const productLinks = [
  'Aires Split & Inverter',
  'Válvulas Restrictoras',
  'Bombas de Condensado',
  'Cables THW Cobre',
  'Filtros Deshidratadores',
  'Compresores',
  'Gas Refrigerante',
  'Capacitores & Contactores',
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-light border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/logo/logo-full.svg"
                alt="Refri-Zone Panamá"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Desde 1996, líderes en aire acondicionado, refrigeración comercial, cuartos fríos y
              climatización automotriz en Panamá. Distribuidores autorizados de Carrier, Danfoss e Ingersoll Rand.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Refrizone.com.pa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/refrizonepanama/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/50765966053"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/40 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Productos</h3>
            <ul className="space-y-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <span className="text-white/40 text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">3 Sucursales</h3>
            {/* El Carmen */}
            <div className="mb-4">
              <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1.5">El Carmen — Sede Principal</p>
              <p className="text-white/30 text-xs mb-1">Telf: 388-8360 · Cel: 6676-6507 / 6725-8551</p>
              <a href="https://wa.me/50765966053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                <FaWhatsapp className="text-green-400 text-xs" />
                <span className="text-xs">(+507) 6596-6053</span>
              </a>
            </div>
            {/* 24 de Diciembre */}
            <div className="mb-4">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1.5">24 de Diciembre</p>
              <p className="text-white/30 text-xs mb-1">Telf: 375-1049 · Cel: 6291-1113 / 6325-9964</p>
              <a href="https://wa.me/50763259964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                <FaWhatsapp className="text-green-400 text-xs" />
                <span className="text-xs">(+507) 6325-9964</span>
              </a>
            </div>
            {/* Cincuentenario */}
            <div className="mb-4">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1.5">Cincuentenario</p>
              <p className="text-white/30 text-xs mb-1">Telf: 381-1876 · Cel: 6325-9964 / 6372-9970</p>
              <a href="https://wa.me/50763729970" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                <FaWhatsapp className="text-green-400 text-xs" />
                <span className="text-xs">(+507) 6372-9970</span>
              </a>
            </div>
            {/* Email */}
            <a href="mailto:ventas@refrizonepanama.com" className="flex items-start gap-2 text-white/40 hover:text-white transition-colors mt-4">
              <HiEnvelope className="text-accent mt-0.5 flex-shrink-0 text-xs" />
              <span className="text-sm">ventas@refrizonepanama.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} Refri-Zone Panamá — Corporation Cold World Inc. S.A.
          </p>
          <p className="text-white/25 text-xs">
            Aire Acondicionado &middot; Refrigeración &middot; Cuartos Fríos &middot; A/C Automotriz
          </p>
        </div>
      </div>
    </footer>
  )
}
