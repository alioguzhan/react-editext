import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/react-editext/' : '/',
    plugins: [
      react(),
      envCompatible({
        prefix: 'REACT_APP_'
      }),
      checker({
        overlay: false,
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
        }
      })
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000
    },
    build: {
      outDir: 'build'
    }
  }
})
