import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "900px",
      },
      colors: {
        lime: "#AEFE25",
        brightblue: "#33ddff",
        lightgray: "#afb6bb",
        orange: "#f0a000",
        red: "#fe1500",
        brown: "#2b0101",
        purple: "#452b62",
        black: "#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        imageSlideshow: {
          "0%": { backgroundImage: "url(/preworkout2.png)" },
          "19%": { backgroundImage: "url(/preworkout2.png)" },
          "20%": { backgroundImage: "url(/juggernaut.png)" },
          "39%": { backgroundImage: "url(/juggernaut.png)" },
          "40%": { backgroundImage: "url(/gilajoint.png)" },
          "59%": { backgroundImage: "url(/gilajoint.png)" },
          "60%": { backgroundImage: "url(/brainfood.png)" },
          "79%": { backgroundImage: "url(/brainfood.png)" },
          "80%": { backgroundImage: "url(/preworkout1.png)" },
          "99%": { backgroundImage: "url(/preworkout1.png)" },
          "100%": { backgroundImage: "url(/preworkout2.png)" },
        },
      },
      animation: {
        imageSlideshow: "imageSlideshow 90s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
