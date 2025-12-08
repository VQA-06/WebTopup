/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0.peakpx.com", // Izinkan domain ini
        port: "",
        pathname: "/**", // Izinkan semua path gambar dari domain ini
      },
      {
        protocol: "https",
        hostname: "gaming-cdn.com", // Izinkan domain ini
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mediaproxy.tvtropes.org", // Izinkan domain ini
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
