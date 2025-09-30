import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export", 
  images: {
    unoptimized: true, 
  },
  basePath: "/access-finmart.github.io", 
  assetPrefix: "/access-finmart.github.io/",
};

export default nextConfig;
