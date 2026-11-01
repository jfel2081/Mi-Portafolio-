"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Alterna claro/oscuro. Los iconos se muestran con variantes CSS (`dark:`),
 * así no hace falta estado "mounted" ni hay parpadeo de hidratación.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar entre tema claro y oscuro"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
