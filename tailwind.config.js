/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: "Poppins",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "820px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
