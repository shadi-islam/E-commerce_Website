import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load VITE_* env vars (optional)
  const env = loadEnv(mode, process.cwd(), "");

  const target = env.VITE_API_URL || "http://localhost:5000";

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Forward API calls in dev to the backend
        "/api": {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
