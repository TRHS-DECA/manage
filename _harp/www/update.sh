#!/bin/bash

echo "Compiling assets...";
harp compile _harp;
echo "Assets compiled!";
git add .;
git commit -m "$1";
git push origin gh-pages;
echo "Change: $1";
echo "pushed to server!";