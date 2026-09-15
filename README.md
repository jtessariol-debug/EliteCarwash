# Elite Car Wash

Sitio web de Elite Car Wash, desarrollado con React, Vite, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

El resultado de producción se genera en `dist/`.

## Despliegue en Vercel

Vercel detecta automáticamente Vite. La configuración esperada es:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

El proyecto es una landing page de una sola ruta con navegación por anclas, por lo que no necesita rewrites adicionales.
