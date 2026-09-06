import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// La salida va a la raiz del repositorio porque GitHub Pages sirve `main` desde ahi.
// `emptyOutDir` queda en false para no borrar ni `web/` ni `.git/`; el script
// `prebuild` se encarga de limpiar el bundle anterior.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../",
    emptyOutDir: false,
    assetsDir: "assets",
    cssMinify: "lightningcss",
  },
});
