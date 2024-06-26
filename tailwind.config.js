/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'black',
        bg2: '#32527B', //blue
        accent1: 'white',
        accent2: '#F2F2F2',//greyish white
      },
      backgroundOpacity: {
        '10': '0.1',
      },
      backgroundImage: {
        'noise':'url(/images/noise/noise.svg)',
        'blue-noise':'url(/images/noise/blue-noise.svg)',
        'footer-noise':'url(/images/noise/footer-noise.svg)',
        'extended-noise':'url(/images/noise/extended-noise.svg)',
        'colors':'url(/images/insidepages/elements/allelements.webp)',
        'mobilecolors':'url(/images/insidepages/elements/allelementsmobile.webp)',
      },
      aspectRatio: {
        '1.59/1': '1.59 / 1',
        '0.88/1': '0.88 / 1',
        '1.72/1': '1.72 / 1'
      },
      dropShadow: {
        'lg': '0 10px 8px rgba(255,255,255)'
      }
  }
},
  plugins: [],
}

