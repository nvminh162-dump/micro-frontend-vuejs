import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote-a-app",  //app name
      remotes: {
        remote_a: "http://localhost:5005/assets/remote-a-source.js",  //remote path containing the port configured on remote side, the build path, and the filename also configured on the remote side
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "es2022" // chỉ định target để build => không có sẽ lỗi build
  },
})
