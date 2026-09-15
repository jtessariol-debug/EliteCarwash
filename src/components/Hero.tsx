import { Check, MapPin, MessageCircle, Phone } from 'lucide-react'
import { images } from '../data/images'
import { site, whatsappLink } from '../data/site'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[680px] items-end overflow-hidden pt-20 sm:min-h-[720px] lg:min-h-[760px] lg:items-center">
      <img src={images.hero.src} alt={images.hero.alt} width={images.hero.width} height={images.hero.height} className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07191d]/95 via-[#07191d]/80 to-[#07191d]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07191d]/80 via-transparent to-transparent lg:hidden" />

      <div className="section-shell relative w-full pb-12 pt-24 sm:pb-16 lg:py-24">
        <div className="max-w-[620px]">
          <p className="mb-5 text-sm font-semibold text-[#74e5e2]">Lavado y detailing profesional</p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-.035em] text-white sm:text-5xl lg:text-6xl">Tu vehículo merece el cuidado Elite.</h1>
          <p className="mt-5 max-w-lg text-lg leading-7 text-white/85">Lavado, detailing y cuidado profesional para tu vehículo.</p>
          <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="mt-5 inline-flex items-center gap-2 text-base font-bold text-white hover:text-aqua"><Phone size={19} /> {site.phone}</a>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary justify-center"><MessageCircle size={19} /> Reservar por WhatsApp</a>
            <a href={site.maps} target="_blank" rel="noreferrer" className="btn-secondary justify-center"><MapPin size={19} /> Cómo llegar</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            {['Atención profesional', 'Aceptamos tarjetas'].map((item) => <span key={item} className="flex items-center gap-2"><Check size={17} className="text-aqua" />{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
