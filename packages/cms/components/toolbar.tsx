import type React from 'react';

// Simple placeholder for the Toolbar component
export const Toolbar: React.FC = () => {
  // Check if we're in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        right: '0',
        backgroundColor: '#333',
        color: 'white',
        padding: '8px 12px',
        borderTopLeftRadius: '8px',
        fontSize: '14px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
      }}
    >
      CMS Toolbar Placeholder
    </div>
  );
};
