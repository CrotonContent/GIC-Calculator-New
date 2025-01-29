import React from 'react';

interface Props {
  onClick: () => void;
}

const CalculateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
    >
      Calculate
    </button>
  );
};

export default CalculateButton;