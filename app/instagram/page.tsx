import { Instagram } from "lucide-react";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata = {
  title: "Instagram Manager | CMS Dashboard",
};

export default function InstagramPage() {
  return (
    <PagePlaceholder
      title="Instagram Manager"
      description="Créez, planifiez et gérez l'ensemble de vos publications Instagram depuis une interface centralisée."
      icon={Instagram}
      status="in-progress"
      features={[
        "Planification des posts et reels",
        "Prévisualisation du feed Instagram",
        "Gestion des hashtags et captions",
        "Statistiques d'engagement par publication",
        "Intégration Instagram Graph API",
        "Upload et gestion des médias",
        "Stories et highlights",
        "Auto-posting programmé",
      ]}
    />
  );
}
