#!/bin/bash

# Check if environment variables are set
if [ -z "$PHONE" ]; then
  echo "Error: PHONE environment variable not set"
  exit 1
fi

if [ -z "$EMAIL" ]; then
  echo "Error: EMAIL environment variable not set"
  exit 1
fi

# Create output filename with date
OUTPUT_FILE="./out/sam_cullin_resume.md"

# Generate new resume with real contact info without modifying the original
cat resume.md | \
  sed "s|\[+61000000000\](tel:+61000000000)|[$PHONE](tel:${PHONE// /})|g" | \
  sed "s|\[sam@example\.com\](mailto:sam@example\.com)|[$EMAIL](mailto:$EMAIL)|g" \
  > "$OUTPUT_FILE"


resume-md --input "$OUTPUT_FILE" --output "./out/index.html"