import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local SVG placeholder logos
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
