// vite.config.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
});

// explanation
// path.resolve(process.cwd(), "src"): 現在の作業ディレクトリからsrcへの絶対パスを生成
// これにより実際のファイルシステムレベルでのパス解決が可能
