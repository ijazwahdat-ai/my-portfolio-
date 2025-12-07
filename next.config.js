/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // این تنظیم دیگر در نسخه‌های جدید توصیه نمی‌شود
  // swcMinify: false,

  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

module.exports = nextConfig;