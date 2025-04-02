import { exec } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';
import { NextResponse } from 'next/server';

const execAsync = promisify(exec);

// This route triggers the screenshot script and returns the URLs to the screenshots
export async function GET() {
  try {
    // Determine path to the screenshot script
    const scriptPath = path.join(
      process.cwd(),
      'scripts',
      'take-screenshot.js'
    );

    // Execute the script
    console.log(`Running screenshot script at ${scriptPath}`);
    const { stdout, stderr } = await execAsync(`node ${scriptPath}`);

    if (stderr && !stderr.includes('Browsing context')) {
      console.error('Error from screenshot script:', stderr);
      return NextResponse.json(
        {
          error: 'Failed to take screenshot',
          details: stderr,
        },
        { status: 500 }
      );
    }

    console.log('Screenshot script output:', stdout);

    // Parse the output to get screenshot paths
    const fullPageMatch = stdout.match(
      /Full page: (\/screenshots\/screenshot_[.\w-]+\.png)/
    );
    const viewportMatch = stdout.match(
      /Viewport: (\/screenshots\/viewport_[.\w-]+\.png)/
    );

    const fullPagePath = fullPageMatch ? fullPageMatch[1] : null;
    const viewportPath = viewportMatch ? viewportMatch[1] : null;

    // Return the paths to the screenshots
    return NextResponse.json({
      success: true,
      message: 'Screenshots created successfully',
      fullPage: fullPagePath,
      viewport: viewportPath,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to take screenshot:', error);
    return NextResponse.json(
      {
        error: 'Failed to take screenshot',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// This prevents the API route from being affected by the locale middleware
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const fetchCache = 'default-no-store';
