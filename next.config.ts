import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi)$/,
      type: "asset/resource", // Use Webpack 5's built-in asset loader
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
