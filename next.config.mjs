/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.kopis.or.kr',
        pathname: '/upload/**'
      },
      {
        protocol: 'https',
        hostname: 'btaptjyirfuuqmrbygxz.supabase.co',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  }
};

export default nextConfig;
