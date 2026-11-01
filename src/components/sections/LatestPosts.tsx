import type { PostMeta } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LatestPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <Section aria-labelledby="blog-titulo" className="pt-4">
      <SectionHeading
        headingId="blog-titulo"
        eyebrow="03 / bitácora"
        title="Últimas entradas"
        description="Notas de laboratorio: derivaciones, código y lo que salió mal antes de salir bien."
        link={{ href: "/blog", label: "Ver todo el blog" }}
      />

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-line-strong p-8 text-center font-mono text-sm text-muted">
          Aún no hay entradas. Añade un archivo .md en content/blog/.
        </p>
      )}
    </Section>
  );
}
