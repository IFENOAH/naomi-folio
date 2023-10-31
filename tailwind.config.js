/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  fontFamily: {
    sans: ['montserrat, sans-serif'],
    Neue: ['Neue Haas Grotesk Display Pro', 'sans']
  },
  extend: {
    colors: {
      nao: {
        main: "#CCFF00",
        white: "#FFFFFF",
        black: "#121212",
        darkGray: "#151515",
        gray: "#999999",
      },
    },
    boxShadow: {
      na: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
      danger: ' 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
      gray: 'box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
    },
    backgroundColor: ['even'],
  },
};
export const variants = {
  extend: {
    display: ['group-focus']
  }
};
export const plugins = [
  // require('@tailwindcss/typography'),
  // require('@tailwindcss/forms'),
  // require('@tailwindcss/line-clamp'),
  // require("daisyui"),
];