import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'docs',
  images: { unoptimized: true },
  output: 'export',
};

export default nextConfig;
