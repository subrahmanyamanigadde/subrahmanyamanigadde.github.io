/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
