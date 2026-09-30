import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from a sub-folder (username.github.io/repo-name),
 * so every link and file needs that "/repo-name" prefix. The deploy workflow passes
 * the right prefix in automatically, and passes nothing once a custom domain is set.
 *
 * Want to hard-code it instead? Replace the next line with:
 *   const basePath = "";              // custom domain (www.yourdomain.com)
 *   const basePath = "/repo-name";    // username.github.io/repo-name
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // plain HTML/CSS/JS in /out, no server needed
  trailingSlash: true, // /privacy → /privacy/index.html, works on any static host
  images: { unoptimized: true }, // GitHub Pages can't resize images on the fly
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
