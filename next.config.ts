import type { NextConfig } from "next";

const repoName = "I-AM-MYSELF";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages needs the repository prefix; local development should use /.
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
