#!/bin/bash

rm -rf dist

tsc

eval "git add -A"

git status

git commit -m "New commit"

git push
