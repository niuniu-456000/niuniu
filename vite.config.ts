import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/niuniu/', // 这里必须和你的仓库名完全一致
  plugins: [react()],
})
