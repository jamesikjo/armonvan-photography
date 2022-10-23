/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};
module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
};
