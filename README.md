# Laboratorio computacional · portafolio personal


## Empezar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Personalizar (en este orden)

1. `src/lib/site.ts` → tu nombre, handle, GitHub, correo y navegación.
2. `src/data/projects.ts` → proyectos (reemplaza los placeholders).
3. `content/blog/*.md` → entradas del blog (frontmatter + Markdown + LaTeX).
4. `src/app/globals.css` → paleta (variables `--accent`, `--canvas`, …).
5. `src/app/sobre-mi/page.tsx` → tu biografía.

## LaTeX y química

| Dónde | Cómo |
| --- | --- |
| Entradas `.md` | `$E=mc^2$` en línea · `$$ ... $$` en bloque · `$\ce{H2O}$` química |
| Componentes React | `<Tex tex={String.raw\`\hat{H}\psi=E\psi\`} />` (`display` para bloque) |

Usa `String.raw` en TS/TSX para no duplicar las barras invertidas.

## Desplegar en Vercel

1. Sube el repo a GitHub e impórtalo en vercel.com (detecta Next.js solo).
2. Opcional: define `NEXT_PUBLIC_SITE_URL` con tu dominio para metadatos/OG.
