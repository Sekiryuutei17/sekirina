import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/sekirina/', // reemplaza '01-galeria' con el nombre de tu repositorio en GitHub
})