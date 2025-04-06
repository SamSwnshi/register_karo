import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [tailwindcss()],
  base: "/",
  server: {
    historyApiFallback: true,
  },
});
