# CMS Dashboard — Guide de développement

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| Next.js | 14.x | Framework React (App Router) |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 3.x | Styles utilitaires |
| shadcn/ui | latest | Composants UI (Radix UI + CVA) |
| lucide-react | latest | Icônes |

---

## Lancer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

### Autres commandes

```bash
npm run build    # Build de production
npm run start    # Démarrer le build de production
npm run lint     # Linter ESLint
```

---

## Structure des dossiers

```
/
├── app/                        # App Router Next.js
│   ├── layout.tsx              # Layout racine (dark mode, fonts)
│   ├── page.tsx                # Redirection vers /instagram
│   ├── globals.css             # Variables CSS + Tailwind base
│   ├── instagram/
│   │   └── page.tsx            # Instagram Manager
│   ├── analytics/
│   │   └── page.tsx            # Analytics
│   ├── calendar/
│   │   └── page.tsx            # Content Calendar
│   ├── competitors/
│   │   └── page.tsx            # Competitor Tracker
│   └── news/
│       └── page.tsx            # News Consolidator
│
├── components/
│   ├── layout/                 # Composants de mise en page
│   │   ├── MainLayout.tsx      # Wrapper principal (Sidebar + Header + main)
│   │   ├── Sidebar.tsx         # Navigation latérale
│   │   ├── Header.tsx          # Barre supérieure
│   │   └── nav-items.ts        # Configuration des items de navigation
│   ├── shared/                 # Composants partagés entre pages
│   │   └── PagePlaceholder.tsx # Template de page placeholder
│   └── ui/                     # Composants shadcn/ui
│       ├── button.tsx
│       ├── badge.tsx
│       ├── separator.tsx
│       └── scroll-area.tsx
│
├── lib/
│   └── utils.ts                # Helper cn() pour Tailwind merge
│
├── public/                     # Assets statiques
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Conventions

### Nommage

- **Composants** : PascalCase (`Sidebar.tsx`, `PagePlaceholder.tsx`)
- **Utilitaires / configs** : camelCase (`nav-items.ts`, `utils.ts`)
- **Pages** : `page.tsx` (convention App Router)
- **Layouts** : `layout.tsx`

### Composants

- Les composants client (`"use client"`) sont déclarés explicitement
- Les composants serveur sont la valeur par défaut (pas de directive)
- Props typées avec des `interface` TypeScript
- Exports nommés pour les composants (pas d'export default sauf pour les pages)

### Styles

- Tailwind CSS pour tous les styles
- Variables CSS pour les tokens de couleur (définis dans `globals.css`)
- `cn()` (via `clsx` + `tailwind-merge`) pour les classes conditionnelles
- Dark mode activé par défaut via la classe `dark` sur `<html>`

### Ajout de composants shadcn/ui

Pour ajouter un nouveau composant shadcn/ui :

```bash
npx shadcn-ui@latest add <component-name>
# Exemple : npx shadcn-ui@latest add dialog
```

Les composants sont générés dans `components/ui/`.

---

## Ajouter une nouvelle page

1. Créer le dossier `app/<nom-page>/`
2. Créer `app/<nom-page>/page.tsx`
3. Ajouter l'entrée dans `components/layout/nav-items.ts`

```ts
// nav-items.ts
{
  label: "Ma Page",
  href: "/ma-page",
  icon: MonIcone,
  description: "Description courte",
}
```

---

## Thème

Le thème sombre est activé par défaut (classe `dark` sur `<html>` dans `layout.tsx`).

Les variables CSS de couleur sont définies dans `app/globals.css` pour les deux modes (`:root` pour le light, `.dark` pour le dark).
