import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center py-24 text-center">
      <TerminalWindow title="~/404" className="w-full max-w-md text-left">
        <p>
          <span className="text-accent">$</span>{" "}
          <span className="text-ink">cat pagina.md</span>
        </p>
        <p className="text-ink-soft">cat: pagina.md: no existe el archivo</p>
        <p className="mt-2">
          <span className="text-accent">$</span> <span className="cursor" />
        </p>
      </TerminalWindow>
      <h1 className="mt-10 text-2xl font-semibold text-ink">
        Página no encontrada
      </h1>
      <p className="mt-2 text-muted">
        La ruta que buscas no existe o fue movida.
      </p>
      <Button href="/" variant="secondary" className="mt-8">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver al inicio
      </Button>
    </Section>
  );
}
