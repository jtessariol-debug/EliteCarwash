import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { images } from '../data/images'
import { whatsappLink } from '../data/site'

const links = [
  ['Inicio', '#inicio'],
  ['Servicios', '#servicios'],
  ['Promoción', '#promociones'],
  ['Nosotros', '#nosotros'],
  ['Ubicación', '#ubicacion'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07191d]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Elite Car Wash, inicio">
          <img src={images.logo.src} alt="" width="46" height="46" className="h-[46px] w-[46px] rounded-full object-cover" />
          <span className="text-base font-extrabold text-white">Elite Car Wash</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-white/75 transition hover:text-white">{label}</a>)}</div>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hidden rounded-lg bg-aqua px-5 py-3 text-sm font-bold text-ink transition hover:bg-cyan lg:inline-flex">Reservar por WhatsApp</a>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/20 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && <div id="mobile-menu" className="absolute inset-x-0 top-20 border-b border-white/10 bg-[#07191d] px-5 pb-6 shadow-xl lg:hidden"><div className="flex flex-col">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-base font-semibold text-white">{label}</a>)}<a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-5 rounded-lg bg-aqua px-5 py-4 text-center text-sm font-bold text-ink">Reservar por WhatsApp</a></div></div>}
    </header>
  )
}
