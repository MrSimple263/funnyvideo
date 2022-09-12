#!/bin/zsh
echo "$PWD"
rm rm -rf back-end/public/img
rm rm -rf back-end/public/index_bundle.js
cd front-end
echo "$PWD"
npm run build
cp -r ./public/img ../back-end/public/
cp -r ./bundle/index_bundle.js ../back-end/public/
git add back-end/public/*
now=$(date +"%T")
git commit -m "deploy $now"
git subtree push --prefix back-end heroku master
