import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: '5000',
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abaplaneta-backend.onrender.com",
        pathname: "/**"
      }
    ],
  },
};

export default nextConfig;