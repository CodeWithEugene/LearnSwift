import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'azagatti.dev',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'developer-blogs.nvidia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sarvika.com',
      },
      {
        protocol: 'https',
        hostname: 'ixorasolution.com',
      },
    ],
  },
};

export default nextConfig;
