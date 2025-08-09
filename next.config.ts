import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://i.pravatar.cc/1024?img=37")],
  },
};

export default nextConfig;
