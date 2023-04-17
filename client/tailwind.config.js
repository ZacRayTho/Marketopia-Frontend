/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'righteous': ['Righteous', 'serif']
      },
      colors: {
        mtpurple: '#5F3C99',
        mtmedium: '#9A8AC2',
        mtlight: '#E5DFED',
        mtgray: '#F7F7F7'
      },
    },
  },
  plugins: [],
}

