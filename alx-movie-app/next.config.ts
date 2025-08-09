import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'themebeyond.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
