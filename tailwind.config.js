/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dotActive: "#1E40AF", // Example active dot color (blue-900)
        dotInactive: "#9CA3AF", // Example inactive dot color (gray-400)
      },
    },
  },
  plugins: [],
}