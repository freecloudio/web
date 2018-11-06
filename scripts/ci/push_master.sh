#!/bin/sh

echo "Github Token is: $1"

GH_TOKEN=$1

git config --global user.email "freecloud.bot@gmail.com"
git config --global user.name "freecloud-bot"

git checkout -b master
git add --force --all build 
MESSAGE="CI build: $(git log --format=%B -n 1 $TRAVIS_COMMIT)"
git commit --message "$MESSAGE"
git remote add origin-deploy "https://freecloud-bot:$GH_TOKEN@github.com/freecloudio/web.git" > /dev/null 2>&1
git push --quiet origin-deploy master
