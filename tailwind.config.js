module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'sky-blue': '#5084c3',
        'sunset-yellow': '#cfd1bb',
        'sea-blue': '#203853',
        'ferry-white': '#d1be9f',
        'ferry-green': '#007054',
      },

      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Nanum Myeongjo', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            h1: {
              color: theme('colors.green.800'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
