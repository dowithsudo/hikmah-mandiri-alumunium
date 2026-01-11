import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // 👉 image optimization saat build
    viteImagemin({
      // JPG
      mozjpeg: {
        quality: 80,
      },

      // PNG
      pngquant: {
        quality: [0.7, 0.85],
        speed: 4,
      },

      // buat versi WebP juga (opsional tapi bagus)
      webp: {
        quality: 80,
      },
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
