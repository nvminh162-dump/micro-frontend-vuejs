import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 5005, //port you want to serve this remote
  },
  plugins: [
    vue(),
    federation({
      name: "remote-a", //name of remote you want to use on host side
      filename: "remote-a-source.js", //filename after the build
      exposes: {
        "./App": "./src/App.vue", //target component you want to serve as remote side.
        "./pages/Home": "./src/pages/Home.vue", //target component you want to serve as remote side.
      },
      shared: ["vue"], //we don't want to build our remote with a library the host side already have. So here we sinalize "hey, use this host side package"
    }),
  ],
  build: {
    target: "es2022",
  },
});
