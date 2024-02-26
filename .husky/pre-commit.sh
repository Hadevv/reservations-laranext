# Récupère la liste des fichiers modifiés
changed_files=$(git diff --cached --name-only)

# Vérifie s'il y a des fichiers modifiés dans le backend
backend_changes=$(echo "$changed_files" | grep "^backend/")

# Vérifie s'il y a des fichiers modifiés dans le frontend
frontend_changes=$(echo "$changed_files" | grep "^frontend/")

# Empêche les commits contenant à la fois du backend et du frontend
if [ -n "$backend_changes" ] && [ -n "$frontend_changes" ]; then
  echo "Erreur : Ne committez pas du backend et du frontend en même temps."
  exit 1
fi

# Ajoute automatiquement [backend] ou [frontend] au message de commit
if [ -n "$backend_changes" ]; then
  sed -i.bak '1s/^/[backend] /' "$1"
fi

if [ -n "$frontend_changes" ]; then
  sed -i.bak '1s/^/[frontend] /' "$1"
fi

exit 0
