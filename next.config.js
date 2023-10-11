/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'imgix',
        unoptimized: true,
        path: '',
      },
  }
  
  module.exports = nextConfig;
