module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cali': ['Calibri', 'sans-serif'],
    },
    backgroundColor: {
      'brown-click': '#C29077',
      'general': '#ECECEB',
      'white': '#FFFFFF',
      'card': '#F8F8F5',
      'gray': '#D1D5DB'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
    extend: {},
  },
  plugins: [],
}