import React from 'react';
import { CalculatorResults as Results } from '../../types/calculator';
import { formatCurrency, formatPercent } from '../../utils/formatters';
import ResultCard from './ResultCard';

interface Props {
  results: Results;
}

const CalculatorResults: React.FC<Props> = ({ results }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Results</h3>
      <div className="grid grid-cols-1 gap-4">
        <ResultCard
          label="Final Amount"
          value={formatCurrency(results.finalAmount)}
          color="text-blue-600"
        />
        <ResultCard
          label="Total Interest Earned"
          value={formatCurrency(results.totalInterest)}
          color="text-green-600"
        />
        <ResultCard
          label="Effective Annual Rate"
          value={formatPercent(results.effectiveRate)}
          color="text-purple-600"
        />
      </div>
    </div>
  );
};

export default CalculatorResults;