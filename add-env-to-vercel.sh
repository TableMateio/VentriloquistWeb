#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Process command line arguments
DRY_RUN=false
FORCE=false
PROJECT=""
SCOPE="tablemateios-projects"

function show_help {
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  --dry-run         Show what would be added without making changes"
  echo "  --force           Overwrite existing variables"
  echo "  --project NAME    Specify the Vercel project name"
  echo "  --scope NAME      Specify the Vercel scope/team (default: tablemateios-projects)"
  echo "  -h, --help        Show this help message"
  echo ""
  exit 0
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run)
      DRY_RUN=true
      echo -e "${YELLOW}Running in dry-run mode. No variables will actually be added.${NC}"
      shift
      ;;
    --force)
      FORCE=true
      echo -e "${YELLOW}Force mode enabled. Will overwrite existing variables.${NC}"
      shift
      ;;
    --project)
      PROJECT="$2"
      echo -e "${YELLOW}Using project: $PROJECT${NC}"
      shift 2
      ;;
    --project=*)
      PROJECT="${1#*=}"
      echo -e "${YELLOW}Using project: $PROJECT${NC}"
      shift
      ;;
    --scope)
      SCOPE="$2"
      echo -e "${YELLOW}Using scope: $SCOPE${NC}"
      shift 2
      ;;
    --scope=*)
      SCOPE="${1#*=}"
      echo -e "${YELLOW}Using scope: $SCOPE${NC}"
      shift
      ;;
    -h|--help)
      show_help
      ;;
    *)
      shift
      ;;
  esac
done

# Check if .env file exists
if [ ! -f .env ]; then
  echo -e "${RED}Error: .env file not found in current directory${NC}"
  exit 1
fi

echo -e "${YELLOW}Reading environment variables from .env file...${NC}"

# Create a temporary directory for project linking
if [ -n "$PROJECT" ]; then
  TMP_DIR=$(mktemp -d)
  echo -e "${YELLOW}Creating temporary directory for project linking: $TMP_DIR${NC}"
  
  # Copy .env file to temp directory
  cp .env "$TMP_DIR"
  
  # Navigate to temp directory and link project
  cd "$TMP_DIR"
  
  echo -e "${YELLOW}Linking project $PROJECT...${NC}"
  if ! vercel link --confirm --scope "$SCOPE" --project "$PROJECT"; then
    echo -e "${RED}Failed to link project. Exiting.${NC}"
    cd - > /dev/null
    rm -rf "$TMP_DIR"
    exit 1
  fi
  
  echo -e "${YELLOW}Project linked successfully.${NC}"
fi

# Get existing variables from Vercel
echo -e "${YELLOW}Fetching existing environment variables from Vercel...${NC}"
EXISTING_VARS=$(vercel env list | grep -v "Created" | awk '{print $1}')

# Initialize counter
added=0
skipped=0
already_exists=0

# Read each line from .env file
while IFS= read -r line || [ -n "$line" ]; do
  # Skip comments and empty lines
  if [[ $line =~ ^# || -z $line || ! $line =~ = ]]; then
    continue
  fi
  
  # Extract key and value
  key=$(echo "$line" | cut -d= -f1)
  value=$(echo "$line" | cut -d= -f2- | sed 's/^"//;s/"$//')
  
  # Skip if key is empty
  if [ -z "$key" ]; then
    continue
  fi
  
  # Check if variable already exists in Vercel
  if echo "$EXISTING_VARS" | grep -q "^$key$" && [ "$FORCE" = false ]; then
    echo -e "${YELLOW}Variable $key already exists in Vercel. Skipping...${NC}"
    ((already_exists++))
    continue
  fi
  
  echo -e "${YELLOW}Adding $key to Vercel...${NC}"
  
  if [ "$DRY_RUN" = true ]; then
    echo -e "${GREEN}[DRY RUN] Would add $key with value: $value${NC}"
    ((added++))
    continue
  fi
  
  # Create a temporary file for non-interactive input
  tmpfile=$(mktemp)
  echo "$value" > "$tmpfile"
  
  # Add environment variable to production, preview, and development
  if vercel env add "$key" production < "$tmpfile"; then
    echo -e "${GREEN}Added $key to production${NC}"
    # Wait a moment to avoid rate limiting
    sleep 1
    
    if vercel env add "$key" preview < "$tmpfile"; then
      echo -e "${GREEN}Added $key to preview${NC}"
      sleep 1
      
      if vercel env add "$key" development < "$tmpfile"; then
        echo -e "${GREEN}Added $key to development${NC}"
        ((added++))
      else
        echo -e "${RED}Failed to add $key to development${NC}"
        ((skipped++))
      fi
    else
      echo -e "${RED}Failed to add $key to preview${NC}"
      ((skipped++))
    fi
  else
    echo -e "${RED}Failed to add $key to production${NC}"
    ((skipped++))
  fi
  
  # Clean up temporary file
  rm "$tmpfile"
  
  # Sleep to avoid rate limiting
  sleep 2
done < .env

if [ "$DRY_RUN" = true ]; then
  echo -e "${GREEN}Dry run complete. Would add $added environment variables to Vercel${NC}"
  if [ $already_exists -gt 0 ]; then
    echo -e "${YELLOW}$already_exists variables already exist in Vercel.${NC}"
  fi
else
  echo -e "${GREEN}Successfully added $added environment variables to Vercel${NC}"
  if [ $skipped -gt 0 ]; then
    echo -e "${YELLOW}Skipped $skipped variables due to errors${NC}"
  fi
  if [ $already_exists -gt 0 ]; then
    echo -e "${YELLOW}$already_exists variables already exist in Vercel. Use --force to overwrite them.${NC}"
  fi
fi

echo -e "${YELLOW}To verify, run: vercel env list${NC}"

# Clean up temporary directory if it exists
if [ -n "$PROJECT" ] && [ -n "$TMP_DIR" ]; then
  echo -e "${YELLOW}Cleaning up temporary directory...${NC}"
  cd - > /dev/null
  rm -rf "$TMP_DIR"
fi 