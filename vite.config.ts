import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslintPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: "https://localhost:3000",
    https: {
      key: "./.cert/key.pem",
      cert: "./.cert/cert.pem",
    },
  },
});
