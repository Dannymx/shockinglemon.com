#!/bin/bash
# Script to automatically shorten squashed commit messages
# This handles commits that have multiple messages combined (from squashing)

COMMIT_MSG_FILE="$1"

if [ ! -f "$COMMIT_MSG_FILE" ]; then
    echo "Error: Commit message file not found: $COMMIT_MSG_FILE"
    exit 1
fi

# Read the commit message
MESSAGE=$(cat "$COMMIT_MSG_FILE")

# Extract the first line (subject)
FIRST_LINE=$(echo "$MESSAGE" | head -n 1)

# Check if this looks like a squashed renovate commit
# (has multiple "chore(deps):" or "fix(deps):" lines)
LINES_COUNT=$(echo "$MESSAGE" | grep -cE "^(chore|fix)\(deps\):" || echo "0")

if [ "$LINES_COUNT" -gt 1 ]; then
    # This is a squashed renovate commit with multiple messages
    # Create a shorter summary
    PACKAGE_COUNT=$((LINES_COUNT))

    # Check if there are any security updates
    HAS_SECURITY=$(echo "$MESSAGE" | grep -qi "\[security\]" && echo "yes" || echo "no")

    # Get the first (most important) message as base
    FIRST_MSG=$(echo "$MESSAGE" | grep -E "^(chore|fix)\(deps\):" | head -n 1)

    # Extract the type and package from first message
    if echo "$FIRST_MSG" | grep -q "\[security\]"; then
        # Security update - keep that in the message
        PACKAGE=$(echo "$FIRST_MSG" | sed -E 's/^(chore|fix)\(deps\): update (dependency |nextjs )?//' | sed -E 's/ to v[0-9.]+.*$//' | sed -E 's/ monorepo$//')
        if [ "$PACKAGE_COUNT" -eq 1 ]; then
            SHORT_SUBJECT="fix(deps): update $PACKAGE [security]"
        else
            SHORT_SUBJECT="fix(deps): update $PACKAGE_COUNT dependencies [security]"
        fi
    else
        # Regular dependency updates
        if [ "$PACKAGE_COUNT" -le 3 ]; then
            # List the packages if few
            PACKAGES=$(echo "$MESSAGE" | grep -E "^(chore|fix)\(deps\):" | \
                sed -E 's/^(chore|fix)\(deps\): update (dependency |nextjs )?//' | \
                sed -E 's/ to v[0-9.]+.*$//' | \
                sed -E 's/ monorepo$//' | \
                head -n 3 | tr '\n' ', ' | sed 's/, $//')
            SHORT_SUBJECT="chore(deps): update $PACKAGES"
        else
            SHORT_SUBJECT="chore(deps): update $PACKAGE_COUNT dependencies"
        fi
    fi

    # Limit to 72 characters
    if [ ${#SHORT_SUBJECT} -gt 72 ]; then
        SHORT_SUBJECT=$(echo "$SHORT_SUBJECT" | cut -c 1-69)
        SHORT_SUBJECT=$(echo "$SHORT_SUBJECT" | sed 's/[^ ]*$//' | sed 's/[ ]*$//')
        SHORT_SUBJECT="${SHORT_SUBJECT}..."
    fi

    # Write the shortened message
    echo "$SHORT_SUBJECT" > "$COMMIT_MSG_FILE"
else
    # Single commit message - just shorten if needed
    SUBJECT=$(echo "$MESSAGE" | head -n 1)

    if [ ${#SUBJECT} -gt 72 ]; then
        # Shorten the subject
        SHORT_SUBJECT=$(echo "$SUBJECT" | cut -c 1-69)
        SHORT_SUBJECT=$(echo "$SHORT_SUBJECT" | sed 's/[^ ]*$//' | sed 's/[ ]*$//')
        SHORT_SUBJECT="${SHORT_SUBJECT}..."

        echo "$SHORT_SUBJECT" > "$COMMIT_MSG_FILE"

        # Add body if original had one
        BODY=$(echo "$MESSAGE" | tail -n +2 | sed '/^$/d' | head -n 3)
        if [ -n "$BODY" ]; then
            echo "" >> "$COMMIT_MSG_FILE"
            echo "$BODY" | head -n 2 >> "$COMMIT_MSG_FILE"
        fi
    else
        # Message is already short enough, keep as is
        echo "$MESSAGE" > "$COMMIT_MSG_FILE"
    fi
fi
