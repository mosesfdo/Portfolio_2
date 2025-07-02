import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio_2/',
  plugins: [react()],
});

// "scripts": {
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d dist"
// }

