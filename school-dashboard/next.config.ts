import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable to prevent double execution in development
  
  // Ensure Next.js knows the correct root directory
  outputFileTracingRoot: path.join(__dirname),
  
  // Build configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // !! WARN !!
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // !! WARN !!
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
