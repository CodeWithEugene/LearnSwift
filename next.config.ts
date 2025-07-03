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
      {
        protocol: 'https',
        hostname: 'blog.openreplay.com',
      },
      {
        protocol: 'https',
        hostname: 'media.geeksforgeeks.org',
      },
      {
        protocol: 'https',
        hostname: 'www.edrawmind.com',
      },
      {
        protocol: 'https',
        hostname: 'learn.microsoft.com',
      },
      {
        protocol: 'https',
        hostname: 'afrikalyrics.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hollywoodreporter.com',
      },
      {
        protocol: 'https',
        hostname: 'stamford.newyorkcomedyclub.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;
