export type ServiceCategory = 'Lavado' | 'Interior' | 'Detailing' | 'Tratamientos'

export type Service = {
  id: number
  name: string
  vehicle?: 'Carro' | 'Jeep'
  price?: number
  category: ServiceCategory
}

export const services: Service[] = [
  { id: 1, name: 'Lavado + encerado + pulidora', vehicle: 'Jeep', category: 'Detailing' },
  { id: 2, name: 'Lavado + encerado + pulidora', vehicle: 'Carro', category: 'Detailing' },
  { id: 3, name: 'Lavado básico', vehicle: 'Jeep', category: 'Lavado' },
  { id: 4, name: 'Lavado básico', vehicle: 'Carro', category: 'Lavado' },
  { id: 5, name: 'Semi interior + carro', price: 2000, category: 'Interior' },
  { id: 6, name: 'Semi interior + Jeep', price: 2000, category: 'Interior' },
  { id: 7, name: 'Revitalización de pintura', vehicle: 'Jeep', price: 3000, category: 'Detailing' },
  { id: 8, name: 'Revitalización de pintura', vehicle: 'Carro', price: 2800, category: 'Detailing' },
  { id: 9, name: 'Lavado de motor', price: 600, category: 'Tratamientos' },
  { id: 10, name: 'Brillado de pantalla', price: 700, category: 'Tratamientos' },
  { id: 11, name: 'Interior desarmado', category: 'Interior' },
  { id: 12, name: 'Interior desarmado de asiento', price: 2800, category: 'Interior' },
  { id: 13, name: 'Tratamiento de ozono', price: 600, category: 'Tratamientos' },
  { id: 14, name: 'Lavado + encerado a mano', vehicle: 'Carro', category: 'Lavado' },
  { id: 15, name: 'Lavado + encerado a mano', vehicle: 'Jeep', category: 'Lavado' },
]

export const serviceCategories = ['Todos', 'Lavado', 'Interior', 'Detailing', 'Tratamientos'] as const

export const formatPrice = (price?: number) =>
  price ? `RD$${price.toLocaleString('es-DO')}` : 'Consultar'
