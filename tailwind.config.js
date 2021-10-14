module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/templates/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "3rem",
				"8xl": "4.5rem",
				"9xl": "5.25rem",
				"10xl": "6.25rem",
			},
			boxShadow: {
				small: "0 5px 10px rgba(0, 0, 0, 0.12)",
				medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
