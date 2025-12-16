#!/bin/bash

# Exit if not a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Not a git repository"
  exit 1
fi

# Check if there are changes
if git diff --quiet && git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

# Get current branch
BRANCH=$(git branch --show-current)

# Generate commit message based on changes
CHANGED_FILES=$(git status --short)

COMMIT_MESSAGE="Auto update: $(date '+%Y-%m-%d %H:%M')

Changes:
$CHANGED_FILES"

# Stage all changes
git add .

# Commit
git commit -m "$COMMIT_MESSAGE"

# Push
git push origin "$BRANCH"

echo "Code pushed successfully to $BRANCH"
