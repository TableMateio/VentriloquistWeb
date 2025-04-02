#!/bin/bash

# Exit on error
set -e

# Define colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

ENV_FILE=".env"
echo "Importing environment variables from $ENV_FILE to Vercel..."

# Check if the .env file exists
if [ ! -f "$ENV_FILE" ]; then
  echo -e "${RED}Error: $ENV_FILE file not found!${NC}"
  exit 1
fi

# Total number of variables
TOTAL=$(grep -v "^#" $ENV_FILE | grep "=" | wc -l)
COUNTER=0

# Create a temporary file for non-interactive input
TEMP_FILE=$(mktemp)

cat > $TEMP_FILE << EOL
yes
production
EOL

# Loop through each line in .env
while IFS= read -r line || [ -n "$line" ]; do
  # Skip comments and empty lines
  if [[ "$line" =~ ^#.*$ ]] || [[ -z "${line// }" ]]; then
    continue
  fi
  
  # Only process lines with an equals sign
  if [[ "$line" == *"="* ]]; then
    # Extract variable name (before the equals sign)
    VAR_NAME=$(echo "$line" | cut -d '=' -f 1)
    
    # Extract variable value (after the equals sign, respecting quotes)
    VAR_VALUE=$(echo "$line" | cut -d '=' -f 2-)
    
    # Remove surrounding quotes if present
    VAR_VALUE=$(echo "$VAR_VALUE" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//")
    
    # Increment counter
    COUNTER=$((COUNTER + 1))
    
    echo -e "[$COUNTER/$TOTAL] Adding ${GREEN}$VAR_NAME${NC}..."
    
    # Run vercel env add with echo to provide input non-interactively
    (echo "$VAR_VALUE"; echo "production") | vercel env add $VAR_NAME
    
    # Sleep for a moment to avoid rate limiting
    sleep 1
  fi
done < "$ENV_FILE"

# Remove temporary file
rm -f $TEMP_FILE

echo -e "${GREEN}Successfully added $COUNTER environment variables to Vercel.${NC}" 