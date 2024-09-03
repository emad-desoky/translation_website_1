/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"], // Add the new domain here
  },
};

export default nextConfig;
