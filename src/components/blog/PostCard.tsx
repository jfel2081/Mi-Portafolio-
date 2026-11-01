import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

/** Fila de feed: metadatos a la izquierda, contenido a la derecha. */
export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative grid gap-3 border-b border-line py-6 transition-colors first:border-t sm:grid-cols-[11rem_1fr] sm:gap-8">
      <div className="flex gap-4 font-mono text-xs text-muted sm:flex-col sm:gap-2">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" />
          {post.readingMinutes} min de lectura
        </span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Etiquetas">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="tag">{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
