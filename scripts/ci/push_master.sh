#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_client_files() {
  git checkout -b master
  git add --force --all build 
  MESSAGE="CI build: $(git log --format=%B -n 1 $TRAVIS_COMMIT)"
  git commit --message "$MESSAGE"
  git remote add origin-pages https://${GH_TOKEN}@github.com/freecloudio/web.git > /dev/null 2&>1
	git push --quiet origin master
}

setup_git
commit_client_files
