/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'accent2':'#27D9A6',
			'accent':'#03ffe6',
			'soft':'#2797D9',
			'hard':'#21577d',
			'bg':'#131317',
			'bg-light':'#F9F6EE',
			'white-2' : '#EDEADE',
			'bg-2':'#5c5c5c',
			'disabled':'#b8b8b8',
			'disabled-soft':'#c4c4c4',
		},
		extend: {},
	},
	plugins: [],
}
