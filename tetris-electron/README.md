# 🎮 Tetris Game - Application macOS

Cette application Electron vous permet de créer un véritable fichier .dmg pour installer Tetris sur Mac.

## 📋 Prérequis

- **Node.js** version 16 ou supérieure
- **npm** (installé avec Node.js)
- **macOS** (pour créer le fichier .dmg)

## 🚀 Installation

### 1. Installer Node.js sur Mac

Si vous n'avez pas Node.js, téléchargez-le depuis : https://nodejs.org/

Ou utilisez Homebrew :
```bash
brew install node
```

### 2. Installer les dépendances

Ouvrez le Terminal, naviguez vers ce dossier et exécutez :

```bash
cd tetris-electron
npm install
```

Cela installera Electron et les outils de packaging.

## 🎮 Tester l'application

Pour tester l'application avant de créer le .dmg :

```bash
npm start
```

L'application Tetris s'ouvrira dans une fenêtre native.

## 📦 Créer le fichier .dmg

### Méthode 1 : Créer un .dmg complet (recommandé)

```bash
npm run build-dmg
```

Le fichier .dmg sera créé dans le dossier `dist/` avec un installateur professionnel.

### Méthode 2 : Créer une application .app

```bash
npm run package-mac
```

Cela créera un dossier `Tetris-darwin-x64` contenant l'application `Tetris.app`.

### Méthode 3 : Build complet

```bash
npm run build-mac
```

Cela créera plusieurs formats incluant .dmg et .zip dans le dossier `dist/`.

## 📥 Installer l'application

Une fois le .dmg créé :

1. Double-cliquez sur le fichier `.dmg` dans le dossier `dist/`
2. Faites glisser l'icône Tetris vers le dossier Applications
3. Éjectez le .dmg
4. Lancez Tetris depuis le dossier Applications

## 🎯 Contrôles du jeu

- **← →** : Déplacer la pièce
- **↓** : Descendre plus vite
- **↑** : Rotation
- **ESPACE** : Chute rapide
- **P** : Pause/Reprendre
- **Cmd+N** : Nouvelle partie
- **Cmd+Q** : Quitter

## 🔧 Personnalisation

### Changer l'icône

1. Créez une icône `.icns` (macOS)
2. Remplacez `icon.icns` dans ce dossier
3. Reconstruisez l'application

### Modifier l'apparence du .dmg

Éditez la section `dmg` dans `package.json` pour personnaliser :
- La taille de la fenêtre
- L'image de fond
- La position des icônes

## 📝 Notes

- Le fichier .dmg ne peut être créé que sur macOS
- Pour créer des applications Windows (.exe) ou Linux, utilisez les commandes appropriées d'electron-builder
- L'application finale sera signée si vous avez un certificat de développeur Apple

## 🐛 Dépannage

### "command not found: npm"
Installez Node.js depuis https://nodejs.org/

### Erreurs de permissions
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

### L'application ne se lance pas
Vérifiez que toutes les dépendances sont installées :
```bash
npm install
```

## 📧 Support

Pour toute question, ouvrez une issue sur GitHub.

---

**Développé par Maxime** | Version 1.0
