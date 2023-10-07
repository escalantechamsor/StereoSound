/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('./img/people.png')",
        light: "url('./img/light.jpg')",
        bottle: "url('./img/bottle.jpg')",
        brindis: "url('./img/brindis.jpg')",
        copacolores: "url('./img/copacolores.jpg')",
        copas: "url('./img/copas.jpg')",
        lemon: "url('./img/lemon.jpg')",
        orange: "url('./img/orange.jpg')",
        plato: "url('./img/plato.jpg')",
        gold: "url('./img/gold.jpg')",
        barra: "url('./img/barra.jpg')",
        vaso: "url('./img/vaso.jpg')",
        table: "url('./img/table.jpg')",
        bartender: "url('./img/bartender.jpg')",
        abstract: "url('./img/abstract.jpg')",
        purple: "url('./img/purple.jpg')",
        agua: "url('./img/agua.jpg')",
        darkwater: "url('./img/darkwater.jpg')",
        routes: "url('./img/routes.jpg')",
        rain: "url('./img/rain.svg')",
        Woman: "url('./img/Woman.svg')",
        Picture: "url('./img/Picture.svg')",
        abstract: "url('./img/abstract.svg')",
        notas: "url('./img/notas.jpg')",
        azul: "url('./img/azul.jpg')",
        headphone: "url('./img/headphone.svg')",
        auricularnotas: "url('./img/auricularnotas.svg')",
        dancing: "url('./img/dancing.svg')",
        listening: "url('./img/listening.svg')",
        frecuencia: "url('./img/frecuencia.svg')",




      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounceslow 1s ease-in-out infinite ",
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceslow: {
          "0%, 100%": {
            transform: "scale(0)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
            
            
          },
          "50%": {
            transform: "scale(0.3)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
          },
        },
      },
    },
  },
  plugins: [],
};
