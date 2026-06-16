// @ts-check
import { defineConfig } from 'astro/config'

/** GitHub project Pages: set BASE_PATH=/YourRepoName/ in CI or .env */
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://ladaojeifang.github.io',
  base,
  output: 'static',
  build: {
    format: 'directory'
  }
})
