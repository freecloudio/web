#!/bin/sh

echo "Github Token is: $1"

GH_TOKEN="d87870d38f759311b3c970af4a966fb5af98822e"

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git checkout -b master
git add --force --all build 
MESSAGE="CI build: $(git log --format=%B -n 1 $TRAVIS_COMMIT)"
git commit --message "$MESSAGE"
git remote add origin-deploy "https://freecloud-bot:$GH_TOKEN@github.com/freecloudio/web.git" > /dev/null 2>&1
git push --quiet origin-deploy master
