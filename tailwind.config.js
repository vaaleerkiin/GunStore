/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 15px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
