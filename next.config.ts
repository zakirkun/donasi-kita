import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yca.or.id',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'donasionline.id',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blorakab.go.id',
        pathname: '/resource/doc/post/**',
      },
    ],
  },
};

export default nextConfig;
