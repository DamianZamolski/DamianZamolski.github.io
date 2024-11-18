import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/damianzamolski.github.io',
  assetPrefix: '/damianzamolski.github.io/',
};

export default nextConfig;
