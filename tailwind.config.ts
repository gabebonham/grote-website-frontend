/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // adjust this path based on your project structure
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
				purpleCustom: 'var(--purpleCustom)',
				purpleCustom2: 'var(--purpleCustom2)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', 'sans-serif'],
				mono: ['var(--font-mono)', 'monospace'],
			},
		},
	},
	plugins: [],
};
