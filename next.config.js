/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Allow Next.js to run in Replit environment
  webpack: (config) => {
    return config;
  },
  // Set the hostname and port for Replit
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  // Configure webserver to bind to all networks (important for Replit)
  webServerConfig: {
    hostname: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
};

module.exports = nextConfig; 