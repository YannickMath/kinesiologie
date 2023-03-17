/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   fadeInDown: {
      //     from: {
      //       opacity: 0,
      //       transform: 'translateY(-100%)',
      //     },
      //     to: {
      //       opacity: 1,
      //       transform: 'translateY(0%)',
      //     },
      //   },
      // },
      // backgroundImage: {
      //   "hero-pattern": "url('/backgroundimage.jpg)",
      // },
    },
  },
  plugins: [],
};
