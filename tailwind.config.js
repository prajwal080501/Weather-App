/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // clouds moving from right to left
        clouds: {
          "0%": { backgroundPosition: "100% 0" },
          "20%": { backgroundPosition: "0 0" },
          "40%": { backgroundPosition: "100% 0" },
          "60%": { backgroundPosition: "0 0" },
          "80%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        animation: {
          clouds: "clouds 10s linear infinite",
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}