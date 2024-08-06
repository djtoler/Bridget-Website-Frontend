#!/bin/bash

# Prompt the user for a commit message
echo "Enter your commit message:"
read commit_message

# Check if the commit message is empty
if [[ -z "$commit_message" ]]; then
    echo "Commit message cannot be empty."
    exit 1
fi

# Add all changes to the staging area
git add .

# Commit the changes with the provided message
git commit -m "$commit_message"

# Force push the changes to the current branch
git push --force

echo "Changes have been forcefully pushed to the repository."
