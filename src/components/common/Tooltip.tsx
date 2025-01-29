import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="inline-flex items-center cursor-help">
        {children}
        <span className="ml-1 text-gray-400 hover:text-gray-600 transition-colors">ⓘ</span>
      </div>
      {isVisible && (
        <div
          role="tooltip"
          className="absolute z-10 left-0 bottom-full mb-2 w-64 p-2
            bg-gray-900 text-white text-sm rounded-lg shadow-lg"
        >
          {content}
          <div 
            className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;