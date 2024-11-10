import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['imgs.search.brave.com'], 
  },
  experimental: {
    ppr: 'incremental'
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  }
};

export default nextConfig;
