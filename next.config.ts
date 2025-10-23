import type { NextConfig } from 'next';
import dotenv from 'dotenv';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve(__dirname);
const envPaths = ['.env', '.env.local', '.env.development.local'];

for (const envPath of envPaths) {
  const file = path.join(root, envPath);
  if (fs.existsSync(file)) {
    dotenv.config({ path: file });
    break;
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack(config, { isServer }) {
    config.snapshot = { ...config.snapshot, managedPaths: [] };

    if (!isServer) {
      const prismaClientPath = path.resolve(
        __dirname,
        'src',
        'app',
        'generated',
        'prisma',
      );

      const browserShim = path.resolve(
        __dirname,
        'src',
        'app',
        'generated',
        'prisma-client-browser.js',
      );

      config.resolve = config.resolve || {};
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        [prismaClientPath]: browserShim,
      };
    }

    return config;
  },
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.ts',
      },
    },
  },
};

export default nextConfig;
