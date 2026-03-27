import { CalendarDays } from "lucide-react";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata = {
  title: "Content Calendar | CMS Dashboard",
};

export default function CalendarPage() {
  return (
    <PagePlaceholder
      title="Content Calendar"
      description="Planifiez et organisez votre stratégie de contenu sur un calendrier éditorial visuel et intuitif."
      icon={CalendarDays}
      status="coming-soon"
      features={[
        "Vue mensuelle, hebdomadaire et journalière",
        "Drag & drop des publications",
        "Codes couleur par type de contenu",
        "Gestion des brouillons",
        "Rappels et notifications",
        "Collaboration en équipe",
        "Synchronisation multi-plateformes",
        "Modèles de planning récurrents",
      ]}
    />
  );
}
