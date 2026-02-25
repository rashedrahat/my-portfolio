/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      colors: {
        dark:      "#070B14",
        surface:   "#0D1117",
        light:     "#F1F5FF",
        primary:   "#F97316",
        electric:  "#6366F1",
        cyan:      "#06B6D4",
        primaryDark: "#818CF8",
        slate:     "#64748B",
        // Legacy aliases kept for compatibility
        ink:       "#070B14",
        paper:     "#F1F5FF",
        cloud:     "#1E2433",
        sapphire:  "#6366F1",
      },
      animation: {
        'spin-slow':   'spin 8s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(99,102,241,0.12) 2px,#F1F5FF 6px,#F1F5FF 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(99,102,241,0.25) 2px,#070B14 8px,#070B14 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(99,102,241,0.12) 2px,#F1F5FF 6px,#F1F5FF 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(99,102,241,0.25) 2px,#070B14 8px,#070B14 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(99,102,241,0.12) 2px,#F1F5FF 6px,#F1F5FF 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(99,102,241,0.25) 2px,#070B14 6px,#070B14 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(99,102,241,0.12) 2px,#F1F5FF 6px,#F1F5FF 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(99,102,241,0.25) 2px,#070B14 4px,#070B14 40px)",
      },
      boxShadow: {
        "3xl":           "0 24px 60px -20px rgba(7,11,20, 0.7)",
        "soft":          "0 30px 80px -40px rgba(7,11,20, 0.5)",
        "glow":          "0 0 45px rgba(249,115,22, 0.35)",
        "glow-electric": "0 0 45px rgba(99,102,241, 0.4)",
        "glow-cyan":     "0 0 45px rgba(6,182,212, 0.35)",
        "inner-glow":    "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl:   { max: "1279px" },
      lg:   { max: "1023px" },
      md:   { max: "767px" },
      sm:   { max: "639px" },
      xs:   { max: "479px" },
    },
  },
  plugins: [],
}
