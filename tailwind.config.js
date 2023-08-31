/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: ['./index.html', './src/**/*.{js,jsx,tsx}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo',"sans-serif"],
        kelly: ['Kelly Slab',"cursive"]
      } 
  },
  },
  plugins: [nextui({
    defaultTheme:'dark'
  })],
}

