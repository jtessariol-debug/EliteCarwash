import { Check, MessageCircle } from 'lucide-react'
import { images } from '../data/images'
import { whatsappLink } from '../data/site'

export function Experience() {
  return (
    <section id="nosotros" className="section bg-[#eef3f3] text-ink">
      <div className="section-shell grid gap-9 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="reveal overflow-hidden rounded-2xl"><img src={images.experience.src} alt={images.experience.alt} width={images.experience.width} height={images.experience.height} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" /></div>
        <div className="reveal">
          <p className="section-kicker">La experiencia Elite</p>
          <h2 className="section-title text-ink">Tu vehículo en buenas manos</h2>
          <p className="section-copy mt-5 text-lg">Mientras cuidamos tu vehículo, tú puedes relajarte y disfrutar del ambiente.</p>
          <ul className="mt-7 space-y-4">
            {['Lavado profesional', 'Buen ambiente', 'Atención rápida'].map((item) => <li key={item} className="flex items-center gap-3 font-semibold"><span className="grid h-7 w-7 place-items-center rounded-full bg-aqua/20 text-teal-700"><Check size={16} /></span>{item}</li>)}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-dark mt-8"><MessageCircle size={18} /> Reservar por WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
