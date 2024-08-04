/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.checkraka.com',
            pathname: '**',
          },
        ],
      },

};

export default nextConfig;
