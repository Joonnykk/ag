/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/**/*.{html,js}",
    "!./node_modules/**/*"
  ],
  theme: {
		screens: {
			xs: "360px",
			sm: "640px",
			md: "1024px",
			lg: "1280px",
			xl0: "1600px",
			xl: "1920px",
		},
		container: {
			center: true,
			padding: {
				xs: "16px",
				sm: "20px",
				md: "40px",
				lg: "40px",
				xl0: "40px",
				xl: "40px",
			},
			screens: {
				xs: "360px",
				sm: "640px",
				md: "1024px",
				lg: "1280px",
				xl0: "1400px",
				xl: "1400px",
			},
		},
		extend: {
			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				cnext: ["Code Next", "sans-serif"],
				openCondensed: ["Open Sans Condensed", "sans-serif"],
				orbi: ["Orbitron", "sans-serif"],
				baloo: ["Baloo", "sans-serif"],
				evil: ["EvilOfFrankenstein", "sans-serif"],
				xolo: ["Xolonium", "sans-serif"],
			},
			backgroundImage: {
				"custom-radial-gradient":
					"radial-gradient(140.43% 150.05% at 56.37% -42.14%,  #E4F1FF38, #B6D8FE68, #ABD3FF)",
				"custom-gradient-form-game-card":
					"linear-gradient(180deg, rgba(10, 10, 12, 0.00) 55.88%, rgba(10, 10, 12, 0.70) 77.04%, rgba(10, 10, 12, 0.90) 87.46%, #0A0A0C 100%)",
				"custom-bg-gradient":
					"radial-gradient(327.83% 411.37% at 54.40% -303.96%, #DFEBFA 0%, #E4F1FF 38.27%, #B6D8FE 68.31%, #ABD3FF 88.30%)",
				"custom-button-question-gradient":
					"linear-gradient(129deg, #FED602 0%, #FEFD02 100%)",
				"custom-gradient-numbers":
					"radial-gradient(199.37% 213.54% at -38.87% -90.36%, #C3E0FF 0%, #C9E2FF 38.27%, #92C5FE 68.31%, #71B4FF 88.30%)",
			},
			boxShadow: {
				"custom-shadow-openInput":
					"0px 0px 0px 4px #F0EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
				"custom-shadow-menuList":
					"0px 12px 16px -4px rgba(110, 98, 134, 0.08)",
				"custom-shadow-categoryItem":
					"0px 3px 13px 0px rgba(211, 218, 228, 0.26)",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
}