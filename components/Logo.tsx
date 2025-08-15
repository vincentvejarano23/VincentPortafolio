import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="/assets/logo.png" 
      alt="Vincent Logo"
      className={className} 
    />
  );
};
