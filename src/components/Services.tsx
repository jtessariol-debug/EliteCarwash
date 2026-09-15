import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { images, type SiteImage } from '../data/images'
import { formatPrice, services, type ServiceCategory } from '../data/services'
import { whatsappLink } from '../data/site'

const categories: { name: ServiceCategory; image: SiteImage; description: string }[] = [
  { name: 'Lavado', image: images.services.wash, description: 'Lavado y encerado para carros y jeeps.' },
  { name: 'Interior', image: images.services.interior, description: 'Limpieza profunda para sentirlo como nuevo.' },
  { name: 'Detailing', image: images.services.detailing, description: 'Pulido y revitalización de pintura.' },
  { name: 'Tratamientos', image: images.services.treatments, description: 'Motor, ozono y cuidados especiales.' },
]

export function Services() {
  const [filter, setFilter] = useState<'Todos' | ServiceCategory>('Todos')
  const visible = filter === 'Todos' ? services : services.filter((service) => service.category === filter)

  return (
    <section id="servicios" className="section bg-white text-ink">
      <div className="section-shell">
        <div className="reveal max-w-2xl">
          <p className="section-kicker">Lo que hacemos</p>
          <h2 className="section-title text-ink">Servicios para tu vehículo</h2>
          <p className="section-copy mt-4">Elige una categoría y encuentra el servicio que necesitas. Si un precio no está publicado, te cotizamos por WhatsApp.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categories.map((category) => (
            <button key={category.name} onClick={() => setFilter(category.name)} className={`reveal group overflow-hidden rounded-2xl border bg-white text-left transition ${filter === category.name ? 'border-aqua ring-2 ring-aqua/20' : 'border-slate-200 hover:border-slate-300'}`}>
              <div className="h-32 overflow-hidden sm:h-44"><img src={category.image.src} alt={category.image.alt} width={category.image.width} height={category.image.height} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
              <div className="p-4 sm:p-5"><h3 className="text-base font-extrabold text-ink sm:text-lg">{category.name}</h3><p className="mt-1 hidden text-sm leading-5 text-slate-500 sm:block">{category.description}</p></div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div><h3 className="text-xl font-extrabold text-ink">{filter === 'Todos' ? 'Todos los servicios' : filter}</h3><p className="mt-1 text-sm text-slate-500">{visible.length} opciones disponibles</p></div>
          {filter !== 'Todos' && <button onClick={() => setFilter('Todos')} className="shrink-0 text-sm font-bold text-teal-700 hover:text-ink">Ver todos</button>}
        </div>

        <div className="divide-y divide-slate-200">
          {visible.map((service) => {
            const label = service.vehicle ? `${service.name} — ${service.vehicle}` : service.name
            return (
              <article key={service.id} className="reveal grid gap-4 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8">
                <div><h4 className="font-bold text-ink">{service.name}</h4><p className="mt-1 text-sm text-slate-500">{service.vehicle ?? service.category}</p></div>
                <p className="font-extrabold text-ink sm:min-w-32 sm:text-right">{service.price ? formatPrice(service.price) : 'Consultar precio'}</p>
                <a href={whatsappLink(`Hola Elite Car Wash, quisiera información sobre el servicio ${label}.`)} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-ink transition hover:border-aqua hover:bg-aqua/10" aria-label={`Consultar ${label}`}><MessageCircle size={17} /> Consultar</a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
