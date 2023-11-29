import { type VitePWAOptions } from "vite-plugin-pwa";

export const uploadApiKey = "";

export const PWAConfig: Partial<VitePWAOptions> = {
  includeAssets: ["favicon.svg", "favicon.ico", "robots.txt"],
  manifest: {
    name: "BOILERPLATE",
    short_name: "bp",
    description: "BOILERPLATE",
    theme_color: "#ffffff",
    start_url: "/",
    scope: "/",
    icons: [
      {
        src: "icon-48x48.webp",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "icon-72x72.webp",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "icon-96x96.webp",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "icon-128x128.webp",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "icon-144x144.webp",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "icon-152x152.webp",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "icon-192x192.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icon-384x384.webp",
        sizes: "284x284",
        type: "image/png",
      },
      {
        src: "icon-512x512.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
  workbox: {
    sourcemap: true,
  },
};
