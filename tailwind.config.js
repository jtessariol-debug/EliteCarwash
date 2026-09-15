/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06181b',
        panel: '#071f24',
        aqua: '#39d9da',
        cyan: '#75f5f4',
        promo: '#f6ef3c',
      },
      boxShadow: {
        glow: '0 0 36px rgba(57, 217, 218, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Arial Narrow', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
