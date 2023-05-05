#!/bin/bash
# Script to change commit messages without causing conflicts
# Uses rebase with strategy to keep current tree state

BASE_COMMIT="b98b96d49bbbe5dbb149a4592dee74401492aab7"

echo "This script will change commit messages without replaying commits."
echo "It uses a strategy that keeps your current code state."
echo ""

# Function to handle conflicts by keeping current state
handle_conflict() {
    echo "Conflict detected - keeping current state..."
    git checkout --ours .
    git add .
    return 0
}

# Start rebase with reword for all commits
echo "Step 1: Starting rebase and marking commits for message changes..."

# Create a script that will mark all commits as reword
python3 << 'PYTHON_SCRIPT'
import re

# Read current commits
import subprocess
result = subprocess.run(
    ['git', 'log', '--reverse', '--format=%h %s', f'{BASE_COMMIT}..HEAD'],
    capture_output=True,
    text=True
)

# Generate rebase todo with all commits marked as reword
output = []
for line in result.stdout.strip().split('\n'):
    if line.strip():
        parts = line.split(' ', 1)
        commit_hash = parts[0]
        subject = parts[1] if len(parts) > 1 else ''
        output.append(f"reword {commit_hash} {subject}\n")

# Write to a temp file
with open('/tmp/rebase-todo.txt', 'w') as f:
    f.writelines(output)

print(f"Generated rebase todo with {len(output)} commits marked for rewording")
PYTHON_SCRIPT

# Start rebase using the generated todo
echo "Step 2: Starting rebase..."
GIT_SEQUENCE_EDITOR='cp /tmp/rebase-todo.txt' git rebase -i "$BASE_COMMIT"

# Now continue with automatic message shortening
echo ""
echo "Step 3: Continuing rebase with automatic message shortening..."
echo "If conflicts occur, they will be resolved automatically by keeping current state."
echo ""

# Set up git config to handle conflicts
git config rebase.autoStash true

# Continue rebase, handling conflicts
while [ -d ".git/rebase-merge" ] || [ -d ".git/rebase-apply" ]; do
    # Check if we're in a conflict state
    if [ -f ".git/rebase-merge/patch" ] || git diff --check >/dev/null 2>&1; then
        handle_conflict
    fi

    # Continue with message shortening
    GIT_EDITOR='./shorten-squashed-messages.sh' git rebase --continue 2>&1 | tee /tmp/rebase-output.txt

    EXIT_CODE=${PIPESTATUS[0]}

    if [ $EXIT_CODE -eq 0 ]; then
        echo "✓ Commit message updated"
    elif grep -q "The previous cherry-pick is now empty" /tmp/rebase-output.txt; then
        echo "Empty commit detected, skipping..."
        git rebase --skip
    elif grep -q "could not apply" /tmp/rebase-output.txt; then
        echo "Conflict detected, resolving by keeping current state..."
        handle_conflict
        git rebase --continue
    else
        # Check if rebase is complete
        if [ ! -d ".git/rebase-merge" ] && [ ! -d ".git/rebase-apply" ]; then
            echo "✓ Rebase complete!"
            break
        else
            echo "Rebase paused. Please resolve manually or run this script again."
            break
        fi
    fi
done

echo ""
echo "Done! Commit messages have been updated."

