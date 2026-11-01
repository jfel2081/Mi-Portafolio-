/**
 * Configuración central del sitio. Edita aquí tu nombre, enlaces y navegación;
 * Header, Footer y metadatos se actualizan solos.
 */
export const siteConfig = {
  name: "Tu Nombre",
  handle: "tu-nombre",
  title: "Simulación, Código y Materia",
  description:
    "Portafolio y bitácora de química teórica, física computacional y análisis de datos científicos.",
  github: "https://github.com/tu-usuario",
  email: "hola@tudominio.com",
  /** URL pública: define NEXT_PUBLIC_SITE_URL en Vercel (o se usa la de producción de Vercel). */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-mi", label: "Sobre mí" },
] as const;

/** Tecnologías mostradas como badges en el footer. */
export const stackBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "KaTeX",
  "Vercel",
] as const;
