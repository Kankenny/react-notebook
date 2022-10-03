/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				amethyst: '#A45EE5',
			},
			fontFamily: {
				sans: ['Blinker', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
