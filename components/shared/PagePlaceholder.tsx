import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PagePlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  status?: "coming-soon" | "in-progress" | "live";
}

const statusConfig = {
  "coming-soon": { label: "Bientôt disponible", variant: "outline" as const },
  "in-progress": { label: "En développement", variant: "secondary" as const },
  live: { label: "Disponible", variant: "default" as const },
};

export function PagePlaceholder({
  title,
  description,
  icon: Icon,
  features = [],
  status = "coming-soon",
}: PagePlaceholderProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
            </div>
            <p className="mt-1 text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      {/* Features preview */}
      {features.length > 0 && (
        <div className="rounded-xl border border-dashed border-border bg-card p-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Fonctionnalités prévues
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Placeholder content area */}
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-border bg-muted/30">
        <div className="text-center">
          <Icon className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">
            Le contenu de cette section sera disponible prochainement.
          </p>
        </div>
      </div>
    </div>
  );
}
