import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { viteSingleFile } from "vite-plugin-singlefile"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS(), viteSingleFile()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            },
        }
    }
})
