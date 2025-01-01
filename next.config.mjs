/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      domains: ['https://ashrafalian-v1.netlify.app/'],
      formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    reactStrictMode: true,
  };
  

export default nextConfig;
