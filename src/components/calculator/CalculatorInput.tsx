import React from 'react';
import { DollarSign, Calendar, Percent, RefreshCw } from 'lucide-react';
import { CalculatorInputs } from '../../types/calculator';
import Tooltip from '../common/Tooltip';

interface Props {
  inputs: CalculatorInputs;
  onInputChange: (inputs: CalculatorInputs) => void;
  onCalculate: () => void;
}

const CalculatorInput: React.FC<Props> = ({ inputs, onInputChange, onCalculate }) => {
  const commonTerms = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-4">
      <div>
        <Tooltip content="Enter the amount you want to invest in your GIC. Most financial institutions require a minimum of $500-$1,000.">
          <label className="block text-sm font-medium text-gray-700">Principal Amount</label>
        </Tooltip>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            value={inputs.principal}
            onChange={(e) => onInputChange({ ...inputs, principal: Number(e.target.value) })}
            className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="10000"
          />
        </div>
      </div>

      <div>
        <Tooltip content="Choose how long you want to invest your money. Longer terms typically offer higher interest rates.">
          <label className="block text-sm font-medium text-gray-700">Term (Years)</label>
        </Tooltip>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            value={inputs.term}
            onChange={(e) => onInputChange({ ...inputs, term: Number(e.target.value) })}
            className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="1"
          />
        </div>
        <div className="mt-2 flex gap-2">
          {commonTerms.map((term) => (
            <button
              key={term}
              onClick={() => onInputChange({ ...inputs, term })}
              className={`px-3 py-1 text-sm rounded ${
                inputs.term === term
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {term}Y
            </button>
          ))}
        </div>
      </div>

      <div>
        <Tooltip content="The annual interest rate offered by your financial institution. This is the nominal rate before compounding.">
          <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
        </Tooltip>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Percent className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            step="0.01"
            value={inputs.rate}
            onChange={(e) => onInputChange({ ...inputs, rate: Number(e.target.value) })}
            className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="4.5"
          />
        </div>
      </div>

      <div>
        <Tooltip content="How often the interest is calculated and added to your principal. More frequent compounding results in slightly higher returns.">
          <label className="block text-sm font-medium text-gray-700">Compound Frequency</label>
        </Tooltip>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RefreshCw className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={inputs.compoundFrequency}
            onChange={(e) => onInputChange({ ...inputs, compoundFrequency: Number(e.target.value) })}
            className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={1}>Annually</option>
            <option value={2}>Semi-annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
            <option value={365}>Daily</option>
          </select>
        </div>
      </div>

      <button
        onClick={onCalculate}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate
      </button>
    </div>
  );
};

export default CalculatorInput;