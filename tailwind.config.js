/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
	content: [
		  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
	],
	theme: {
		extend: {
			colors: {
				primary: "#0066FF", // Codecademy Blue
				secondary: "#FFDD00", // Accent Yellow
				bgLight: "#F7F7F7", // Light background
				bgDark: "#1A1A1A", // Dark background
				bgCard: "#FFFFFF", // White background for cards
				textLight: "#333333", // Dark text color for light theme
				textDark: "#F7F7F7", // Light text color for dark theme
			},
		},
	},
	darkMode: "class", // Enables class-based dark mode toggle
	plugins: [daisyui],
	daisyui: {
		themes: [
			"light", // Default light theme
			"dark", // Default dark theme
			{
				wireframe: {
					primary: "#0066FF", // Codecademy Blue
					secondary: "#FFDD00", // Accent Yellow
					accent: "#FFDD00", // Secondary accent color
					neutral: "#F7F7F7", // Background light
					"base-100": "#FFFFFF", // Card background white
					"base-content": "#333333", // Dark text color
				},
			},
		],
	},
};
