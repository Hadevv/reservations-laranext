
# .husky/pre-commit.sh

changed_files=$(git diff --cached --name-only)

backend_changes=$(echo "$changed_files" | grep "^packages/laravel-api/")
frontend_changes=$(echo "$changed_files" | grep "^packages/nextjs-frontend/")

if [ -n "$backend_changes" ] && [ -n "$frontend_changes" ]; then
  echo "Erreur : Ne committez pas du backend et du frontend en même temps."
  exit 1
fi

if [ -n "$backend_changes" ]; then
  sed -i.bak '1s/^/[backend] /' "$1"
fi

if [ -n "$frontend_changes" ]; then
  sed -i.bak '1s/^/[frontend] /' "$1"
fi

exit 0

