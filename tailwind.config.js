/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ], // Add your template paths
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        steel: "#5A5A5A",
        industrial: "#003366",
        safety: "#FF6600",
        "light-gray": "#F0F0F0",
        "dark-steel": "#333333",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}