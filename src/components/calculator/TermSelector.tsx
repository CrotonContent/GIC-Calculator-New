import React from 'react';
import InputField from '../common/InputField';

interface Props {
  term: number;
  onChange: (term: number) => void;
}

const TermSelector: React.FC<Props> = ({ term, onChange }) => {
  const commonTerms = [1, 2, 3, 4, 5];

  return (
    <div>
      <InputField
        id="term"
        label="Term (Years)"
        type="number"
        value={term}
        onChange={(value) => onChange(Number(value))}
        icon="calendar"
        tooltip="Choose how long you want to invest your money. Longer terms typically offer higher interest rates."
      />
      <div className="mt-2 flex gap-2" role="group" aria-label="Common term selections">
        {commonTerms.map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`px-3 py-1 text-sm rounded ${
              term === t
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={term === t}
            type="button"
          >
            {t}Y
          </button>
        ))}
      </div>
    </div>
  );
};

export default TermSelector;