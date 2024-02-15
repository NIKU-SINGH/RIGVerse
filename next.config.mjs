// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    loader: 'default',
  },
};

export default nextConfig;
