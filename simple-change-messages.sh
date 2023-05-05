#!/bin/bash
# Simple script to change commit messages without conflicts
# Uses rebase but keeps current tree state to avoid conflicts

BASE_COMMIT="b98b96d49bbbe5dbb149a4592dee74401492aab7"

echo "Starting rebase to change commit messages only..."
echo "This will keep your current code state to avoid conflicts."
echo ""

# Start interactive rebase
echo "Step 1: Starting interactive rebase..."
echo "When the editor opens, save and close it (we'll modify it next)."
echo "Press Enter to continue..."
read

git rebase -i "$BASE_COMMIT"

# Check if rebase started
if [ ! -f ".git/rebase-merge/git-rebase-todo" ]; then
    echo "Rebase not started or already complete."
    exit 1
fi

# Mark long commits for rewording
echo ""
echo "Step 2: Marking commits with long messages for rewording..."
./mark-long-commits.sh

echo ""
echo "Step 3: Continue the rebase."
echo "When Git stops to edit a message, it will be automatically shortened."
echo ""
echo "If you encounter conflicts, run these commands:"
echo "  git checkout --ours ."
echo "  git add ."
echo "  GIT_EDITOR='./shorten-squashed-messages.sh' git rebase --continue"
echo ""
echo "Or to continue automatically:"
echo "  GIT_EDITOR='./shorten-squashed-messages.sh' git rebase --continue"
echo ""
echo "Starting automatic continuation..."

# Continue rebase with conflict resolution
while [ -d ".git/rebase-merge" ] || [ -d ".git/rebase-apply" ]; do
    # Check for conflicts
    if [ -f ".git/rebase-merge/patch" ] || git diff --check >/dev/null 2>&1 || [ -n "$(git ls-files -u)" ]; then
        echo "Resolving conflict by keeping current state..."
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
    fi

    # Continue with message shortening
    GIT_EDITOR='./shorten-squashed-messages.sh' git rebase --continue 2>&1

    EXIT_CODE=$?

    if [ $EXIT_CODE -eq 0 ]; then
        echo "✓ Commit message updated, continuing..."
    else
        # Check if rebase is complete
        if [ ! -d ".git/rebase-merge" ] && [ ! -d ".git/rebase-apply" ]; then
            echo "✓ Rebase complete!"
            break
        else
            echo ""
            echo "Rebase paused. Run this to continue:"
            echo "  git checkout --ours . && git add . && GIT_EDITOR='./shorten-squashed-messages.sh' git rebase --continue"
            break
        fi
    fi
done

