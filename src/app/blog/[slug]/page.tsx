import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Markdown } from "@/components/markdown/Markdown";

type Params = { slug: string };

// Sólo se generan los slugs que existen en /content/blog
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="group mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft
          className="size-3.5 transition-transform group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        volver al blog
      </Link>

      <header className="mb-10 border-b border-line pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readingMinutes} min de lectura
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Etiquetas">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="tag">{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </header>

      <Markdown>{post.content}</Markdown>
    </article>
  );
}
