import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { images } from '../data/images'
import { site, whatsappLink } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#041215] py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4"><img src={images.logo.src} alt="" width="56" height="56" loading="lazy" className="h-14 w-14 rounded-full object-cover" /><div><p className="font-extrabold">Elite Car Wash</p><p className="mt-1 text-sm text-white/55">Somos el lugar especial para el cuidado de tu vehículo.</p></div></div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/70">
          <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-aqua"><Phone size={16} />{site.phone}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-aqua"><MessageCircle size={16} />WhatsApp</a>
          <span className="flex items-center gap-2 text-white/40" title="Enlace de Instagram pendiente"><Instagram size={16} />Instagram</span>
          <a href={site.maps} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-aqua"><MapPin size={16} />Cómo llegar</a>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-5 text-xs text-white/35">© 2026 Elite Car Wash.</div>
    </footer>
  )
}
