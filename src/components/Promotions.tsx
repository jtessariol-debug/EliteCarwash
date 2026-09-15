import { Clock3, MessageCircle } from 'lucide-react'
import { images } from '../data/images'
import { whatsappLink } from '../data/site'

export function Promotions() {
  return (
    <section id="promociones" className="bg-[#07191d] py-12 sm:py-20">
      <div className="section-shell">
        <div className="reveal grid overflow-hidden rounded-2xl bg-[#f6ef3c] shadow-lg lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[480px]"><img src={images.promotion.src} alt={images.promotion.alt} width={images.promotion.width} height={images.promotion.height} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="flex flex-col justify-center p-7 text-[#07191d] sm:p-12 lg:p-14">
            <p className="text-sm font-bold">Promoción de los domingos</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-5xl">Domingos de Cubetazo</h2>
            <p className="mt-7 text-xl font-bold">5 Presidente pequeñas</p>
            <p className="mt-1 text-5xl font-black tracking-tight">RD$650</p>
            <p className="mt-5 flex items-center gap-2 font-semibold"><Clock3 size={19} /> 2:00 p.m. – 5:00 p.m.</p>
            <p className="mt-5 max-w-md leading-7 text-[#23373a]">Ven a disfrutar del mejor ambiente mientras cuidamos tu vehículo.</p>
            <a href={whatsappLink('Hola Elite Car Wash, quisiera información sobre la promoción Domingos de Cubetazo.')} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#07191d] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#12343a]"><MessageCircle size={18} /> Preguntar por la promoción</a>
          </div>
        </div>
      </div>
    </section>
  )
}
