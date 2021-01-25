import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (pathStr: string): string => {
  return resolve(__dirname, '.', pathStr)
}

export default defineConfig({
  alias: {
    '@': pathResolve('./src'),
  },

  server: {
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://',
        changeOrigin: true,
        ws: false,
        secure: false,
        ignorePath: true,
      },
    },
  },

  plugins: [vue()],
})
