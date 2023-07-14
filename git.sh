#!/bin/bash

git add .
git commit -m "New checkpoint! $(date '+%a %H:%M %h %d %Y')"
git push -u origin main