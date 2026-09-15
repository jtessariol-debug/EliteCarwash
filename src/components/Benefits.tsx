import { Check, CreditCard, Sparkles, Timer } from 'lucide-react'

const benefits = [
  { icon: Sparkles, title: 'Buen acabado', text: 'Cuidamos los detalles que hacen que tu vehículo se vea mejor.' },
  { icon: Timer, title: 'Servicio eficiente', text: 'Trabajamos con agilidad y el cuidado que tu vehículo merece.' },
  { icon: Check, title: 'Atención profesional', text: 'Un servicio claro, cuidadoso y pensado para ayudarte.' },
  { icon: CreditCard, title: 'Aceptamos tarjetas', text: 'Tienes opciones para pagar cómodamente tu servicio.' },
]

export function Benefits() {
  return (
    <section className="section bg-white text-ink">
      <div className="section-shell">
        <div className="reveal max-w-xl"><p className="section-kicker">Una atención completa</p><h2 className="section-title text-ink">¿Por qué elegir Elite?</h2></div>
        <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="reveal"><Icon className="text-teal-600" size={25} strokeWidth={2} /><h3 className="mt-5 text-lg font-extrabold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  )
}
