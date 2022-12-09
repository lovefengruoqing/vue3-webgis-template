import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import cesium from "vite-plugin-cesium"; // 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    cesium(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/assets/theme.less";`,
        javascriptEnabled: true,
      },
    },
  },
  server: {
    // 开发环境，代理配置
    proxy: {
      // 接口
      "/yjcImage": "https://onetouch.thxpace.com",
      "/yjcSystem": "https://onetouch.thxpace.com",
      "/yjcResearch": "https://www.cpeos.org.cn",
      // 缩略图
      "/group1": "https://onetouch.thxpace.com",
      "/thumbUrl": "https://onetouch.thxpace.com",
      "/IMG_LIB": "https://onetouch.thxpace.com",
      // 跳转地址
      "/home": "https://onetouch.thxpace.com",
    },
    port: 5174,
  },
});
