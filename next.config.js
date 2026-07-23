/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Cloudflare Pages için statik export (out/ klasörü üretir)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

module.exports = nextConfig;
