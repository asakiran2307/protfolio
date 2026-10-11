/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'from-red-600','to-rose-950','from-cyan-500','to-blue-950',
    'from-emerald-500','to-green-950','from-amber-400','to-orange-900',
    'poster-gradient-crimson','poster-gradient-amber','poster-gradient-blue','poster-gradient-violet'
  ],
  theme: { extend: { colors: { series: '#e50914', ink: '#0a0a0f', gold: '#f5b942' }, fontFamily: { display: ['Anton', 'sans-serif'], body: ['Inter', 'sans-serif'], quote: ['Fraunces', 'serif'] } } },
  plugins: []
}