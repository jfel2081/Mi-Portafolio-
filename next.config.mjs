/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Los .md de /content/blog se leen con fs en tiempo de build (SSG);
  // esto garantiza que Vercel los incluya en el bundle de las rutas dinámicas.
  outputFileTracingIncludes: {
    "/blog/[slug]": ["./content/blog/**/*"],
  },
};

export default nextConfig;
