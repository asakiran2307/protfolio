/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { series: '#e50914', ink: '#0a0a0f', gold: '#f5b942' }, fontFamily: { display: ['Anton', 'sans-serif'], body: ['Inter', 'sans-serif'], quote: ['Fraunces', 'serif'] } } },
  plugins: []
}