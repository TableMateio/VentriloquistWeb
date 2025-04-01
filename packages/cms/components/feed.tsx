import type React from 'react';
import type { ReactNode } from 'react';

interface FeedProps {
  children?: ReactNode;
}

// Simple placeholder for the Feed component
export const Feed: React.FC<FeedProps> = ({ children }) => {
  return <>{children}</>;
};
