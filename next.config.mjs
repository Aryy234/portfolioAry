/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuraciones básicas para evitar bloqueos durante la construcción
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript
  },
  images: {
    unoptimized: true, // Evita problemas de optimización de imágenes
  },
  experimental: {
    // Desactivar experimentos de Next.js que puedan ser incompatibles
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  webpack: (config) => {
    // Optimización de Webpack para reducir posibles problemas
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        maxSize: 200000, // Limita el tamaño máximo de los chunks
      },
    };

    // Ajustes para prevenir errores relacionados con dependencias internas
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };

    config.infrastructureLogging = {
      debug: false, // Cambia a true si necesitas más detalles de depuración
    };

    return config;
  },
  // Configuración para la telemetría
  env: {
    NEXT_TELEMETRY_DISABLED: "1", // Desactiva la telemetría de Next.js
  },
};

export default nextConfig;
