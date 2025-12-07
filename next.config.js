const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
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

  webpack: (config, { isServer }) => {
    // حل مشکل contentlayer2
    config.resolve.alias = {
      ...config.resolve.alias,
      'contentlayer/generated': 'contentlayer2/generated',
    }

    // SVG rule
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    
    return config
  }
}

module.exports = withContentlayer(nextConfig)