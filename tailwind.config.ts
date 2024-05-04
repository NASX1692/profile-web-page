import type { Config } from 'tailwindcss'
import colorPalettes from './color-palettes'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		theme: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				colorPalettes,
			},
			fontFamily: {
				// sans: ['Graphik', 'sans-serif'],
				// serif: ['Merriweather', 'serif'],
				display: ['Graphik'],
				body: ['Graphik'],
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
			extend: {
				spacing: {
					'128': '32rem',
					'144': '36rem',
				},
				borderRadius: {
					'4xl': '2rem',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
