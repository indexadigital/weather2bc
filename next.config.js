  const securityHeaders = [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Accept',
      value: '*/*'
    }
  ]
  
  /** @type {import('next').NextConfig} */
  module.exports = {
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "open-meteo.com",
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    }
  }
  