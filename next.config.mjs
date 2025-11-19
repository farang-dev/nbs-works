import { fileURLToPath } from 'url'
import createJiti from 'jiti'

// Import env variables to be used in next.config.js
const jiti = createJiti(fileURLToPath(import.meta.url))
jiti('./src/sanity/env.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
