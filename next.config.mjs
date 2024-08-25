/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["moviesapi.ir"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*.moviesapi.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
