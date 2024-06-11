/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      loader: "custom",
      loaderFile: "./src/app/imageLoader.js",
      remotePatterns: [
        {
          protocol: "https",
          hostname: "soloagency.netlify.app",
          port: "",
          pathname: "/.netlify/images?url=**",
        },
      ],
    },
};

export default nextConfig;
