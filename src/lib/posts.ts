import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Las entradas del blog viven como archivos Markdown en /content/blog/*.md
 * con frontmatter YAML:
 *
 *   ---
 *   title: "Título"
 *   description: "Resumen corto"
 *   date: "2026-10-12"        # entre comillas, formato YYYY-MM-DD
 *   tags: ["DFT", "Python"]
 *   draft: false              # opcional; true = oculto en producción
 *   ---
 */
const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function parseFile(filename: string): (Post & { draft: boolean }) | null {
  if (!filename.endsWith(".md")) return null;
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "1970-01-01").slice(0, 10),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: readingMinutes(content),
    draft: Boolean(data.draft),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";

  return fs
    .readdirSync(POSTS_DIR)
    .map(parseFile)
    .filter((p): p is Post & { draft: boolean } => p !== null)
    .filter((p) => showDrafts || !p.draft)
    .map(({ content: _content, draft: _draft, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  // Evita path traversal: sólo slugs simples.
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIR, file))) return null;
  const post = parseFile(file);
  if (!post) return null;
  if (post.draft && process.env.NODE_ENV === "production") return null;
  const { draft: _draft, ...rest } = post;
  return rest;
}
