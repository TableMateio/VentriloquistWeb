#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline');

// Read .env file
const envContent = fs.readFileSync('.env', 'utf8');

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach((line) => {
  // Skip comments and empty lines
  if (line.startsWith('#') || !line.trim()) {
    return;
  }

  // Parse key=value
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();

    // Remove surrounding quotes if present
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.substring(1, value.length - 1);
    }

    envVars[key] = value;
  }
});

// Generate a timestamp
const timestamp = new Date().toISOString().replace(/[:.-]/g, '_');

// Create a Vercel project.json file with all environment variables
const projectConfig = {
  projectId: 'prj_your_vercel_project_id', // This will be replaced
  orgId: 'org_your_vercel_org_id', // This will be replaced
  settings: {
    env: Object.entries(envVars).map(([key, value]) => ({
      key: key,
      value: value,
      target: ['production', 'preview', 'development'],
      type: key.startsWith('NEXT_PUBLIC_') ? 'plain' : 'secret',
    })),
  },
};

// Write the file
const outputFile = `vercel-env-${timestamp}.json`;
fs.writeFileSync(outputFile, JSON.stringify(projectConfig, null, 2));

console.log(`\x1b[32mEnvironment variables written to ${outputFile}\x1b[0m`);
console.log(`\x1b[33mTo apply these variables to your Vercel project:\x1b[0m`);
console.log(`1. Run: vercel project ls`);
console.log(`2. Note your project ID and org ID`);
console.log(`3. Edit ${outputFile} and update projectId and orgId`);
console.log(`4. Run: vercel project update --env-file ${outputFile}`);

// Try to get project ID from .vercel/project.json
try {
  if (fs.existsSync('.vercel/project.json')) {
    const projectJson = JSON.parse(
      fs.readFileSync('.vercel/project.json', 'utf8')
    );

    // Replace placeholders with actual values
    const updatedConfig = JSON.stringify(projectConfig, null, 2)
      .replace('"prj_your_vercel_project_id"', `"${projectJson.projectId}"`)
      .replace('"org_your_vercel_org_id"', `"${projectJson.orgId}"`);

    fs.writeFileSync(outputFile, updatedConfig);

    console.log(
      `\x1b[32mAuto-detected project ID: ${projectJson.projectId}\x1b[0m`
    );
    console.log(`\x1b[32mAuto-detected org ID: ${projectJson.orgId}\x1b[0m`);
    console.log(`\x1b[32mRun this command to import all variables:\x1b[0m`);
    console.log(`vercel env import ${outputFile}`);
  }
} catch (error) {
  console.error('Error detecting project info:', error.message);
}
