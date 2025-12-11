/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/that-new-brand-design' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig