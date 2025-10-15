import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Drooliito.github.io/Portfolio-Github',
  base: '/Portfolio-Github/',

  vite: {
    plugins: [tailwindcss()],
  },
});