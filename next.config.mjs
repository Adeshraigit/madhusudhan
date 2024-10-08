/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Update this according to your needs
            pathname: '/**',
          }
        ]
      },
};

export default nextConfig;
