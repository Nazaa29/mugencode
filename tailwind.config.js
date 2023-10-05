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
        "1px": "1px",
        "2px": "2px",
        120: "30rem",
        144: "36rem",
        180: "42rem",
        200: "50rem",
        240: "60rem",
        "50%": "50%",
        "7/12": "58.333333%",
      },

      padding: {
        "15px": "15px",
      },
      borderRadius: {
        "4px": "4px",
      },
      top: {
        "50%": "50%",
      },
      height: {
        "1px": "1px",
        "2px": "2px",
        120: "30rem",
        144: "36rem",
        180: "42rem",
        200: "50rem",
        240: "60rem",
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
      fontFamily: {
        tungsten: ["Tungsten", "sans"],
        workSans: ["Work Sans"],
        sourceCodePro: ["Source Code Pro"],
      },
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
    "hover:opacity-100", // Agregar clases de hover necesarias aquí
    "hover:translate-x-full", // Agregar más clases de hover si es necesario
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("taos/plugin"),
  ],
};
