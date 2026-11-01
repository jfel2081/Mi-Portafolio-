import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/sections/Hero";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { LatestPosts } from "@/components/sections/LatestPosts";

export default function HomePage() {
  // Se ejecuta en el servidor (build): lee /content/blog/*.md
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <FocusAreas />
      <FeaturedProjects />
      <LatestPosts posts={latestPosts} />
    </>
  );
}
