import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import { CalculatorInputs, CalculatorResults as Results } from '../../types/calculator';
import { calculateGICResults } from '../../utils/calculations';
import { DEFAULT_CALCULATOR_INPUTS } from '../../utils/constants';

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_CALCULATOR_INPUTS);
  const [results, setResults] = useState<Results>({
    totalInterest: 0,
    finalAmount: 0,
    effectiveRate: 0,
  });

  const handleCalculate = () => {
    const newResults = calculateGICResults(inputs);
    setResults(newResults);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <CalculatorIcon className="h-6 w-6 text-blue-600" />
          GIC Calculator
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CalculatorForm
            inputs={inputs}
            onInputChange={setInputs}
            onCalculate={handleCalculate}
          />
          <CalculatorResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;