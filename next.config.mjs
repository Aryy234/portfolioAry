let userConfig;

try {
  userConfig = await import('./v0-user-next.config'); // Importa configuración adicional si está disponible
} catch (error) {
  console.warn("No se pudo cargar 'v0-user-next.config':", error.message); // Agrega un aviso para depuración
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint durante la construcción
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript para no detener la construcción
  },
  images: {
    unoptimized: true, // Evita la optimización de imágenes en caso de problemas
  },
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
};

// Función para combinar configuraciones personalizadas con las predeterminadas
mergeConfig(nextConfig, userConfig);

function mergeConfig(baseConfig, customConfig) {
  if (!customConfig) {
    return; // Si no hay configuración personalizada, no hacer nada
  }

  for (const key in customConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...customConfig[key],
      };
    } else {
      baseConfig[key] = customConfig[key];
    }
  }
}

// Exporta la configuración final
export default nextConfig;
