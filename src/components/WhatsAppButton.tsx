import { whatsappLink } from '../data/site'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 shrink-0" fill="none">
      <path d="M16 3.5A12.25 12.25 0 0 0 5.46 21.98L4 28.5l6.68-1.4A12.25 12.25 0 1 0 16 3.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.12 9.5c.28-.62.58-.64.99-.65h.84c.27 0 .61.1.75.53l1.08 2.62c.12.32.08.62-.1.88l-.82 1.05a.65.65 0 0 0-.05.77c.83 1.43 2.02 2.58 3.49 3.36.25.14.57.1.77-.12l1-1.12c.24-.28.55-.36.86-.24l2.63 1.23c.35.16.52.45.47.82-.2 1.33-.83 2.43-1.93 3.17-.56.38-1.28.58-2.04.46-3.24-.5-6.08-2.31-8.06-4.9-1.32-1.73-2.18-3.72-2.05-5.12.08-.91.42-1.85 1.17-2.74Z" fill="currentColor" />
    </svg>
  )
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hola Elite Car Wash, vi su página web y quisiera información sobre sus servicios')}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
      <span className="hidden text-sm font-bold sm:block">WhatsApp</span>
    </a>
  )
}
