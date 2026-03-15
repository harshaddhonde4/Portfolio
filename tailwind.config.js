/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: '#050810',
        cyan: '#00f5d4',
        violet: '#7c3aed',
        electric: '#06b6d4',
        glow: '#a855f7',
      },
    },
  },
  plugins: [],
}
