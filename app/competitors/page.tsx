import { Users } from "lucide-react";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata = {
  title: "Competitor Tracker | CMS Dashboard",
};

export default function CompetitorsPage() {
  return (
    <PagePlaceholder
      title="Competitor Tracker"
      description="Surveillez et analysez la stratégie de contenu de vos concurrents pour affiner votre positionnement."
      icon={Users}
      status="coming-soon"
      features={[
        "Suivi de comptes concurrents",
        "Analyse de leur fréquence de publication",
        "Benchmark d'engagement",
        "Détection des tendances",
        "Historique des publications",
        "Alertes sur leurs nouveaux posts",
        "Rapport de positionnement",
        "Identification des hashtags populaires",
      ]}
    />
  );
}
