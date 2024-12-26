/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.kopis.or.kr',
        pathname: '/upload/**'
      }
    ]
  }
};

export default nextConfig;
