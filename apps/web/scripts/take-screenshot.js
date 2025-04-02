#!/usr/bin/env node

const { chromium } = require('playwright');
const path = require('node:path');
const fs = require('node:fs');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '../public/screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Get timestamp for filename
const getTimestamp = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
};

async function captureScreenshot() {
  const timestamp = getTimestamp();
  const filename = `screenshot_${timestamp}.png`;
  const filePath = path.join(screenshotsDir, filename);

  console.log('📸 Taking screenshot of localhost app...');

  // Launch browser with proper headless configuration
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();

  try {
    // Try port 3001 first (the one we're usually using)
    await page.goto('http://localhost:3001', {
      waitUntil: 'networkidle',
      timeout: 10000,
    });
    console.log('✅ Connected to localhost:3001');
  } catch (error) {
    console.log(
      '⚠️ Could not connect to localhost:3001, trying localhost:3002...'
    );
    try {
      await page.goto('http://localhost:3002', {
        waitUntil: 'networkidle',
        timeout: 10000,
      });
      console.log('✅ Connected to localhost:3002');
    } catch (secondError) {
      console.error(
        '❌ Failed to connect to both localhost:3001 and localhost:3002'
      );
      await browser.close();
      process.exit(1);
    }
  }

  // Take screenshot of the full page
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`✅ Screenshot saved to: public/screenshots/${filename}`);

  // Also take a screenshot of just the viewport
  const viewportFilePath = path.join(
    screenshotsDir,
    `viewport_${timestamp}.png`
  );
  await page.screenshot({ path: viewportFilePath });
  console.log(
    `✅ Viewport screenshot saved to: public/screenshots/viewport_${timestamp}.png`
  );

  await browser.close();

  return {
    fullPagePath: `/screenshots/${filename}`,
    viewportPath: `/screenshots/viewport_${timestamp}.png`,
  };
}

// Run the function if called directly
if (require.main === module) {
  captureScreenshot()
    .then((paths) => {
      console.log('📊 Screenshot URLs:');
      console.log(`Full page: ${paths.fullPagePath}`);
      console.log(`Viewport: ${paths.viewportPath}`);
    })
    .catch((error) => {
      console.error('Error taking screenshot:', error);
      process.exit(1);
    });
} else {
  // Export for use in API routes
  module.exports = { captureScreenshot };
}
