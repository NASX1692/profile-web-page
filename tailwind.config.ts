import type { Config } from 'tailwindcss';
import colorPalettes from './color-palettes';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '200px',
        md: '767px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        ...colorPalettes,
      },
      fontFamily: {
        digitalFont: ['Digital-7', 'sans-serif'],
        oswald: ['Oswald', ...fontFamily.sans],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
