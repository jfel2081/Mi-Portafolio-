import type { Metadata } from "next";

import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bitácora de laboratorio: derivaciones, código y notas.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <SectionHeading
        eyebrow="bitácora"
        title="Blog"
        description="Notas de laboratorio con soporte para fórmulas LaTeX y química."
      />
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      ) : (
        <p className="rounded-xl border border-dashed border-line-strong p-8 text-center font-mono text-sm text-muted">
          Aún no hay entradas. Añade un archivo .md en content/blog/.
        </p>
      )}
    </Section>
  );
}
