/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ['Alata', 'sans-serif'],
        slim: ['Josefin sans', 'sans-serif'],
      },
      colors: {
        dark: "var(--dark)",
        darker: "var(--darker)",
        white: "var(--white)",
        black: "var(--black)",
      }
    },
  },
  plugins: [],
}