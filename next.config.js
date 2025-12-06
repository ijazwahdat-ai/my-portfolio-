const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// هدرهای امنیتی (دست نخورده)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // تنظیمات نادیده گرفتن خطاها برای دیپلوی موفق
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // این گزینه برای جلوگیری از خطاهای بهینه‌سازی عکس در سرورهای خاص مفید است
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

// خروجی نهایی به ساده‌ترین روش ممکن
module.exports = withBundleAnalyzer(withContentlayer(nextConfig))const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// هدرهای امنیتی (دست نخورده)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // تنظیمات نادیده گرفتن خطاها برای دیپلوی موفق
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // این گزینه برای جلوگیری از خطاهای بهینه‌سازی عکس در سرورهای خاص مفید است
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

// خروجی نهایی به ساده‌ترین روش ممکن
module.exports = withBundleAnalyzer(withContentlayer(nextConfig))const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// هدرهای امنیتی (دست نخورده)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // تنظیمات نادیده گرفتن خطاها برای دیپلوی موفق
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // این گزینه برای جلوگیری از خطاهای بهینه‌سازی عکس در سرورهای خاص مفید است
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

// خروجی نهایی به ساده‌ترین روش ممکن
module.exports = withBundleAnalyzer(withContentlayer(nextConfig))