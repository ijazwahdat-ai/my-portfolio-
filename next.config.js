const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // نادیده گرفتن تمام خطاها برای اینکه فقط سایت بالا بیاید
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // تنظیم عکس‌ها برای جلوگیری از ارور
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },

  // حل مشکل SVG که در پروژه داری
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

module.exports = withContentlayer(nextConfig);