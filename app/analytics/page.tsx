import { BarChart3 } from "lucide-react";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata = {
  title: "Analytics | CMS Dashboard",
};

export default function AnalyticsPage() {
  return (
    <PagePlaceholder
      title="Analytics"
      description="Visualisez et analysez les performances de votre contenu sur l'ensemble de vos réseaux sociaux en temps réel."
      icon={BarChart3}
      status="coming-soon"
      features={[
        "Tableaux de bord interactifs",
        "Taux d'engagement et portée",
        "Évolution des abonnés",
        "Analyse des meilleurs horaires",
        "Rapports exportables (PDF / CSV)",
        "Comparaison de périodes",
        "KPIs personnalisables",
        "Alertes et seuils de performance",
      ]}
    />
  );
}
