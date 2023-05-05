#!/bin/bash
# Script to mark commits with long messages for rewording in an active rebase

MAX_LENGTH=72

if [ ! -f ".git/rebase-merge/git-rebase-todo" ]; then
    echo "Error: No rebase in progress. Please start a rebase first:"
    echo "  git rebase -i b98b96d49bbbe5dbb149a4592dee74401492aab7"
    exit 1
fi

echo "Marking commits with messages longer than $MAX_LENGTH characters for rewording..."

python3 << 'PYTHON_SCRIPT'
import re
import subprocess

MAX_LENGTH = 72

# Read the current todo file
with open('.git/rebase-merge/git-rebase-todo', 'r') as f:
    lines = f.readlines()

# Process lines
output = []
long_count = 0

for line in lines:
    match = re.match(r'^(pick|squash|fixup|edit|reword|drop)\s+([a-f0-9]+)', line)
    if match:
        command = match.group(1)
        commit_hash = match.group(2)

        # Get full commit message (subject + body)
        try:
            result = subprocess.run(
                ['git', 'log', '-1', '--format=%s%n%b', commit_hash],
                capture_output=True,
                text=True,
                timeout=5
            )
            full_message = result.stdout.strip()
            subject = full_message.split('\n')[0] if full_message else ""
        except:
            full_message = ""
            subject = ""

        # Count how many dependency update lines are in the message
        deps_lines = len([line for line in full_message.split('\n') if 'chore(deps):' in line or 'fix(deps):' in line])

        # Mark for rewording if:
        # 1. Subject is too long, OR
        # 2. Has multiple dependency update lines (squashed renovate commits), OR
        # 3. Full message is very long (> 200 chars indicates multiple lines)
        is_long = (
            len(subject) > MAX_LENGTH or
            deps_lines > 1 or
            len(full_message) > 200
        )

        if is_long and command in ['pick', 'squash']:
            if command == 'pick':
                line = re.sub(r'^pick', 'reword', line)
                long_count += 1
            elif command == 'squash':
                # Change squash to reword for long messages
                line = re.sub(r'^squash', 'reword', line)
                long_count += 1

        output.append(line)
    else:
        output.append(line)

# Write back
with open('.git/rebase-merge/git-rebase-todo', 'w') as f:
    f.writelines(output)

print(f"✓ Marked {long_count} commits with long messages for rewording.")
print(f"  (Checked for: long subjects, multiple lines, or multiple dependency updates)")
PYTHON_SCRIPT

echo ""
echo "Done! Review with: git rebase --edit-todo"
echo "Then continue with: git rebase --continue"

