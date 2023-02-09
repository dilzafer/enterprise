/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#F8FCFF",
				buton: "#172B85",
				gradOne: "#172B85",
				gradTwo: "#FF413C",
				secBgClr2: "#E1E8FF",
			},
			colors: {
				mainClr: "#222223",
				subMainClr: "#535354",
				btText: "#202020",
				subFnt: "#616169",
				ftrTitle: "#122F89",
				ftrSub: "#8E8E93",
			},
			fontFamily: {
				RoBo: ["Roboto", "sans-serif"],
				Source: ["Source Sans Pro", "sans-serif"],
			},
			fontSize: {
				mainTitle: "5rem",
				40: "40px",
				29: "29.9792px",
				19: "19.9861px",
			},
			lineHeight: {
				80: "5rem",
				45: "45px",
				23: "23px",
			},
			letterSpacing: {
				1: "-0.01em",
			},
		},
	},
	plugins: [],
};
