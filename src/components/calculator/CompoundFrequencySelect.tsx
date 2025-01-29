import React from 'react';
import InputField from '../common/InputField';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const CompoundFrequencySelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="space-y-1">
      <InputField
        id="compound-frequency"
        label="Compound Frequency"
        type="select"
        value={value}
        onChange={onChange}
        icon="refresh"
        tooltip="How often the interest is calculated and added to your principal. More frequent compounding results in slightly higher returns."
        options={[
          { value: 1, label: 'Annually' },
          { value: 2, label: 'Semi-annually' },
          { value: 4, label: 'Quarterly' },
          { value: 12, label: 'Monthly' },
          { value: 365, label: 'Daily' },
        ]}
      />
    </div>
  );
};

export default CompoundFrequencySelect;