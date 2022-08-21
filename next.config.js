/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'robohash.org',
      'shorturl.at',
      'static-cdn.jtvnw.net',
    ],
  },
};

module.exports = nextConfig;
