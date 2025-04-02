'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { Card } from '@repo/design-system/components/ui/card';
import { useCallback, useState } from 'react';

type Screenshot = {
  fullPage: string;
  viewport: string;
  timestamp: string;
};

export default function ScreenshotsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);

  const takeScreenshot = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Use the direct API route that bypasses the locale middleware
      const response = await fetch('/direct-api/screenshot');

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to take screenshot: ${errorText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const newScreenshot: Screenshot = {
        fullPage: data.fullPage,
        viewport: data.viewport,
        timestamp: data.timestamp,
      };

      setScreenshots((prev) => [newScreenshot, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-refresh every 10 seconds if the server is running
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isLoading) {
  //       takeScreenshot();
  //     }
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [isLoading, takeScreenshot]);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-10 flex flex-col items-center justify-center">
        <h1 className="mb-6 font-bold text-4xl">Ventriloquist Screenshots</h1>
        <p className="mb-8 text-lg text-white/80">
          Take screenshots of the local development server to monitor UI changes
        </p>

        <Button onClick={takeScreenshot} disabled={isLoading} size="lg">
          {isLoading ? 'Taking Screenshot...' : 'Take Screenshot Now'}
        </Button>

        {error && (
          <div className="mt-4 rounded bg-red-500/20 p-4 text-red-200">
            <p>{error}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <Card
            key={index}
            className="overflow-hidden border-white/10 bg-white/5 p-4"
          >
            <div className="mb-4 flex flex-col">
              <h3 className="mb-2 font-bold">
                Screenshot from{' '}
                {new Date(screenshot.timestamp).toLocaleString()}
              </h3>
              <div className="flex gap-2 text-white/60 text-xs">
                <span>Full page: {screenshot.fullPage}</span>
                <span>•</span>
                <span>Viewport: {screenshot.viewport}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-sm">Full Page</h4>
                <div className="aspect-video overflow-hidden rounded border border-white/10">
                  <img
                    src={screenshot.fullPage}
                    alt="Full page screenshot"
                    className="h-full w-full object-cover"
                  />
                </div>
                <a
                  href={screenshot.fullPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  Open full size
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-sm">Viewport</h4>
                <div className="aspect-video overflow-hidden rounded border border-white/10">
                  <img
                    src={screenshot.viewport}
                    alt="Viewport screenshot"
                    className="h-full w-full object-cover"
                  />
                </div>
                <a
                  href={screenshot.viewport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  Open full size
                </a>
              </div>
            </div>
          </Card>
        ))}

        {screenshots.length === 0 && !isLoading && (
          <div className="col-span-full rounded border border-white/10 bg-white/5 p-8 text-center text-white/60">
            <p>
              No screenshots yet. Click the button above to take your first
              screenshot.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
