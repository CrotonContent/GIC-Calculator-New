import React from 'react';

interface Props {
  label: string;
  value: string;
  color: string;
}

const ResultCard: React.FC<Props> = ({ label, value, color }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <p className="text-sm text-gray-600" id={`${label.toLowerCase()}-label`}>
      {label}
    </p>
    <p className={`text-2xl font-bold ${color}`} aria-labelledby={`${label.toLowerCase()}-label`}>
      {value}
    </p>
  </div>
);

export default ResultCard;