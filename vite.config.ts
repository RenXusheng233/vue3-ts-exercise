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
    hmr: {
      overlay: true,
    },
  },

  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // TODO: 优化打包体积
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },

  plugins: [vue()],

  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn'],
  },
})
