import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: true, // Esto muestra los errores en el navegador
    },
  },
  plugins: [react()],
});
