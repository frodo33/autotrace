/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import eslintPlugin from "@nabla/vite-plugin-eslint"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), eslintPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
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
})
