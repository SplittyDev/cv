import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Montserrat Variable'],
				sans: ['Noto Sans Variable', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
