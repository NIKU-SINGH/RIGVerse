// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "upload.wikimedia.org",
      "ipfs.io",
      "hyperland-liard.vercel.app",
      "eth-india-2023.vercel.app",
      "warfield.vercel.app",
    ],
    loader: "default",
  },
};

export default nextConfig;
