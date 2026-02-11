/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')



module.exports = {
    content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      colors:{
        dark: "#0E1116",
        light: "#F7F3EE",
        primary: "#FF6B4A",
        primaryDark: "#5FE3C0",
        ink: "#0E1116",
        paper: "#F7F3EE",
        slate: "#9B9AA1",
        cloud: "#EAE5DE",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:
        "repeating-radial-gradient(rgba(14,17,22,0.25) 2px,#F7F3EE 6px,#F7F3EE 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0E1116 8px,#0E1116 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(14,17,22,0.25) 2px,#F7F3EE 6px,#F7F3EE 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0E1116 8px,#0E1116 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(14,17,22,0.25) 2px,#F7F3EE 6px,#F7F3EE 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0E1116 6px,#0E1116 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(14,17,22,0.25) 2px,#F7F3EE 6px,#F7F3EE 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0E1116 4px,#0E1116 40px)",

      },
      boxShadow: {
        "3xl": "0 20px 50px -20px rgba(14,17,22, 0.35)",
        "soft": "0 20px 70px -30px rgba(14,17,22, 0.25)",
        "glow": "0 0 40px rgba(255,107,74, 0.25)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}
