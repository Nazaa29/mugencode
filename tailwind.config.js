module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        '1px': '1px',
        '2px': '2px'
      },
      colors: {
        gray: {
          custom: "#DDDDDD",
        },
        dark: {
          custom: "#222831",
        },
        teal: {
          custom: "#30475E",
        },
        blue: {
          custom: "#314EB4",
        },
        red: {
          custom: "#F05454",
        },
        // ...mas colores
      },
      fontFamily: {},
      boxShadow: {},
      backgroundImage: {},
      screens: {
        xs: "",
      },
      keyframes: {},
      animation: {},
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("taos/plugin"),
  ],
};
