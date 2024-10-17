/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["moviesapi.ir", "static.tvmaze.com", "qrweb.vercel.app"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*.moviesapi.ir",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.api.tvmaze.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
