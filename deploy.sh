#!/bin/zsh
echo "$PWD"
cd front-end
echo "$PWD"
npm run build
cp -r ./public/img ../back-end/public/
cp ./bundle/index_bundle.js ../back-end/public/
