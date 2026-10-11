import type { NextConfig } from "next";

const repoName = "I-AM-MYSELF";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
