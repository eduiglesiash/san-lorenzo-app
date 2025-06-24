import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robot.txt'],
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,json,icon}'],
      },
      manifest: {
        name: 'Fietas de San Lorenzo',
        short_name:'FSL',
        description: 'Calendario de fiesta de San Lorenzo',
        start_url:'/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#7F8051',
        screenshots:[{
          src: 'screenshots/narrow.png',
          sizes: '728x410',
          type: 'image/png',
          form_factor: 'wide'
        },{
          src: 'screenshots/wide.png',
          sizes: '736x1309',
          type: 'image/png',
          form_factor: 'narrow'
        }],
        icons: [
          {
            src: 'icons/192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'icons/512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          },
          {
            src: 'icons/512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }

    })
  ],
})
