import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (pathStr: string): string => {
  return resolve(__dirname, '.', pathStr)
}

export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },

  server: {
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: false,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
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

    // TODO: 拆分
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },

    chunkSizeWarningLimit: 800, // FIXME: 鸵鸟 = =...
  },

  plugins: [vue()],

  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn'],
  },
})
