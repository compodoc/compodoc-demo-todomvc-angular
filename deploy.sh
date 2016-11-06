#!/usr/bin/env bash

GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -p -e "require('./package.json').repository.url")}

cd documentation && \

sed -i 's/base href="\/"/base href="https:\/\/compodoc.github.io\/compodoc-demo-todomvc-angular2\/"/g' **/*.html

rm -R .git
git init && \

git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \

git add . && \
git commit -m "Deploy to GitHub Pages" && \

git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
