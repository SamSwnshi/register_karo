import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframe: {
        "loop-scroll": {
          from : {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }
    }
  },
  plugins: [tailwindcss()],
  base: "/",
  server: {
    historyApiFallback: true,
  },
});
