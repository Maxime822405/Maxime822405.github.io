import {
  Instagram,
  BarChart3,
  CalendarDays,
  Users,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  {
    label: "Instagram Manager",
    href: "/instagram",
    icon: Instagram,
    description: "Gérez vos publications Instagram",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    description: "Suivez vos performances",
  },
  {
    label: "Content Calendar",
    href: "/calendar",
    icon: CalendarDays,
    description: "Planifiez votre contenu",
  },
  {
    label: "Competitor Tracker",
    href: "/competitors",
    icon: Users,
    description: "Analysez la concurrence",
  },
  {
    label: "News Consolidator",
    href: "/news",
    icon: Newspaper,
    description: "Centralisez vos sources d'info",
  },
];
