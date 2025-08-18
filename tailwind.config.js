/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ], // Add your template paths
  theme: {
    extend: {
      colors: {
        steel: "#5A5A5A",
        industrial: "#003366",
        safety: "#FF6600",
      },
    },
  },
  plugins: [],
}