/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.cadellestephane.co.uk',
          },
        ],
        destination: 'https://cadellestephane.co.uk/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
