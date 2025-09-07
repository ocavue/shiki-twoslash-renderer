import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
const config: unknown = defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: 'build',
})

export default config
