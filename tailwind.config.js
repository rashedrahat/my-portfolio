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
        dark: "#0B0F1A",
        light: "#F0EFE9",
        primary: "#FF8A3D",
        primaryDark: "#63E6BE",
        ink: "#0B0F1A",
        paper: "#F0EFE9",
        slate: "#8E8A86",
        cloud: "#E3DDD3",
        sapphire: "#4C7BFF",
        moss: "#2D6A4F",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:
        "repeating-radial-gradient(rgba(11,15,26,0.18) 2px,#F0EFE9 6px,#F0EFE9 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0B0F1A 8px,#0B0F1A 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(11,15,26,0.18) 2px,#F0EFE9 6px,#F0EFE9 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0B0F1A 8px,#0B0F1A 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(11,15,26,0.18) 2px,#F0EFE9 6px,#F0EFE9 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0B0F1A 6px,#0B0F1A 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(11,15,26,0.18) 2px,#F0EFE9 6px,#F0EFE9 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0B0F1A 4px,#0B0F1A 40px)",

      },
      boxShadow: {
        "3xl": "0 24px 60px -20px rgba(11,15,26, 0.4)",
        "soft": "0 30px 80px -40px rgba(11,15,26, 0.3)",
        "glow": "0 0 45px rgba(255,138,61, 0.3)",
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
