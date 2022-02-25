#!/usr/bin/env sh
set -e
npm run build
cd dist
cp index.html 404.html
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Abdolla25/domiat-milit.git master:gh-pages
cd -

# bash deploy.sh