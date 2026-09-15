import { useEffect, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { galleryImages, type SiteImage } from '../data/images'

export function Gallery() {
  const [selected, setSelected] = useState<SiteImage | null>(null)

  useEffect(() => {
    if (!selected) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', close); document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="galeria" className="section bg-[#f3f5f5] text-ink">
      <div className="section-shell">
        <div className="reveal max-w-2xl"><p className="section-kicker">Nuestro trabajo</p><h2 className="section-title text-ink">Así cuidamos tu vehículo</h2><p className="section-copy mt-4">Lavado, interiores y terminaciones hechas con atención.</p></div>
        <div className="mt-10 grid auto-rows-[155px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <button key={item.src} onClick={() => setSelected(item)} className={`reveal group relative overflow-hidden rounded-xl bg-slate-200 text-left ${index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''} ${index === 3 ? 'row-span-2' : ''}`} aria-label={`Ampliar: ${item.alt}`}>
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
              <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink opacity-0 shadow-md transition group-hover:opacity-100"><Expand size={16} /></span>
            </button>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-500">Imágenes de referencia mientras incorporamos fotografías reales de Elite Car Wash.</p>
      </div>

      {selected && <div className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}><button onClick={() => setSelected(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-ink" aria-label="Cerrar imagen"><X /></button><img src={selected.src} alt={selected.alt} className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain" onClick={(event) => event.stopPropagation()} /></div>}
    </section>
  )
}
