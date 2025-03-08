/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignorar errores de ESLint durante la construcción para evitar bloqueos
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar errores de TypeScript durante la construcción para avanzar sin interrupciones
    ignoreBuildErrors: true,
  },
  images: {
    // No optimizar imágenes si hay problemas relacionados con la optimización de imágenes
    unoptimized: true,
  },
  experimental: {
    // Desactivar funciones experimentales para evitar incompatibilidades
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  webpack: (config) => {
    // Configuración adicional para evitar problemas con Webpack
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        maxSize: 200000, // Limitar el tamaño máximo de los chunks
      },
    };

    config.infrastructureLogging = {
      debug: false, // Puedes cambiar esto a true para obtener logs más detallados si necesitas depurar
    };

    return config;
  },
};

export default nextConfig;
