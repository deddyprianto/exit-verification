/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig
