import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abaplaneta-backend.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;