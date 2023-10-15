/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['montserrat, sans-serif'],
    },
    extend: {
      colors: {
        nao: {
          main: "#CCFF00",
          white: "#FFFFFF",
          black: "#121212",
        },
      },
      boxShadow: {
        na: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
        danger: ' 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
        gray: 'box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
      },
      backgroundColor: ['even'],
    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require("daisyui"),
  ],
}