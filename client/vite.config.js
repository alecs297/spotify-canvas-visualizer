import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    plugins: [react()],
    server: {
      port: process.env.VITE_PORT,
      host: process.env.VITE_HOST,
    }
  })
}