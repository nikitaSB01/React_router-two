import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "React_router-two";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
