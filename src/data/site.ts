export const site = {
  name: 'Elite Car Wash',
  phone: '+1 (849) 205-0998',
  whatsapp: 'https://wa.me/18492050998',
  maps: 'https://maps.app.goo.gl/G6ZXWehNDMCzoBFFA',
  defaultMessage:
    'Hola Elite Car Wash, vi su página web y quisiera información sobre sus servicios.',
} as const

export const whatsappLink = (message: string = site.defaultMessage) =>
  `${site.whatsapp}?text=${encodeURIComponent(message)}`
