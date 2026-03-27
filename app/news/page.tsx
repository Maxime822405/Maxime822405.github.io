import { Newspaper } from "lucide-react";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata = {
  title: "News Consolidator | CMS Dashboard",
};

export default function NewsPage() {
  return (
    <PagePlaceholder
      title="News Consolidator"
      description="Agrégez et centralisez toutes vos sources d'actualité pour rester informé des tendances de votre secteur."
      icon={Newspaper}
      status="coming-soon"
      features={[
        "Agrégation de flux RSS",
        "Filtrage par thématique et mots-clés",
        "Sauvegarde d'articles",
        "Partage direct vers le calendrier",
        "Résumés automatiques (IA)",
        "Newsletters personnalisées",
        "Détection des tendances virales",
        "Sources configurables",
      ]}
    />
  );
}
