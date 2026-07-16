import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins: [react(), VitePWA({ registerType: 'autoUpdate', manifest: { name: 'Growth OS', short_name: 'Growth OS', description: 'Your calm personal operating system', theme_color: '#315b46', background_color: '#f7f6f0', display: 'standalone', icons: [] } })] });
