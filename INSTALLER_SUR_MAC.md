# 🎮 Comment installer Tetris sur Mac

## 🚀 Méthode Rapide (Recommandée)

### Option 1 : Application simple (sans installation)

Le dossier `Tetris.app` est déjà prêt !

1. **Copiez** le dossier `Tetris.app` sur votre Mac
2. **Faites glisser** `Tetris.app` dans votre dossier **Applications**
3. **Double-cliquez** sur Tetris.app pour jouer !

> ⚠️ Si macOS bloque l'application : Allez dans **Préférences Système > Sécurité et confidentialité** et cliquez sur "Ouvrir quand même"

---

## 💎 Méthode Professionnelle : Créer un vrai fichier .dmg

### Étape 1 : Installer Node.js

1. Téléchargez Node.js depuis : **https://nodejs.org/**
2. Installez-le (double-cliquez sur le fichier téléchargé)

Ou utilisez Homebrew dans le Terminal :
```bash
brew install node
```

### Étape 2 : Créer le .dmg

1. Ouvrez le **Terminal** (Cmd + Espace, tapez "Terminal")

2. Naviguez vers le dossier tetris-electron :
```bash
cd ~/Downloads/Maxime822405.github.io/tetris-electron
```
*(Ajustez le chemin selon l'emplacement de vos fichiers)*

3. Exécutez le script automatique :
```bash
./build-dmg.sh
```

4. Choisissez l'option **2** pour créer le .dmg

5. Le fichier .dmg sera créé dans le dossier **dist/**

### Étape 3 : Installer depuis le .dmg

1. Double-cliquez sur le fichier **.dmg** dans le dossier **dist/**
2. Faites glisser l'icône **Tetris** vers le dossier **Applications**
3. Éjectez le .dmg
4. Lancez Tetris depuis vos Applications !

---

## 🎯 Contrôles du jeu

| Touche | Action |
|--------|--------|
| ← → | Déplacer la pièce |
| ↓ | Descendre plus vite |
| ↑ | Rotation |
| ESPACE | Chute rapide |
| P | Pause/Reprendre |

---

## 📦 Structure des fichiers

```
Maxime822405.github.io/
├── index.html                  # Jeu web (double-cliquez pour jouer)
├── Tetris.app/                 # Application Mac simple
└── tetris-electron/            # Projet Electron pour créer le .dmg
    ├── build-dmg.sh           # Script automatique
    ├── package.json           # Configuration
    ├── main.js                # Code de l'application
    ├── index.html             # Jeu
    └── README.md              # Documentation détaillée
```

---

## 🔍 Quelle méthode choisir ?

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **index.html** | Instantané, aucune installation | S'ouvre dans le navigateur |
| **Tetris.app** | Application native, rapide | Pas d'installateur |
| **Fichier .dmg** | Professionnel, facile à distribuer | Nécessite Node.js |

---

## 🆘 Besoin d'aide ?

### "build-dmg.sh" ne fonctionne pas

Rendez-le exécutable :
```bash
chmod +x build-dmg.sh
./build-dmg.sh
```

### "command not found: node"

Installez Node.js : **https://nodejs.org/**

### L'application est bloquée par macOS

1. Ouvrez **Préférences Système**
2. Allez dans **Sécurité et confidentialité**
3. Cliquez sur **Ouvrir quand même**

---

## 🎮 Bon jeu !

**Développé par Maxime** | Version 1.0
