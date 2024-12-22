import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensure that the server listens on all interfaces
    port: 3000, // You can change this to any port if needed, or leave it as 3000
    strictPort: true, // Optionally, ensures the port is available
  },
});
