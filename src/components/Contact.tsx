import { CreditCard, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

export function Contact() {
  return (
    <section id="ubicacion" className="section bg-[#07191d] text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center lg:gap-20">
        <div className="reveal">
          <p className="section-kicker text-aqua">Visítanos</p>
          <h2 className="section-title">Te esperamos en Elite Car Wash.</h2>
          <p className="mt-5 max-w-lg leading-7 text-white/70">Abre nuestra ubicación en Google Maps para llegar directamente. Si tienes una pregunta, escríbenos por WhatsApp.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary justify-center"><MessageCircle size={18} /> WhatsApp</a>
            <a href={site.maps} target="_blank" rel="noreferrer" className="btn-secondary justify-center"><MapPin size={18} /> Cómo llegar</a>
          </div>
        </div>
        <div className="reveal border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 border-b border-white/15 pb-6"><Phone className="text-aqua" /><span><small className="block text-sm text-white/55">Teléfono</small><strong className="mt-1 block text-xl">{site.phone}</strong></span></a>
          <div className="flex items-center gap-4 pt-6"><CreditCard className="text-aqua" /><span><small className="block text-sm text-white/55">Facilidad de pago</small><strong className="mt-1 block text-lg">Aceptamos tarjetas</strong></span></div>
        </div>
      </div>
    </section>
  )
}
