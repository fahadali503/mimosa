module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    // require('@themesberg/flowbite/plugin'),
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}
