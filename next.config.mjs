// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com','upload.wikimedia.org'],
    loader: 'default',
  },
};

export default nextConfig;
