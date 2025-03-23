import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "image.tmdb.org",
      "upload.wikimedia.org",
      "i.ytimg.com",
      "mango.blender.org",
      "download.blender.org",
      "en.wikipedia.org",
    ],
  },
};

export default nextConfig;
