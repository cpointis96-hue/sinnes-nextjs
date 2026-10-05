#!/bin/sh
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  printf '%s\n' 'Installez Node.js LTS depuis https://nodejs.org/ puis relancez ce fichier.'
else
  node scripts/ouvrir-local.mjs
fi
printf '%s\n' 'Appuyez sur Entrée pour fermer cette fenêtre.'
read -r answer
