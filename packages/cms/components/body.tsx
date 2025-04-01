import type React from 'react';

interface BodyProps {
  content?: {
    plainText?: string;
    json?: {
      content?: unknown;
      toc?: unknown;
    };
    readingTime?: number;
  };
  className?: string;
}

// Simple placeholder for the Body (RichText) component
export const Body: React.FC<BodyProps> = ({ content, className }) => {
  if (!content) {
    return null;
  }

  // For simple text, use the plainText property
  if (content.plainText) {
    return <div className={className}>{content.plainText}</div>;
  }

  // For more complex content, we'd need to implement a renderer
  // This is just a placeholder
  return (
    <div className={className}>
      {content?.json?.content ? (
        <div>Content available but needs proper rendering</div>
      ) : (
        <div>No content available</div>
      )}
    </div>
  );
};
