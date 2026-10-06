import type { NextConfig } from "next";

/*
  The site is served from the root of its own domain (voicebutlerwa.com, set in public/CNAME),
  so links and files need no path prefix.

  If you ever go back to a GitHub Pages project address (username.github.io/repo-name),
  add `basePath: "/repo-name"` and `assetPrefix: "/repo-name"` below, and set
  NEXT_PUBLIC_BASE_PATH to the same value in .github/workflows/deploy.yml.
*/
const nextConfig: NextConfig = {
  output: "export", // plain HTML/CSS/JS in /out, no server needed
  trailingSlash: true, // /privacy → /privacy/index.html, works on any static host
  images: { unoptimized: true }, // GitHub Pages can't resize images on the fly
};

export default nextConfig;
