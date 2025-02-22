/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif']
      },
      backgroundImage: {
        'wave_pattern': "url('../public/wave.svg')"
      },
      transitionProperty: {
        "transform": "transform"
      },
      transitionDuration: {
        '800': '800ms'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}