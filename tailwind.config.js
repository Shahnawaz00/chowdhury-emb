/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#94d8ff',
        'lighter-blue': '#d4e9fe',
        'dark-blue': '#00C9E3',
        'darker-blue': '#155aaf',
        'brown-1': '#FA9700',
        'brown-2': '#EE7600',
        'brown-3': '#BC5500',
        'brown-4': '#812C00',
        'brown-5': '#3A0F00',
      },
    },
    
  },
  plugins: [],
}
