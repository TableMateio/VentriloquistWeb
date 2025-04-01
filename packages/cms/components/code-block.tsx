import type * as React from 'react';

interface CodeBlockProps {
  code?: string;
  filename?: string;
  language?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  filename,
  language,
  className,
}) => {
  if (!code) {
    return null;
  }

  return (
    <div className={`overflow-hidden rounded-md ${className || ''}`}>
      {filename && (
        <div className="border-gray-700 border-b bg-gray-800 px-4 py-2 text-gray-300 text-xs">
          {filename}
          {language && <span className="ml-2 text-gray-500">{language}</span>}
        </div>
      )}
      <pre className="overflow-auto bg-gray-900 p-4 text-gray-300 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};
