/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        reign: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#b9deff",
          300: "#7cc2ff",
          400: "#36a0ff",
          500: "#0d7bff",
          600: "#0059d9",
          700: "#0045b3",
          800: "#003b93",
          900: "#001b2e",
          950: "#001222",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e2e8f0",
            a: {
              color: "#7cc2ff",
              "&:hover": {
                color: "#b9deff",
              },
            },
            h1: {
              color: "#ffffff",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            strong: {
              color: "#ffffff",
            },
            li: {
              color: "#e2e8f0",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
