#!/bin/bash

echo "🎮 Tetris - Script de création du .dmg pour macOS"
echo "=================================================="
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé."
    echo "📥 Installez Node.js depuis https://nodejs.org/"
    echo "   Ou utilisez Homebrew: brew install node"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Vérifier si nous sommes sur macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "⚠️  Attention: Vous n'êtes pas sur macOS."
    echo "   La création d'un .dmg nécessite macOS."
    echo "   Vous pouvez quand même tester l'application avec 'npm start'"
    echo ""
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo ""
echo "✅ Dépendances installées avec succès!"
echo ""

# Menu de choix
echo "Que voulez-vous faire ?"
echo "1. Tester l'application (npm start)"
echo "2. Créer le fichier .dmg (npm run build-dmg)"
echo "3. Créer l'application .app (npm run package-mac)"
echo "4. Quitter"
echo ""
read -p "Votre choix (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Lancement de l'application..."
        npm start
        ;;
    2)
        if [[ "$OSTYPE" != "darwin"* ]]; then
            echo "❌ Vous devez être sur macOS pour créer un .dmg"
            exit 1
        fi
        echo ""
        echo "🔨 Création du fichier .dmg..."
        npm run build-dmg
        echo ""
        if [ $? -eq 0 ]; then
            echo "✅ Le fichier .dmg a été créé dans le dossier dist/"
            echo "📁 Ouvrez le dossier dist/ pour trouver votre .dmg"
            open dist/ 2>/dev/null || true
        else
            echo "❌ Erreur lors de la création du .dmg"
        fi
        ;;
    3)
        if [[ "$OSTYPE" != "darwin"* ]]; then
            echo "❌ Vous devez être sur macOS pour créer une application .app"
            exit 1
        fi
        echo ""
        echo "🔨 Création de l'application .app..."
        npm run package-mac
        echo ""
        if [ $? -eq 0 ]; then
            echo "✅ L'application a été créée!"
            echo "📁 Vous pouvez la trouver dans le dossier Tetris-darwin-x64/"
            open . 2>/dev/null || true
        else
            echo "❌ Erreur lors de la création de l'application"
        fi
        ;;
    4)
        echo "👋 Au revoir!"
        exit 0
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac
