/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false, // Desactivado para evitar problemas
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
};

export default nextConfig;
