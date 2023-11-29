import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { PWAConfig } from "./src/lib/config";
import { splitVendorChunkPlugin } from 'vite';
import ViteWebp from 'vite-plugin-webp-generator'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA(PWAConfig),
    splitVendorChunkPlugin(),
    ViteWebp({
      extensions: ["png", "jpg"]
    }),
  ],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
  build: { chunkSizeWarningLimit: 1600, }
});
