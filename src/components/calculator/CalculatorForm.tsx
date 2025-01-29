import React from 'react';
import { CalculatorInputs } from '../../types/calculator';
import InputField from '../common/InputField';
import TermSelector from './TermSelector';
import CompoundFrequencySelect from './CompoundFrequencySelect';
import CalculateButton from './CalculateButton';

interface Props {
  inputs: CalculatorInputs;
  onInputChange: (inputs: CalculatorInputs) => void;
  onCalculate: () => void;
}

const CalculatorForm: React.FC<Props> = ({ inputs, onInputChange, onCalculate }) => {
  return (
    <form 
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onCalculate();
      }}
      role="form"
      aria-label="GIC Calculator Form"
    >
      <InputField
        id="principal"
        label="Principal Amount"
        type="number"
        value={inputs.principal}
        onChange={(value) => onInputChange({ ...inputs, principal: Number(value) })}
        icon="dollar"
        tooltip="Enter the amount you want to invest in your GIC. Most financial institutions require a minimum of $500-$1,000."
      />

      <TermSelector
        term={inputs.term}
        onChange={(term) => onInputChange({ ...inputs, term })}
      />

      <InputField
        id="rate"
        label="Interest Rate (%)"
        type="number"
        value={inputs.rate}
        onChange={(value) => onInputChange({ ...inputs, rate: Number(value) })}
        icon="percent"
        step="0.01"
        tooltip="The annual interest rate offered by your financial institution. This is the nominal rate before compounding."
      />

      <CompoundFrequencySelect
        value={inputs.compoundFrequency}
        onChange={(value) => onInputChange({ ...inputs, compoundFrequency: Number(value) })}
      />

      <CalculateButton onClick={onCalculate} />
    </form>
  );
};

export default CalculatorForm;