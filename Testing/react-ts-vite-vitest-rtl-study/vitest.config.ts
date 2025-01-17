import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// https://vitejs.dev/config
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
  })
);
