#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add .
git add dist -f
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -