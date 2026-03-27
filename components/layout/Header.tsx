"use client";

import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./nav-items";

export function Header() {
  const pathname = usePathname();
  const currentPage = navItems.find((item) => item.href === pathname);

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div>
        <h1 className="text-lg font-semibold">
          {currentPage?.label ?? "Dashboard"}
        </h1>
        <p className="text-xs text-muted-foreground">
          {currentPage?.description ?? "Bienvenue sur votre tableau de bord"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          M
        </div>
      </div>
    </header>
  );
}
