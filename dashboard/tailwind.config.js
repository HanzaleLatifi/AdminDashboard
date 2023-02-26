module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-pattern':
          "url('/src/data/banner.jpg')",
         'hero-dark-pattern' :
          "url('/src/data/banner2.png')"
      },
    },
  },
  plugins: [],
}
